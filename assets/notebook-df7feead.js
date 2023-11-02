import{u as n,o as a,c as e,a as l}from"./app-d176f5ae.js";const p={class:"markdown-body"},r=l(`<h1>Single and multi-dimensional numpy arrays</h1><pre class="hljs"><code><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Define list</span>
my_list = [<span class="hljs-number">50</span>, <span class="hljs-number">60</span>, <span class="hljs-number">80</span>, <span class="hljs-number">100</span> , <span class="hljs-number">200</span>, <span class="hljs-number">300</span>, <span class="hljs-number">500</span>, <span class="hljs-number">600</span>]
my_list
</code></pre><pre><code>[50, 60, 80, 100, 200, 300, 500, 600]
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Create numpy array from list</span>
my_numpy_array = np.array(my_list)
my_numpy_array
</code></pre><pre><code>array([ 50,  60,  80, 100, 200, 300, 500, 600])
</code></pre><pre class="hljs"><code><span class="hljs-built_in">type</span>(my_numpy_array)
</code></pre><pre><code>numpy.ndarray
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Create multi-dimensional array</span>
my_numpy_matrix = np.array([[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]])
my_numpy_matrix
</code></pre><pre><code>array([[1, 2, 3, 4],
       [5, 6, 7, 8]])
</code></pre><h3>Task</h3><ul><li>Write a code that creates the following 2x4 numpy array <em>x</em></li></ul><pre><code>[[3, 7, 9, 3], [4, 3, 2, 2]]
</code></pre><pre class="hljs"><code>x = np.array([[<span class="hljs-number">3</span>, <span class="hljs-number">7</span>, <span class="hljs-number">9</span>, <span class="hljs-number">3</span>], [<span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>]])
x
</code></pre><pre><code>array([[3, 7, 9, 3],
       [4, 3, 2, 2]])
</code></pre><h1>Leverage numpy built-in methods and functions</h1><pre class="hljs"><code><span class="hljs-comment"># rand(x) is uniform distributon between 0 and 1 where x is the value count</span>
x = np.random.rand(<span class="hljs-number">20</span>)
x
</code></pre><pre><code>array([0.56989225, 0.84897158, 0.49345066, 0.48372597, 0.04575984,
       0.53697897, 0.68027699, 0.09583368, 0.81017863, 0.25660932,
       0.41920951, 0.77114146, 0.30747146, 0.03991625, 0.82013851,
       0.09653364, 0.26950892, 0.02569232, 0.16605444, 0.28843174])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># multi-dimensional array using rand(x,y) where x = n of rows and y = n of items in rows</span>
x = np.random.rand(<span class="hljs-number">3</span>,<span class="hljs-number">4</span>)
x
</code></pre><pre><code>array([[0.66650716, 0.6588394 , 0.22677262, 0.89042947],
       [0.18637376, 0.32680001, 0.46863233, 0.15041739],
       [0.66759319, 0.59698759, 0.55031133, 0.49437006]])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># randint(l,u) generates random integer where l = lower bounds and u = upper bounds</span>
x = np.random.randint(<span class="hljs-number">1</span>,<span class="hljs-number">100</span>)
x
</code></pre><pre><code>49
</code></pre><pre class="hljs"><code><span class="hljs-comment"># randint(l,y,t) generates random integer where l = lower bounds, u = upper bounds and t = n of items or dimension(x,y)</span>
x = np.random.randint(<span class="hljs-number">1</span>, <span class="hljs-number">100</span>, <span class="hljs-number">4</span>)
x
</code></pre><pre><code>array([32, 57, 34, 33])
</code></pre><h3>arange(lower, upper) generates evenly spaced values within a given range where upper is up to but not included</h3><p>x = np.arange(1,20)<br> x</p><pre class="hljs"><code><span class="hljs-comment"># eye(n) generates a diagonal of ones and fill with zeros where n is ncount of ones</span>
x = np.eye(<span class="hljs-number">3</span>)
x
</code></pre><pre><code>array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># ones(t) generates a multi-dimensional array of ones where t is = (x,y) x = rows and y = nitems in rows</span>
x = np.ones((<span class="hljs-number">7</span>,<span class="hljs-number">7</span>))
x
</code></pre><pre><code>array([[1., 1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1., 1.]])
</code></pre><h3>Task</h3><ul><li>Write a code that takes in a positive integer x from the user and creates a 5x5 array with random numbers ranging from 0 to x</li></ul><pre class="hljs"><code>x = <span class="hljs-built_in">int</span>(<span class="hljs-built_in">input</span>(<span class="hljs-string">&#39;Enter a positive number:&#39;</span>))
m = np.random.randint(<span class="hljs-number">1</span>, x, (<span class="hljs-number">5</span>,<span class="hljs-number">5</span>))
m
</code></pre><h1>Mathematical operations in numpy</h1><pre class="hljs"><code><span class="hljs-comment"># Sums the values in two arrays based on index given that both array has the same count or dimension</span>
a = np.random.randint(<span class="hljs-number">1</span>, <span class="hljs-number">50</span>, <span class="hljs-number">3</span>)
a
</code></pre><pre><code>array([34, 47, 33])
</code></pre><pre class="hljs"><code>b = np.random.randint(<span class="hljs-number">1</span>, <span class="hljs-number">50</span>, <span class="hljs-number">3</span>)
b
</code></pre><pre><code>array([11, 22, 17])
</code></pre><pre class="hljs"><code>c = a + b
c
</code></pre><pre><code>array([45, 69, 50])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># using root operand in array</span>
r = c ** <span class="hljs-number">2</span>
r
</code></pre><pre><code>array([2025, 4761, 2500])
</code></pre><h3>Task</h3><ul><li>Given the x and y values below, obtain the distance between them</li></ul><pre><code>x = [5, 7, 20]
y = [9, 15, 4]
</code></pre><pre class="hljs"><code>x = np.array([<span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">20</span>])
y = np.array([<span class="hljs-number">9</span>, <span class="hljs-number">15</span>, <span class="hljs-number">4</span>])
z = np.sqrt((x ** <span class="hljs-number">2</span>) + (y ** <span class="hljs-number">2</span>))
z
</code></pre><pre><code>array([10.29563014, 16.55294536, 20.39607805])
</code></pre><h1>Arrays slicing and indexing</h1><pre class="hljs"><code>my_array = np.array([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>])
my_array
</code></pre><pre><code>array([1, 2, 3, 4, 5, 6])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># array[x:y] slice from firstindex x up until and not including</span>
my_array[<span class="hljs-number">0</span>:<span class="hljs-number">3</span>]
</code></pre><pre><code>array([1, 2, 3])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Broadcasting, altering array</span>
my_array[<span class="hljs-number">0</span>:<span class="hljs-number">3</span>] = <span class="hljs-number">5</span>
my_array
</code></pre><pre><code>array([5, 5, 5, 4, 5, 6])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Access element in multi-dimensional array</span>
my_matrix = np.array([my_array, my_array])
my_matrix
</code></pre><pre><code>array([[5, 5, 5, 4, 5, 6],
       [5, 5, 5, 4, 5, 6]])
</code></pre><pre class="hljs"><code>my_matrix[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>]
</code></pre><pre><code>6
</code></pre><h3>Task</h3><ul><li>Replace the last row with 0</li></ul><pre><code>[2, 30, 20, -2, -4]
[3, 4, 40, -3, -2]
[-3, 4, -6, 90, 10]
[25, 45, 34, 22, 12]
[13, 24, 22, 32, 37]
</code></pre><pre class="hljs"><code>my_matrix = np.array([
    [<span class="hljs-number">2</span>, <span class="hljs-number">30</span>, <span class="hljs-number">20</span>, -<span class="hljs-number">2</span>, -<span class="hljs-number">4</span>],
    [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">40</span>, -<span class="hljs-number">3</span>, -<span class="hljs-number">2</span>],
    [-<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, -<span class="hljs-number">6</span>, <span class="hljs-number">90</span>, <span class="hljs-number">10</span>],
    [<span class="hljs-number">25</span>, <span class="hljs-number">45</span>, <span class="hljs-number">34</span>, <span class="hljs-number">22</span>, <span class="hljs-number">12</span>],
    [<span class="hljs-number">13</span>, <span class="hljs-number">24</span>, <span class="hljs-number">22</span>, <span class="hljs-number">32</span>, <span class="hljs-number">37</span>],
])
my_matrix[<span class="hljs-number">4</span>] = <span class="hljs-number">0</span>
my_matrix
</code></pre><pre><code>array([[ 2, 30, 20, -2, -4],
       [ 3,  4, 40, -3, -2],
       [-3,  4, -6, 90, 10],
       [25, 45, 34, 22, 12],
       [ 0,  0,  0,  0,  0]])
</code></pre><h1>Elements selection</h1><pre class="hljs"><code><span class="hljs-comment"># condionally indexing array</span>
my_matrix = np.array([
    [<span class="hljs-number">2</span>, <span class="hljs-number">30</span>, <span class="hljs-number">20</span>, -<span class="hljs-number">2</span>, -<span class="hljs-number">4</span>],
    [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">40</span>, -<span class="hljs-number">3</span>, -<span class="hljs-number">2</span>],
    [-<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, -<span class="hljs-number">6</span>, <span class="hljs-number">90</span>, <span class="hljs-number">10</span>],
    [<span class="hljs-number">25</span>, <span class="hljs-number">45</span>, <span class="hljs-number">34</span>, <span class="hljs-number">22</span>, <span class="hljs-number">12</span>],
    [<span class="hljs-number">13</span>, <span class="hljs-number">24</span>, <span class="hljs-number">22</span>, <span class="hljs-number">32</span>, <span class="hljs-number">37</span>],
])
my_matrix[my_matrix % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>]
</code></pre><pre><code>array([ 2, 30, 20, -2, -4,  4, 40, -2,  4, -6, 90, 10, 34, 22, 12, 24, 22,
       32])
</code></pre><h3>Task</h3><ul><li>Replace negative elements by 0 and odd elements by -2</li></ul><pre><code>[2, 30, 20, -2, -4]
[3, 4, 40, -3, -2]
[-3, 4, -6, 90, 10]
[25, 45, 34, 22, 12]
[13, 24, 22, 32, 37]
</code></pre><pre class="hljs"><code>my_matrix[my_matrix &lt; <span class="hljs-number">0</span>] = <span class="hljs-number">0</span>
my_matrix
</code></pre><pre><code>array([[ 2, 30, 20,  0,  0],
       [ 3,  4, 40,  0,  0],
       [ 0,  4,  0, 90, 10],
       [25, 45, 34, 22, 12],
       [13, 24, 22, 32, 37]])
</code></pre><pre class="hljs"><code>my_matrix[my_matrix % <span class="hljs-number">2</span> != <span class="hljs-number">0</span>] = -<span class="hljs-number">2</span>
my_matrix
</code></pre><pre><code>array([[ 2, 30, 20,  0,  0],
       [-2,  4, 40,  0,  0],
       [ 0,  4,  0, 90, 10],
       [-2, -2, 34, 22, 12],
       [-2, 24, 22, 32, -2]])
</code></pre><h1>Pandas fundamentals</h1><pre class="hljs"><code><span class="hljs-comment"># two-dimensinal Pandas dataframe</span>
client_df = pd.DataFrame({
    <span class="hljs-string">&#39;id&#39;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
    <span class="hljs-string">&#39;name&#39;</span>: [<span class="hljs-string">&#39;John&#39;</span>, <span class="hljs-string">&#39;Doe&#39;</span>, <span class="hljs-string">&#39;Smith&#39;</span>],
    <span class="hljs-string">&#39;net usd&#39;</span>: [ <span class="hljs-number">1000</span>, <span class="hljs-number">2000</span>, <span class="hljs-number">3000</span>],
    <span class="hljs-string">&#39;duration year&#39;</span>: [<span class="hljs-number">3</span> , <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
})
client_df
</code></pre><h1>Pandas with CSV and HTML data</h1><h2>Task</h2><ul><li>Write a code to read tabular US retirement data. Data source: <a href="http://">https://www.ssa.gov/oact/progdata/nra.html</a></li></ul><pre class="hljs"><code>retirement_age_df = pd.read_html(<span class="hljs-string">&#39;https://www.ssa.gov/oact/progdata/nra.html&#39;</span>)
retirement_age_df[<span class="hljs-number">0</span>]
</code></pre><h2>Pandas operations</h2><pre class="hljs"><code>client_df = pd.DataFrame({
    <span class="hljs-string">&#39;id&#39;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
    <span class="hljs-string">&#39;name&#39;</span>: [<span class="hljs-string">&#39;John&#39;</span>, <span class="hljs-string">&#39;Doe&#39;</span>, <span class="hljs-string">&#39;Smith&#39;</span>],
    <span class="hljs-string">&#39;net usd&#39;</span>: [ <span class="hljs-number">1000</span>, <span class="hljs-number">2000</span>, <span class="hljs-number">3000</span>],
    <span class="hljs-string">&#39;duration year&#39;</span>: [<span class="hljs-number">3</span> , <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
})
client_df
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Get client/s where duration by year &gt; 3</span>
client_df[client_df[<span class="hljs-string">&#39;duration year&#39;</span>] &gt; <span class="hljs-number">3</span> ]
<span class="hljs-comment"># del Deleteds a column from dataframe</span>
<span class="hljs-comment"># del client_df[&#39;duration year&#39;]</span>
</code></pre><h2>Pandas with functions</h2><pre class="hljs"><code><span class="hljs-comment"># Define a function that increases all clients netword by fix 10%</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">networth_increase</span>(<span class="hljs-params">bal, perc</span>):
    <span class="hljs-keyword">return</span> bal + ( bal * perc )
networth_icrease(<span class="hljs-number">10</span>, <span class="hljs-number">0.1</span>)
</code></pre><pre><code>11.0
</code></pre><pre class="hljs"><code>client_df[<span class="hljs-string">&#39;net usd&#39;</span>].apply(networth_increase, args=([<span class="hljs-number">0.1</span>]) )
</code></pre><pre><code>0    1100.0
1    2200.0
2    3300.0
Name: net usd, dtype: float64
</code></pre><h3>Task</h3><ul><li>Define a function thath triples the networth and adds $200</li><li>Apply the function to the DataFrame</li><li>Calculate the update total networth of all clients combined</li></ul><pre class="hljs"><code><span class="hljs-comment"># Define a function thath triples the networth and adds $200</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">triples</span>(<span class="hljs-params">bal, incen</span>):
    <span class="hljs-keyword">return</span> bal + ( bal * incen )
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Apply the function to the DataFrame</span>
tripled = client_df[<span class="hljs-string">&#39;net usd&#39;</span>].apply(triples, args=([<span class="hljs-number">200</span>]) )
tripled
</code></pre><pre><code>0    201000
1    402000
2    603000
Name: net usd, dtype: int64
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Calculate the update total networth of all clients combined</span>
tripled.<span class="hljs-built_in">sum</span>()
</code></pre><pre><code>1206000
</code></pre><h1>Sorting and ordering in Pandas</h1><pre class="hljs"><code><span class="hljs-comment"># Sorting</span>
client_df.sort_values(by = <span class="hljs-string">&#39;name&#39;</span>)
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Sorting by multiple columns</span>
client_df.sort_values(by = [<span class="hljs-string">&#39;net usd&#39;</span>, <span class="hljs-string">&#39;duration year&#39;</span>])
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Sorting by multiple columns and change the dataframe in the memory</span>
client_df.sort_values(by = [<span class="hljs-string">&#39;net usd&#39;</span>, <span class="hljs-string">&#39;duration year&#39;</span>], inplace=<span class="hljs-literal">True</span> )
client_df
</code></pre><h1>Concatenating and merging in Pandas</h1><pre class="hljs"><code>slug_df = pd.DataFrame({
    <span class="hljs-string">&#39;id&#39;</span>: [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>],
    <span class="hljs-string">&#39;name&#39;</span>: [<span class="hljs-string">&#39;Will&#39;</span>, <span class="hljs-string">&#39;Yu&#39;</span>, <span class="hljs-string">&#39;Mario&#39;</span>],
    <span class="hljs-string">&#39;net usd&#39;</span>: [ <span class="hljs-number">1100</span>, <span class="hljs-number">2200</span>, <span class="hljs-number">3300</span>],
    <span class="hljs-string">&#39;duration year&#39;</span>: [<span class="hljs-number">3</span> , <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
},index = [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>])

pd.concat([client_df,slug_df])
</code></pre><h1>Project</h1><ul><li>Define a dataframe <em>‘bank_df_1’</em> that contains the first and last names for 5 bank clients with <em>id</em>s=1,2,3,4 and 5.</li><li>Assume the bank got 5 new clients, define another dataframe <em>‘bank_df_2’</em> that contains a new clients with <em>id</em>s=6,7,8,9 and 10.</li><li>Let’s assume we obtained additional information(Annual Salaray) about all our bank customers.</li><li>Concatenate both <em>‘bank_df_1’</em> and <em>‘bank_df_2’</em> dataframes.</li><li>Merge client names and their newly added salary information using <em>Bank Client ID</em>.</li><li>Let’s assume that you became a new client to the bank.</li><li>Define a new dataframe that contains your information such as <em>cliend ID</em>=11, <em>first name</em>, <em>last name</em>, and <em>annual salary</em>.</li><li>Add this new dataframe to the original dataframe <em>‘bank_df_all’</em></li></ul><pre class="hljs"><code><span class="hljs-comment"># Define a dataframe &#39;bank_df_1&#39; that contains the first and last names for 5 bank clients with ids=1,2,3,4 and 5.</span>
bank_df_1 = pd.DataFrame({
    <span class="hljs-string">&#39;id&#39;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>],
    <span class="hljs-string">&#39;first name&#39;</span>: [<span class="hljs-string">&#39;John&#39;</span>, <span class="hljs-string">&#39;Mary&#39;</span>, <span class="hljs-string">&#39;Yram&#39;</span>, <span class="hljs-string">&#39;Nhoj&#39;</span>, <span class="hljs-string">&#39;Isiaj&#39;</span>],
    <span class="hljs-string">&#39;last name&#39;</span>: [<span class="hljs-string">&#39;Doe&#39;</span>, <span class="hljs-string">&#39;Jane&#39;</span>, <span class="hljs-string">&#39;Enaj&#39;</span>, <span class="hljs-string">&#39;Eod&#39;</span>, <span class="hljs-string">&#39;Smith&#39;</span>],
})
bank_df_1
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Assume the bank got 5 new clients, define another dataframe &#39;bank_df_2&#39; that contains a new clients with ids=6,7,8,9 and 10.</span>
bank_df_2 = pd.DataFrame({
    <span class="hljs-string">&#39;id&#39;</span>: [<span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>],
    <span class="hljs-string">&#39;first name&#39;</span>: [<span class="hljs-string">&#39;John2&#39;</span>, <span class="hljs-string">&#39;Mary2&#39;</span>, <span class="hljs-string">&#39;Yram2&#39;</span>, <span class="hljs-string">&#39;Nhoj2&#39;</span>, <span class="hljs-string">&#39;Isiaj2&#39;</span>],
    <span class="hljs-string">&#39;last name&#39;</span>: [<span class="hljs-string">&#39;Doe2&#39;</span>, <span class="hljs-string">&#39;Jane2&#39;</span>, <span class="hljs-string">&#39;Enaj2&#39;</span>, <span class="hljs-string">&#39;Eod2&#39;</span>, <span class="hljs-string">&#39;Smith2&#39;</span>],
})
bank_df_2
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Let&#39;s assume we obtained additional information(Annual Salaray) about all our bank customers.</span>
client_salary_df = pd.DataFrame({
    <span class="hljs-string">&#39;id&#39;</span>: np.arange(<span class="hljs-number">1</span>,<span class="hljs-number">11</span>),
    <span class="hljs-string">&#39;annual salary usd&#39;</span>: np.random.randint(<span class="hljs-number">40000</span>,<span class="hljs-number">120000</span>, <span class="hljs-number">10</span>),
})
client_salary_df
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Concatenate both &#39;bank_df_1&#39; and &#39;bank_df_2&#39; dataframes.</span>
bank_df_3 = pd.concat([bank_df_1, bank_df_2] , ignore_index=<span class="hljs-literal">True</span>)
bank_df_3
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Merge client names and their newly added salary information using Bank Client ID.</span>
bank_df_all = pd.merge(bank_df_3, client_salary_df, on = <span class="hljs-string">&#39;id&#39;</span>)
bank_df_all
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Let&#39;s assume that you became a new client to the bank.</span>
<span class="hljs-comment"># Define a new dataframe that contains your information such as cliend ID=11, first name, last name, and annual salary.</span>
new_client_df = pd.DataFrame({
    <span class="hljs-string">&#39;id&#39;</span>: [<span class="hljs-number">11</span>],
    <span class="hljs-string">&#39;first name&#39;</span>: [<span class="hljs-string">&#39;Soliver&#39;</span>],
    <span class="hljs-string">&#39;last name&#39;</span>: [<span class="hljs-string">&#39;Mazo&#39;</span>],
    <span class="hljs-string">&#39;annual salary usd&#39;</span>: np.random.randint(<span class="hljs-number">40000</span>,<span class="hljs-number">120000</span>, <span class="hljs-number">1</span>)
})
new_client_df
</code></pre><pre class="hljs"><code><span class="hljs-comment"># Add this new dataframe to the original dataframe &#39;bank_df_all&#39;</span>
bank_df_all = pd.concat([bank_df_all, new_client_df] , ignore_index=<span class="hljs-literal">True</span>)
bank_df_all
</code></pre>`,109),c=[r],j=[],u={__name:"notebook",setup(t,{expose:s}){return s({frontmatter:{meta:[]}}),n({meta:[]}),(o,d)=>(a(),e("div",p,c))}};export{u as default,j as meta};
