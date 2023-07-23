import{u as n,o as a,c as t,a as e}from"./app-9d9615dd.js";const o={class:"markdown-body"},l=e(`<pre class="hljs"><code><span class="hljs-comment"># This Python 3 environment comes with many helpful analytics libraries installed</span>
<span class="hljs-comment"># It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python</span>
<span class="hljs-comment"># For example, here&#39;s several helpful packages to load</span>

<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np <span class="hljs-comment"># linear algebra</span>
<span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd <span class="hljs-comment"># data processing, CSV file I/O (e.g. pd.read_csv)</span>
<span class="hljs-keyword">import</span> sqlite3
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
</code></pre><h1>Data Exploration and Data Cleaning/Preprocessing</h1><pre class="hljs"><code>database = <span class="hljs-string">&#39;/kaggle/input/project-files/data.sqlite&#39;</span>
conn = sqlite3.connect(database)
tables = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT *
                        FROM sqlite_master
                        WHERE type=&#39;table&#39; 
                            AND tbl_name IN (
                                &#39;posts&#39;,
                                &#39;comments&#39;,
                                &#39;users&#39;,
                                &#39;votes&#39;
                            );&quot;&quot;&quot;</span>, conn)
tables
</code></pre><pre class="hljs"><code>comments = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT * FROM comments;&quot;&quot;&quot;</span>, conn)
comments.info()
</code></pre><pre class="hljs"><code>comments.isna().<span class="hljs-built_in">any</span>().<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Convert date columns to datetime data type</span>
comments[<span class="hljs-string">&#39;CreationDate&#39;</span>] = pd.to_datetime(comments[<span class="hljs-string">&#39;CreationDate&#39;</span>])

<span class="hljs-comment"># Remove any leading or trailing white spaces from text columns</span>
comments[<span class="hljs-string">&#39;Text&#39;</span>] = comments[<span class="hljs-string">&#39;Text&#39;</span>].<span class="hljs-built_in">str</span>.strip()

comments.info()
</code></pre><pre class="hljs"><code>posts = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT * FROM posts;&quot;&quot;&quot;</span>, conn)
posts.info()
</code></pre><pre class="hljs"><code>posts.isna().<span class="hljs-built_in">any</span>().<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Convert date columns to datetime data type</span>
posts[<span class="hljs-string">&#39;CreationDate&#39;</span>] = pd.to_datetime(posts[<span class="hljs-string">&#39;CreationDate&#39;</span>])
posts[<span class="hljs-string">&#39;LastEditDate&#39;</span>] = pd.to_datetime(posts[<span class="hljs-string">&#39;LastEditDate&#39;</span>])
posts[<span class="hljs-string">&#39;LastActivityDate&#39;</span>] = pd.to_datetime(posts[<span class="hljs-string">&#39;LastActivityDate&#39;</span>])
posts[<span class="hljs-string">&#39;ClosedDate&#39;</span>] = pd.to_datetime(posts[<span class="hljs-string">&#39;ClosedDate&#39;</span>])

posts.head()
</code></pre><pre class="hljs"><code>users = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT 
    Id,
    Reputation,
    CreationDate,
    DisplayName,
    LastAccessDate,
    WebsiteUrl,
    Location,
    Age,
    Views,
    UpVotes,
    DownVotes
FROM users;&quot;&quot;&quot;</span>, conn)
users.info()
</code></pre><pre class="hljs"><code>users.isna().<span class="hljs-built_in">any</span>().<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Convert date columns to datetime data type</span>
users[<span class="hljs-string">&#39;CreationDate&#39;</span>] = pd.to_datetime(users[<span class="hljs-string">&#39;CreationDate&#39;</span>])

<span class="hljs-comment"># Remove any leading or trailing white spaces from text columns</span>
users[<span class="hljs-string">&#39;WebsiteUrl&#39;</span>] = users[<span class="hljs-string">&#39;WebsiteUrl&#39;</span>].<span class="hljs-built_in">str</span>.strip()
users[<span class="hljs-string">&#39;Location&#39;</span>] = users[<span class="hljs-string">&#39;Location&#39;</span>].<span class="hljs-built_in">str</span>.strip()

users.info()
</code></pre><pre class="hljs"><code>votes = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT * FROM votes;&quot;&quot;&quot;</span>, conn)
votes.info()
</code></pre><pre class="hljs"><code>votes.isna().<span class="hljs-built_in">any</span>().<span class="hljs-built_in">sum</span>()
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Convert date columns to datetime data type</span>
votes[<span class="hljs-string">&#39;CreationDate&#39;</span>] = pd.to_datetime(votes[<span class="hljs-string">&#39;CreationDate&#39;</span>])
votes.info()
</code></pre><h1>Basic Analysis</h1><h2>How many posts were made each year?</h2><pre class="hljs"><code>posts_by_year = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT 
        COUNT(*) AS posts_count,
        STRFTIME(&#39;%Y&#39;, CreationDate) AS year 
    FROM posts
    GROUP BY STRFTIME(&#39;%Y&#39;, CreationDate);&quot;&quot;&quot;</span>, conn)

posts_by_year
</code></pre><h2>How many votes were made on each day of the week?</h2><pre class="hljs"><code>votes_by_year = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT 
        COUNT(*) AS votes_count,
        STRFTIME(&#39;%w&#39;, CreationDate) AS day 
    FROM votes
    GROUP BY STRFTIME(&#39;%w&#39;, CreationDate);&quot;&quot;&quot;</span>, conn)

votes_by_year
</code></pre><h2>How many comments were made on each day of the week?</h2><pre class="hljs"><code>votes_by_year = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;SELECT 
        COUNT(*) AS comments_count,
        STRFTIME(&#39;%w&#39;, CreationDate) AS day 
    FROM comments
    GROUP BY STRFTIME(&#39;%w&#39;, CreationDate);&quot;&quot;&quot;</span>, conn)

votes_by_year
</code></pre><h1>Advanced Analysis</h1><h2>Get relevant data to analyze voting behavior by location</h2><p><em>Group the data by the location of the post and count number of votes per post for each voter’s location.</em></p><pre class="hljs"><code>voting_df = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;
    
    SELECT
        p.id AS PostId,
        p.AuthorID,
        p.AuthorLocation,
        v.id AS VoterId,
        NULLIF(v.location, &#39;&#39;) VoterLocation,
        COALESCE(v.Votes, 0) Votes
    FROM (
        SELECT 
            p.id,
            u.id AS AuthorID,
            u.location AS AuthorLocation
        FROM posts p
        INNER JOIN users u
        ON p.OwnerUserId = u.id
    ) p
    LEFT JOIN (
        SELECT
            v.PostId,
            u.id,
            u.location,
            COUNT(*) Votes
        FROM votes v
        INNER JOIN users u
        ON v.UserId = u.id
        GROUP BY u.location
    ) v
    ON p.id = v.PostId
    ;
&quot;&quot;&quot;</span>, conn)
voting_df
</code></pre><h2>Get relevant data to analyze commenting behavior by location</h2><p><em>Group the data by the location of the post and count number of comments per post for each commenters’s location.</em></p><pre class="hljs"><code>commenting_df = pd.read_sql(<span class="hljs-string">&quot;&quot;&quot;
    SELECT
        p.id AS PostId,
        p.AuthorID,
        p.AuthorLocation,
        c.id AS CommenterId,
        NULLIF(c.location, &#39;&#39;) CommenterLocation,
        COALESCE(c.Comments, 0) Comments
    FROM (
        SELECT 
            p.id,
            u.id AS AuthorID,
            u.location AS AuthorLocation
        FROM posts p
        INNER JOIN users u
        ON p.OwnerUserId = u.id
    ) p
    LEFT JOIN (
        SELECT
            c.PostId,
            u.id,
            u.location,
            COUNT(*) Comments
        FROM comments c
        INNER JOIN users u
        ON c.UserId = u.id
        GROUP BY u.location
    ) c
    ON p.id = c.PostId
    ;
&quot;&quot;&quot;</span>, conn)
commenting_df
</code></pre><pre class="hljs"><code>country_dictionary = pd.read_json(<span class="hljs-string">&#39;/kaggle/input/project-files/country_dictionary.json&#39;</span>,  typ=<span class="hljs-string">&#39;series&#39;</span>)
country_dictionary
</code></pre><pre class="hljs"><code><span class="hljs-comment"># We also map user location from users</span>
users[<span class="hljs-string">&#39;Country&#39;</span>] = users.loc[:,<span class="hljs-string">&#39;Location&#39;</span>].<span class="hljs-built_in">map</span>(country_dictionary)
users.head()
</code></pre><pre class="hljs"><code>commenting_df[<span class="hljs-string">&#39;AuthorCountry&#39;</span>] = commenting_df.loc[:, <span class="hljs-string">&#39;AuthorLocation&#39;</span>].<span class="hljs-built_in">map</span>(country_dictionary)
commenting_df[<span class="hljs-string">&#39;CommenterCountry&#39;</span>] = commenting_df.loc[:, <span class="hljs-string">&#39;CommenterLocation&#39;</span>].<span class="hljs-built_in">map</span>(country_dictionary)
commenting_df.head()
</code></pre><pre class="hljs"><code>voting_df[<span class="hljs-string">&#39;AuthorCountry&#39;</span>] = voting_df.loc[:, <span class="hljs-string">&#39;AuthorLocation&#39;</span>].<span class="hljs-built_in">map</span>(country_dictionary)
voting_df[<span class="hljs-string">&#39;VoterCountry&#39;</span>] = voting_df.loc[:, <span class="hljs-string">&#39;VoterLocation&#39;</span>].<span class="hljs-built_in">map</span>(country_dictionary)
voting_df.head()
</code></pre><h2>Get relevant data to analyze tag occurance of each voter’s and commenter’s country respectively</h2><pre class="hljs"><code>post_tags_df = posts[[<span class="hljs-string">&#39;Id&#39;</span>,<span class="hljs-string">&#39;Tags&#39;</span>]]
post_tags_df.index = post_tags_df[<span class="hljs-string">&#39;Id&#39;</span>]
post_tags_df
</code></pre><pre class="hljs"><code>tags = pd.DataFrame(post_tags_df[post_tags_df[<span class="hljs-string">&#39;Tags&#39;</span>] != <span class="hljs-string">&#39;&#39;</span> ][<span class="hljs-string">&#39;Tags&#39;</span>].<span class="hljs-built_in">str</span>.extractall(<span class="hljs-string">&#39;\\&lt;(.*?)\\&gt;&#39;</span>) )
tags[<span class="hljs-string">&#39;PostId&#39;</span>] = tags.index
tags[<span class="hljs-string">&#39;PostId&#39;</span>] = np.select([<span class="hljs-literal">True</span>],[tags[<span class="hljs-string">&#39;PostId&#39;</span>].<span class="hljs-built_in">str</span>[<span class="hljs-number">0</span>]],default =tags[<span class="hljs-string">&#39;PostId&#39;</span>].<span class="hljs-built_in">str</span>[<span class="hljs-number">0</span>])
tags.rename(columns={<span class="hljs-number">0</span>:<span class="hljs-string">&#39;Tag&#39;</span>}, inplace=<span class="hljs-literal">True</span>)
tags.reset_index(drop=<span class="hljs-literal">True</span>, inplace=<span class="hljs-literal">True</span>)
</code></pre><p><em>Group the data by the location of the post’s tag and count number of of tag occurance per voter’s location.</em></p><pre class="hljs"><code>voting_tags = pd.merge(voting_df, tags,how=<span class="hljs-string">&#39;inner&#39;</span>, left_on=<span class="hljs-string">&#39;PostId&#39;</span>, right_on=<span class="hljs-string">&#39;PostId&#39;</span>)
voting_tags = voting_tags[[<span class="hljs-string">&#39;PostId&#39;</span>, <span class="hljs-string">&#39;AuthorCountry&#39;</span>, <span class="hljs-string">&#39;VoterCountry&#39;</span>, <span class="hljs-string">&#39;Tag&#39;</span>]]
voting_tags.head(<span class="hljs-number">10</span>)
</code></pre><p><em>Group the data by the location of the post’s tag and count number of of tag occurance per commenters’s location.</em></p><pre class="hljs"><code>commenting_tags = pd.merge(commenting_df, tags,how=<span class="hljs-string">&#39;inner&#39;</span>, left_on=<span class="hljs-string">&#39;PostId&#39;</span>, right_on=<span class="hljs-string">&#39;PostId&#39;</span>)
commenting_tags = commenting_tags[[<span class="hljs-string">&#39;PostId&#39;</span>, <span class="hljs-string">&#39;AuthorCountry&#39;</span>, <span class="hljs-string">&#39;CommenterCountry&#39;</span>, <span class="hljs-string">&#39;Tag&#39;</span>]]
commenting_tags.head(<span class="hljs-number">10</span>)
</code></pre><h1>Export DataFrame to a CSV File</h1><pre class="hljs"><code>

<span class="hljs-keyword">with</span> pd.ExcelWriter(<span class="hljs-string">&#39;dataframes.xlsx&#39;</span>) <span class="hljs-keyword">as</span> writer:
    <span class="hljs-comment"># Write each DataFrame to a separate sheet in the Excel file</span>
    posts.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Posts&#39;</span>, index=<span class="hljs-literal">False</span>)
    votes.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Votes&#39;</span>, index=<span class="hljs-literal">False</span>)
    users.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Users&#39;</span>, index=<span class="hljs-literal">False</span>)
    comments.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Comments&#39;</span>, index=<span class="hljs-literal">False</span>)
    voting_df.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Voting&#39;</span>, index=<span class="hljs-literal">False</span>)
    voting_tags.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Voting Tags&#39;</span>, index=<span class="hljs-literal">False</span>)
    commenting_df.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Commenting&#39;</span>, index=<span class="hljs-literal">False</span>)
    commenting_tags.to_excel(writer, sheet_name=<span class="hljs-string">&#39;Commenting Tags&#39;</span>, index=<span class="hljs-literal">False</span>)
</code></pre><pre class="hljs"><code>check_cleaned_df = pd.read_excel(<span class="hljs-string">&#39;/kaggle/working/dataframes.xlsx&#39;</span>)
check_cleaned_df.info()
</code></pre>`,43),p=[l],u=[],g={__name:"EDA",setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),n({meta:[]}),(d,h)=>(a(),t("div",o,p))}};export{g as default,u as meta};
