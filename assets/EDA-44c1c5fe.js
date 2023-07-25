import{u as n,o as a,c as e,a as l}from"./app-0c0763ab.js";const p={class:"markdown-body"},t=l(`<pre class="hljs"><code><span class="hljs-comment"># This Python 3 environment comes with many helpful analytics libraries installed</span>
<span class="hljs-comment"># It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python</span>
<span class="hljs-comment"># For example, here&#39;s several helpful packages to load</span>

<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np <span class="hljs-comment"># linear algebra</span>
<span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd <span class="hljs-comment"># data processing, CSV file I/O (e.g. pd.read_csv)</span>

<span class="hljs-comment"># Input data files are available in the read-only &quot;../input/&quot; directory</span>
<span class="hljs-comment"># For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory</span>

<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">for</span> dirname, _, filenames <span class="hljs-keyword">in</span> os.walk(<span class="hljs-string">&#39;/kaggle/input&#39;</span>):
    <span class="hljs-keyword">for</span> filename <span class="hljs-keyword">in</span> filenames:
        <span class="hljs-built_in">print</span>(os.path.join(dirname, filename))

<span class="hljs-comment"># You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using &quot;Save &amp; Run All&quot; </span>
<span class="hljs-comment"># You can also write temporary files to /kaggle/temp/, but they won&#39;t be saved outside of the current session</span>
</code></pre><h2>Exploring Data For Analysis</h2><p><em>Convert data set to dataframe using Pandas</em></p><pre class="hljs"><code>bike_df_or = pd.read_csv(<span class="hljs-string">&#39;/kaggle/input/london-bike-sharing-dataset/london_merged.csv&#39;</span>)
bike_df_or.info()
</code></pre><pre class="hljs"><code>bike_df_or.shape
</code></pre><p><em>Change column names to more intuitive values</em></p><pre class="hljs"><code><span class="hljs-comment"># Create copy before we make any changes, inplace=True</span>
bike_df_or.to_csv(<span class="hljs-string">&#39;dataset_07192023.csv&#39;</span>, index=<span class="hljs-literal">False</span>)
bike_df = pd.read_csv(<span class="hljs-string">&#39;/kaggle/working/dataset_07192023.csv&#39;</span>)
bike_df.info()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># map our columns to dictionary</span>
columns = <span class="hljs-built_in">dict</span>( <span class="hljs-built_in">zip</span>( bike_df.columns, [
    <span class="hljs-string">&#39;time&#39;</span>, <span class="hljs-comment">#timestamp</span>
    <span class="hljs-string">&#39;count&#39;</span>, <span class="hljs-comment">#cnt</span>
    <span class="hljs-string">&#39;temp_real_celd&#39;</span>, <span class="hljs-comment">#t1</span>
    <span class="hljs-string">&#39;temp_feel_celd&#39;</span>, <span class="hljs-comment">#t2</span>
    <span class="hljs-string">&#39;humidity_percent&#39;</span>, <span class="hljs-comment">#hum</span>
    <span class="hljs-string">&#39;wind_speed_kph&#39;</span>, <span class="hljs-comment">#wind_speed</span>
    <span class="hljs-string">&#39;weather&#39;</span>, <span class="hljs-comment">#weather_code</span>
    <span class="hljs-string">&#39;is_holiday&#39;</span>, <span class="hljs-comment">#is_holiday</span>
    <span class="hljs-string">&#39;is_weekend&#39;</span>, <span class="hljs-comment">#is_weekend</span>
    <span class="hljs-string">&#39;season&#39;</span> <span class="hljs-comment">#season</span>
] ))
columns
    
</code></pre><pre class="hljs"><code><span class="hljs-comment"># rename the columns of our dataframe to our mapped columns</span>
bike_df.rename(columns, axis=<span class="hljs-number">1</span>, inplace=<span class="hljs-literal">True</span>)
bike_df.info()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># convert humidity to percentage</span>
bike_df.humidity_percent = bike_df.humidity_percent / <span class="hljs-number">100</span>
bike_df.humidity_percent
</code></pre><pre class="hljs"><code><span class="hljs-comment"># we also need to map our season and weather to intuitive values </span>
<span class="hljs-comment"># season: 0.0=spring, 1.0=summer, 2.0=autumn, 3.0=winter </span>
<span class="hljs-comment"># weather: 1.0=Clear, 2.0=Scattered clouds, 3.0=Broken clouds, 4.0=Cloudy,</span>
<span class="hljs-comment"># 7.0=Rainy, 10.0=Rain with thunderstorm, 26.0=Snowfall</span>

<span class="hljs-comment"># Change the data type of season and weather before we map the values</span>
bike_df.season = bike_df.season.astype(<span class="hljs-string">&#39;str&#39;</span>)
bike_df.season = bike_df.season.<span class="hljs-built_in">map</span>({
    <span class="hljs-string">&#39;0.0&#39;</span>:<span class="hljs-string">&#39;spring&#39;</span>, <span class="hljs-string">&#39;1.0&#39;</span>:<span class="hljs-string">&#39;summer&#39;</span>, <span class="hljs-string">&#39;2.0&#39;</span>:<span class="hljs-string">&#39;autumn&#39;</span>, <span class="hljs-string">&#39;3.0&#39;</span>:<span class="hljs-string">&#39;winter&#39;</span>
})

bike_df.weather = bike_df.weather.astype(<span class="hljs-string">&#39;str&#39;</span>)
bike_df.weather = bike_df.weather.<span class="hljs-built_in">map</span>({
    <span class="hljs-string">&#39;1.0&#39;</span>:<span class="hljs-string">&#39;Clear&#39;</span>, <span class="hljs-string">&#39;2.0&#39;</span>:<span class="hljs-string">&#39;Scattered clouds&#39;</span>, <span class="hljs-string">&#39;3.0&#39;</span>:<span class="hljs-string">&#39;Broken clouds&#39;</span>, <span class="hljs-string">&#39;4.0&#39;</span>:<span class="hljs-string">&#39;Cloudy&#39;</span>,
     <span class="hljs-string">&#39;7.0&#39;</span>:<span class="hljs-string">&#39;Rainy&#39;</span>, <span class="hljs-string">&#39;10.0&#39;</span>:<span class="hljs-string">&#39;Rain with thunderstorm&#39;</span>, <span class="hljs-string">&#39;26.0&#39;</span>:<span class="hljs-string">&#39;Snowfall&#39;</span>
})

bike_df.head()
</code></pre><h2>Final checking of our dataset</h2><pre class="hljs"><code><span class="hljs-comment"># check for duplicate rows</span>
bike_df.duplicated().<span class="hljs-built_in">sum</span>()
<span class="hljs-comment">## shows duplicated rows</span>
<span class="hljs-comment"># df[df.duplicated() == True] </span>
<span class="hljs-comment">## removes duplicate rows if there is any</span>
<span class="hljs-comment"># df.drop_duplicates(inplace=True)</span>
</code></pre><pre class="hljs"><code><span class="hljs-comment"># check for null values</span>
bike_df.isna().<span class="hljs-built_in">sum</span>()
<span class="hljs-comment">## get ratio of empty cells by columns</span>
<span class="hljs-comment"># df.isna().sum()/len(df)</span>
</code></pre><h2>Exporting dataframe to excel for data viz in Tableau</h2><pre class="hljs"><code>bike_df.to_excel(<span class="hljs-string">&#39;london_bikes_cleaned.xlsx&#39;</span>, sheet_name=<span class="hljs-string">&#39;data&#39;</span>)
</code></pre><pre class="hljs"><code>bike_cleaned_df = pd.read_excel(<span class="hljs-string">&#39;/kaggle/working/london_bikes_cleaned.xlsx&#39;</span>)
bike_cleaned_df.head()
</code></pre>`,17),c=[t],j=[],u={__name:"EDA",setup(o,{expose:s}){return s({frontmatter:{meta:[]}}),n({meta:[]}),(h,d)=>(a(),e("div",p,c))}};export{u as default,j as meta};
