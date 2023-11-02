import{u as a,o as n,c as l,a as p}from"./app-d176f5ae.js";const e={class:"markdown-body"},t=p(`<pre class="hljs"><code><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd
<span class="hljs-keyword">from</span> ydata_profiling <span class="hljs-keyword">import</span> ProfileReport

<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">for</span> dirname, _, filenames <span class="hljs-keyword">in</span> os.walk(<span class="hljs-string">&#39;/kaggle/input&#39;</span>):
    <span class="hljs-keyword">for</span> filename <span class="hljs-keyword">in</span> filenames:
        <span class="hljs-built_in">print</span>(os.path.join(dirname, filename))
</code></pre><h1>Data Exploration and Data Cleaning/Preprocessing</h1><pre class="hljs"><code>sales = pd.read_csv(<span class="hljs-string">&#39;/kaggle/input/iowa-liquor-sales/Iowa_Liquor_Sales.csv&#39;</span>)
sales.head(<span class="hljs-number">20</span>)
</code></pre><h3>We need to profile our data sets to see the overview and initially analyse the data</h3><pre class="hljs"><code><span class="hljs-comment"># This may take a while</span>
<span class="hljs-comment">#profile = ProfileReport(sales)</span>
<span class="hljs-comment">#profile</span>
</code></pre><h2>Data type coversion</h2><h3>Convert date columns to datetime data type</h3><pre class="hljs"><code>sales[<span class="hljs-string">&#39;Date&#39;</span>] = pd.to_datetime(sales[<span class="hljs-string">&#39;Date&#39;</span>])
sales[<span class="hljs-string">&#39;Date&#39;</span>].astype
</code></pre><h2>Check for Na</h2><pre class="hljs"><code>sales.columns.isna()
</code></pre><h2>Check for relevant data for inconsistency/anomally</h2><pre class="hljs"><code><span class="hljs-comment"># We will convert the City to uppercase and strip white spaces so we can get better results</span>
sales[<span class="hljs-string">&#39;City&#39;</span>] = sales[<span class="hljs-string">&#39;City&#39;</span>].<span class="hljs-built_in">str</span>.upper()
sales[<span class="hljs-string">&#39;City&#39;</span>] = sales[<span class="hljs-string">&#39;City&#39;</span>].<span class="hljs-built_in">str</span>.strip()
cities = pd.DataFrame(sales[<span class="hljs-string">&#39;City&#39;</span>].value_counts(ascending=<span class="hljs-literal">True</span>))
cities[<span class="hljs-string">&#39;Name&#39;</span>] = cities.index
cities
</code></pre><pre class="hljs"><code><span class="hljs-comment"># We noticed that there are significally low numbers of City count, </span>
<span class="hljs-comment"># To make sure these are not mistake. We import nltk </span>
<span class="hljs-keyword">import</span> nltk
<span class="hljs-keyword">for</span> city <span class="hljs-keyword">in</span> cities[cities[<span class="hljs-string">&#39;City&#39;</span>] &lt; <span class="hljs-number">1000</span>][<span class="hljs-string">&#39;Name&#39;</span>]:
    <span class="hljs-keyword">for</span> compare <span class="hljs-keyword">in</span> cities[<span class="hljs-string">&#39;Name&#39;</span>]:
        distance = nltk.edit_distance(compare, city)
        <span class="hljs-keyword">if</span>  distance &gt; <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> distance &lt; <span class="hljs-number">3</span>:
            <span class="hljs-built_in">print</span>((compare, city))
</code></pre><h3>Based on the result we map</h3><pre><code>{ 
    &#39;CLEARLAKE&#39;: &#39;CLEAR LAKE&#39;,
    &#39;GRAND MOUNDS&#39;, &#39;GRAND MOUND&#39;,
    &#39;OTUMWA&#39;, &#39;OTTUMWA&#39;
}
</code></pre><pre class="hljs"><code>sales[<span class="hljs-string">&#39;City&#39;</span>].<span class="hljs-built_in">map</span>(
    { 
        <span class="hljs-string">&#39;CLEARLAKE&#39;</span>: <span class="hljs-string">&#39;CLEAR LAKE&#39;</span>,
        <span class="hljs-string">&#39;GRAND MOUNDS&#39;</span>: <span class="hljs-string">&#39;GRAND MOUND&#39;</span>,
        <span class="hljs-string">&#39;OTUMWA&#39;</span>: <span class="hljs-string">&#39;OTTUMWA&#39;</span>
    }
)
sales[<span class="hljs-string">&#39;City&#39;</span>].value_counts()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># We will also implement the same logic to County</span>
sales[<span class="hljs-string">&#39;County&#39;</span>] = sales[<span class="hljs-string">&#39;County&#39;</span>].<span class="hljs-built_in">str</span>.upper()
sales[<span class="hljs-string">&#39;County&#39;</span>] = sales[<span class="hljs-string">&#39;County&#39;</span>].<span class="hljs-built_in">str</span>.strip()
counties = pd.DataFrame(sales[<span class="hljs-string">&#39;County&#39;</span>].value_counts(ascending=<span class="hljs-literal">True</span>))
counties[<span class="hljs-string">&#39;Name&#39;</span>] = counties.index

<span class="hljs-keyword">for</span> county <span class="hljs-keyword">in</span> counties[counties[<span class="hljs-string">&#39;County&#39;</span>] &lt; <span class="hljs-number">1000</span>][<span class="hljs-string">&#39;Name&#39;</span>]:
    <span class="hljs-keyword">for</span> compare <span class="hljs-keyword">in</span> counties[<span class="hljs-string">&#39;Name&#39;</span>]:
        distance = nltk.edit_distance(compare, county)
        <span class="hljs-keyword">if</span>  distance &gt; <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> distance &lt; <span class="hljs-number">3</span>:
            <span class="hljs-built_in">print</span>((compare, county))
</code></pre><pre class="hljs"><code>sales.head()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># while trying to imort the output csv file, was having trouble with the Stroe Location</span>
sales[<span class="hljs-string">&#39;City&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code>sales[<span class="hljs-string">&#39;Store Location&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code>sales[<span class="hljs-string">&#39;Item Description&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code>sales[<span class="hljs-string">&#39;Item Description&#39;</span>] = sales[<span class="hljs-string">&#39;Item Description&#39;</span>].<span class="hljs-built_in">str</span>.replace(<span class="hljs-string">&#39;,&#39;</span>, <span class="hljs-string">&#39; &#39;</span>)
sales[<span class="hljs-string">&#39;Item Description&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code>sales[<span class="hljs-string">&#39;Store Name&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code>sales[<span class="hljs-string">&#39;Store Name&#39;</span>] = sales[<span class="hljs-string">&#39;Store Name&#39;</span>].<span class="hljs-built_in">str</span>.replace(<span class="hljs-string">&#39;,&#39;</span>, <span class="hljs-string">&#39; &#39;</span>)
sales[<span class="hljs-string">&#39;Store Name&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code>sales[<span class="hljs-string">&#39;Store Lat&#39;</span>] = sales[<span class="hljs-string">&#39;Store Location&#39;</span>].<span class="hljs-built_in">str</span>.extract(<span class="hljs-string">r&#39;\\(([^)]+)\\,&#39;</span>)
sales[<span class="hljs-string">&#39;Store Long&#39;</span>] = sales[<span class="hljs-string">&#39;Store Location&#39;</span>].<span class="hljs-built_in">str</span>.extract(<span class="hljs-string">r&#39;\\d,(.*)\\)&#39;</span>)
sales[<span class="hljs-string">&#39;Address&#39;</span>] = sales[<span class="hljs-string">&#39;Address&#39;</span>].<span class="hljs-built_in">str</span>.replace(<span class="hljs-string">&#39;,&#39;</span>, <span class="hljs-string">&#39; &#39;</span>)
(
    sales[<span class="hljs-string">&#39;Store Lat&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>(), 
    sales[<span class="hljs-string">&#39;Store Long&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>(), 
    sales[<span class="hljs-string">&#39;Address&#39;</span>].<span class="hljs-built_in">str</span>.contains(<span class="hljs-string">&#39;,&#39;</span>).<span class="hljs-built_in">sum</span>()
)
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Notice that sales and bottle cost are in string type with actual $ in it</span>
sales[<span class="hljs-string">&#39;State Bottle Cost&#39;</span>] = sales[<span class="hljs-string">&#39;State Bottle Cost&#39;</span>].<span class="hljs-built_in">str</span>.replace(<span class="hljs-string">&#39;\\$&#39;</span>, <span class="hljs-string">&#39;&#39;</span>)
sales[<span class="hljs-string">&#39;State Bottle Retail&#39;</span>] = sales[<span class="hljs-string">&#39;State Bottle Retail&#39;</span>].<span class="hljs-built_in">str</span>.replace(<span class="hljs-string">&#39;\\$&#39;</span>, <span class="hljs-string">&#39;&#39;</span>)
sales[<span class="hljs-string">&#39;Sale (Dollars)&#39;</span>] = sales[<span class="hljs-string">&#39;Sale (Dollars)&#39;</span>].<span class="hljs-built_in">str</span>.replace(<span class="hljs-string">&#39;\\$&#39;</span>, <span class="hljs-string">&#39;&#39;</span>)
</code></pre><h1>Great! Now we will export our dataframe for Tableau</h1><pre class="hljs"><code>sales.loc[:, sales.columns != <span class="hljs-string">&#39;Store Location&#39;</span>].to_csv(<span class="hljs-string">&#39;iowa_liquor_sales_2015.csv&#39;</span>)
</code></pre><pre class="hljs"><code>sales_cleaned = pd.read_csv(<span class="hljs-string">&#39;/kaggle/working/iowa_liquor_sales_2015.csv&#39;</span>)
sales_cleaned.head()
</code></pre>`,29),c=[t],g=[],u={__name:"EDA",setup(i,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(h,j)=>(n(),l("div",e,c))}};export{u as default,g as meta};
