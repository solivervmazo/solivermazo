import{u as a,o as n,c as e,a as l}from"./app-7140e397.js";const t={class:"markdown-body"},r=l(`<pre class="hljs"><code><span class="hljs-comment"># This Python 3 environment comes with many helpful analytics libraries installed</span>
<span class="hljs-comment"># It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python</span>
<span class="hljs-comment"># For example, here&#39;s several helpful packages to load</span>

<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np <span class="hljs-comment"># linear algebra</span>
<span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd <span class="hljs-comment"># data processing, CSV file I/O (e.g. pd.read_csv)</span>
<span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt
<span class="hljs-keyword">import</span> seaborn <span class="hljs-keyword">as</span> sns

<span class="hljs-comment"># Input data files are available in the read-only &quot;../input/&quot; directory</span>
<span class="hljs-comment"># For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory</span>

<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">for</span> dirname, _, filenames <span class="hljs-keyword">in</span> os.walk(<span class="hljs-string">&#39;/kaggle/input&#39;</span>):
    <span class="hljs-keyword">for</span> filename <span class="hljs-keyword">in</span> filenames:
        <span class="hljs-built_in">print</span>(os.path.join(dirname, filename))

<span class="hljs-comment"># You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using &quot;Save &amp; Run All&quot; </span>
<span class="hljs-comment"># You can also write temporary files to /kaggle/temp/, but they won&#39;t be saved outside of the current session</span>
</code></pre><p>Data source: <a href="http://">https://www.kaggle.com/datasets/aungpyaeap/supermarket-sales</a></p><h1><strong>Context</strong></h1><p>The growth of supermarkets in most populated cities are increasing and market competitions are also high. The dataset is one of the historical sales of supermarket company which has recorded in 3 different brtanches for 3 months data.</p><h1><strong>Data Dictionary</strong></h1><ol><li><strong>Invoice id</strong>: Computer generated sales slip invoice identification number</li><li><strong>Branch</strong>: Branch of supercenter(3 branches available identified as A, B and C)</li><li><strong>City</strong>: Location of supercenters</li><li><strong>Customer type</strong>: Type of customers, recorded by Members for customers using member card and Normal for without member card</li><li><strong>Gender</strong>: Gender of customer</li><li><strong>Product line</strong>: General item categorization groups- Electronic accessories, Fashion accessories, Food and beverages, Health and beauty, Home and lifestyle, Sports and travel</li><li><strong>Unit price</strong>: Price of each product in USD</li><li><strong>Quantity</strong> Number of products purchased by customer</li><li><strong>Tax</strong>: 5% tax fee for customer buying</li><li><strong>Total</strong>: Total price including tax</li><li><strong>Date</strong>: Date of purchase</li><li><strong>Time</strong>: Time of Purchase(10am-9pm)</li><li><strong>Payment</strong>: Payment used by customer for purchase(Cash, Credit card and EWallet)</li><li><strong>COGS</strong>: Cost of goods sold</li><li><strong>Rating</strong>: Customer stratification rating on their overall shopping experience( On a scale of 1 to 10)</li></ol><h2>Initial Data Exploration</h2><pre class="hljs"><code><span class="hljs-comment">## read our data set</span>
df= pd.read_csv(<span class="hljs-string">&#39;/kaggle/input/supermarket-sales/supermarket_sales - Sheet1.csv&#39;</span>)
</code></pre><pre class="hljs"><code><span class="hljs-comment">## shows top 10 of the row, use tail(x), x = rows to show the last rows</span>
df.head(<span class="hljs-number">10</span>)
</code></pre><pre class="hljs"><code><span class="hljs-comment">## shows columns</span>
df.columns
</code></pre><pre class="hljs"><code><span class="hljs-comment">## shows column definition</span>
df.dtypes
</code></pre><pre class="hljs"><code><span class="hljs-comment">## converts our date as string to datetime</span>
df[<span class="hljs-string">&#39;Date&#39;</span>] = pd.to_datetime(df[<span class="hljs-string">&#39;Date&#39;</span>])
df[<span class="hljs-string">&#39;Date&#39;</span>]
</code></pre><pre class="hljs"><code><span class="hljs-comment">## set the index of our dataset</span>
df.set_index(<span class="hljs-string">&#39;Date&#39;</span>, inplace=<span class="hljs-literal">True</span>)
</code></pre><pre class="hljs"><code>df.head(<span class="hljs-number">5</span>)
</code></pre><pre class="hljs"><code><span class="hljs-comment">## computes a summary of statistics pertaining to the DataFrame columns</span>
df.describe()
</code></pre><h2>Univariate Analysis</h2><p>What does the distribution of customer ratings looks like? is it skewed?</p><pre class="hljs"><code>sns.displot(df[<span class="hljs-string">&#39;Rating&#39;</span>])
plt.axvline(x=np.mean(df[<span class="hljs-string">&#39;Rating&#39;</span>]), c=<span class="hljs-string">&#39;red&#39;</span>, ls=<span class="hljs-string">&#39;--&#39;</span>, label=<span class="hljs-string">&#39;mean&#39;</span>)
plt.axvline(x=np.percentile(df[<span class="hljs-string">&#39;Rating&#39;</span>], <span class="hljs-number">25</span>), c=<span class="hljs-string">&#39;green&#39;</span>, ls=<span class="hljs-string">&#39;--&#39;</span>, label=<span class="hljs-string">&#39;25th-75th percentile&#39;</span>)
plt.axvline(x=np.percentile(df[<span class="hljs-string">&#39;Rating&#39;</span>], <span class="hljs-number">75</span>), c=<span class="hljs-string">&#39;green&#39;</span>, ls=<span class="hljs-string">&#39;--&#39;</span>)
</code></pre><p>Do aggregate sales numbers differ by much between branches?</p><pre class="hljs"><code>df.hist(figsize=(<span class="hljs-number">10</span>,<span class="hljs-number">10</span>))
</code></pre><pre class="hljs"><code>sns.countplot(data=df, x=<span class="hljs-string">&#39;Branch&#39;</span>)
</code></pre><pre class="hljs"><code>sns.countplot(data=df, x=<span class="hljs-string">&#39;Payment&#39;</span>)
</code></pre><h2>Bivariate Analysis</h2><p>Is ther a relationship between gross income and customer ratings?</p><pre class="hljs"><code>sns.regplot(data=df, x=<span class="hljs-string">&#39;Rating&#39;</span>, y=<span class="hljs-string">&#39;gross income&#39;</span>)
</code></pre><pre class="hljs"><code>sns.boxplot(x=df[<span class="hljs-string">&#39;Branch&#39;</span>],y=df[<span class="hljs-string">&#39;gross income&#39;</span>])
</code></pre><pre class="hljs"><code>sns.boxplot(x=df[<span class="hljs-string">&#39;Gender&#39;</span>],y=df[<span class="hljs-string">&#39;gross income&#39;</span>])
</code></pre><p>Is there a noticeabke time trend in gross income?</p><pre class="hljs"><code>df.head()
</code></pre><pre class="hljs"><code>sns.lineplot(x=df.groupby(df.index).mean().index, y=df.groupby(df.index).mean()[<span class="hljs-string">&#39;gross income&#39;</span>])

</code></pre><h2>Dealing With Duplicate Rows and Missing Values</h2><pre class="hljs"><code>df.duplicated().<span class="hljs-built_in">sum</span>()
<span class="hljs-comment">## shows duplicated rows</span>
<span class="hljs-comment"># df[df.duplicated() == True] </span>
<span class="hljs-comment">## removes duplicate rows if there is any</span>
<span class="hljs-comment"># df.drop_duplicates(inplace=True)</span>
</code></pre><pre class="hljs"><code>df.isna().<span class="hljs-built_in">sum</span>()
<span class="hljs-comment">## get ratio of empty cells by columns</span>
<span class="hljs-comment"># df.isna().sum()/len(df)</span>
</code></pre><pre class="hljs"><code>sns.heatmap(df.isnull(), cbar=<span class="hljs-literal">False</span>)
<span class="hljs-comment">## fill missing data for numerical values</span>
<span class="hljs-comment">#df.fillna(df.mean(), inplace=True)</span>
<span class="hljs-comment">## fill missing data for non-numerical values</span>
<span class="hljs-comment">#df.fillna(df.mode().iloc[0],inplace=True)</span>
</code></pre><pre class="hljs"><code>dataset = pd.read_csv(<span class="hljs-string">&#39;/kaggle/input/supermarket-sales/supermarket_sales - Sheet1.csv&#39;</span>)
profile = ProfileReport(dataset)
profile
</code></pre><h2>Correlation Analysis</h2><pre class="hljs"><code><span class="hljs-built_in">round</span>(np.corrcoef(df[<span class="hljs-string">&#39;gross income&#39;</span>], df[<span class="hljs-string">&#39;Rating&#39;</span>])[<span class="hljs-number">1</span>][<span class="hljs-number">0</span>],<span class="hljs-number">2</span>)
</code></pre><pre class="hljs"><code>np.<span class="hljs-built_in">round</span>(df.corr(),<span class="hljs-number">2</span>)
</code></pre><pre class="hljs"><code>sns.heatmap(np.<span class="hljs-built_in">round</span>(df.corr(),<span class="hljs-number">2</span>), annot=<span class="hljs-literal">True</span>)
</code></pre><pre class="hljs"><code>&gt; soliver mazo
</code></pre>`,40),o=[r],g=[],u={__name:"notebook",setup(p,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(d,h)=>(n(),e("div",t,o))}};export{u as default,g as meta};
