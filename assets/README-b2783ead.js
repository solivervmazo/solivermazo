import{u as a,o as n,c as l,a as p}from"./app-fd13523a.js";const o={class:"markdown-body"},r=p(`<h2>SQL</h2><p>Data source: <a href="http://">https://www.kaggle.com/datasets/minemartin/london-airbnb-listings-march-2023</a></p><pre class="hljs"><code><span class="hljs-comment">/*
Cleaning Data in SQL Queries
Dataset:https://www.kaggle.com/datasets/minemartin/london-airbnb-listings-march-2023
*/</span>

<span class="hljs-comment">--SELECT * FROM \`coursera-385403.london_airbnb_listings_march_2023.listings\` LIMIT 1000;</span>

<span class="hljs-comment">--------------------------------------------------------------------------------------------------------------------------</span>

<span class="hljs-comment">-- Checking highly significant attributes for null values</span>

<span class="hljs-keyword">WITH</span> null_host_location <span class="hljs-keyword">AS</span>
  (<span class="hljs-keyword">SELECT</span> 
    <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) null_host_location_count
  <span class="hljs-keyword">FROM</span> 
    \`coursera<span class="hljs-number">-385403.</span>london_airbnb_listings_march_2023.listings\`
  <span class="hljs-keyword">WHERE</span> 
    host_location <span class="hljs-keyword">IS</span> <span class="hljs-keyword">NULL</span> <span class="hljs-keyword">OR</span> <span class="hljs-built_in">TRIM</span>(host_location) <span class="hljs-operator">=</span> <span class="hljs-string">&#39;&#39;</span> ) ,
  null_property_type <span class="hljs-keyword">AS</span>
  (<span class="hljs-keyword">SELECT</span> 
    <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) null_property_type_count
  <span class="hljs-keyword">FROM</span> 
    \`coursera<span class="hljs-number">-385403.</span>london_airbnb_listings_march_2023.listings\`
  <span class="hljs-keyword">WHERE</span> 
    property_type <span class="hljs-keyword">IS</span> <span class="hljs-keyword">NULL</span> <span class="hljs-keyword">OR</span> <span class="hljs-built_in">TRIM</span>(property_type) <span class="hljs-operator">=</span> <span class="hljs-string">&#39;&#39;</span> ),
  null_room_type <span class="hljs-keyword">AS</span>
  (<span class="hljs-keyword">SELECT</span> 
    <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) null_room_type_count
  <span class="hljs-keyword">FROM</span> 
    \`coursera<span class="hljs-number">-385403.</span>london_airbnb_listings_march_2023.listings\`
  <span class="hljs-keyword">WHERE</span> 
    room_type <span class="hljs-keyword">IS</span> <span class="hljs-keyword">NULL</span> <span class="hljs-keyword">OR</span> <span class="hljs-built_in">TRIM</span>(room_type) <span class="hljs-operator">=</span> <span class="hljs-string">&#39;&#39;</span> ),
  null_price_or_zero <span class="hljs-keyword">AS</span>
  (<span class="hljs-keyword">SELECT</span> 
    <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) null_price_or_zero_count
  <span class="hljs-keyword">FROM</span> 
    \`coursera<span class="hljs-number">-385403.</span>london_airbnb_listings_march_2023.listings\`
  <span class="hljs-keyword">WHERE</span> 
    price <span class="hljs-keyword">IS</span> <span class="hljs-keyword">NULL</span> <span class="hljs-keyword">OR</span> price <span class="hljs-operator">=</span> <span class="hljs-number">0</span> )
<span class="hljs-keyword">SELECT</span> 
  null_host_location_count, null_property_type_count, null_room_type_count,null_price_or_zero_count 
<span class="hljs-keyword">FROM</span> null_host_location,null_property_type,null_room_type,null_price_or_zero;

<span class="hljs-comment">-- Filtering null host_location and null or zero price</span>
<span class="hljs-keyword">SELECT</span> 
  <span class="hljs-operator">*</span>
<span class="hljs-keyword">FROM</span> \`coursera<span class="hljs-number">-385403.</span>london_airbnb_listings_march_2023.listings\`
<span class="hljs-keyword">WHERE</span> host_location <span class="hljs-keyword">IS</span> <span class="hljs-keyword">NOT</span> <span class="hljs-keyword">NULL</span> <span class="hljs-keyword">OR</span> <span class="hljs-built_in">TRIM</span>(host_location) <span class="hljs-operator">!=</span> <span class="hljs-string">&#39;&#39;</span>
  <span class="hljs-keyword">AND</span> price <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>;


<span class="hljs-comment">-- Classifying property_type to \`entire_unit\`, \`private_room\`, \`others\`</span>
<span class="hljs-comment">-- Classifying room_type_type to \`entire_home_apt\`, \`private_room\`, \`others\`</span>
<span class="hljs-comment">-- Classifying prices in to ranges 1-50 = \`cheap\` , 51-99 = \`average\` , 99+ = \`expensive\`</span>
<span class="hljs-comment">-- Filter out listing outside UK</span>
<span class="hljs-keyword">SELECT</span> 
  <span class="hljs-operator">*</span>,
  <span class="hljs-keyword">CASE</span>
    <span class="hljs-keyword">WHEN</span> <span class="hljs-built_in">LOWER</span>(<span class="hljs-built_in">TRIM</span>(property_type)) <span class="hljs-operator">=</span> <span class="hljs-string">&#39;entire rental unit&#39;</span> <span class="hljs-keyword">THEN</span> <span class="hljs-string">&#39;entire_unit&#39;</span>
    <span class="hljs-keyword">WHEN</span> <span class="hljs-built_in">LOWER</span>(<span class="hljs-built_in">TRIM</span>(property_type)) <span class="hljs-operator">=</span> <span class="hljs-string">&#39;private room in rental unit&#39;</span> <span class="hljs-keyword">THEN</span> <span class="hljs-string">&#39;private_room&#39;</span>
    <span class="hljs-keyword">ELSE</span> <span class="hljs-string">&#39;others&#39;</span>
  <span class="hljs-keyword">END</span> <span class="hljs-keyword">AS</span> property_type_classification,
  <span class="hljs-keyword">CASE</span>
    <span class="hljs-keyword">WHEN</span> <span class="hljs-built_in">LOWER</span>(<span class="hljs-built_in">TRIM</span>(room_type)) <span class="hljs-operator">=</span> <span class="hljs-string">&#39;entire home/apt&#39;</span> <span class="hljs-keyword">THEN</span> <span class="hljs-string">&#39;entire_home_apt&#39;</span>
    <span class="hljs-keyword">WHEN</span> <span class="hljs-built_in">LOWER</span>(<span class="hljs-built_in">TRIM</span>(room_type)) <span class="hljs-operator">=</span> <span class="hljs-string">&#39;private room&#39;</span> <span class="hljs-keyword">THEN</span> <span class="hljs-string">&#39;private_room&#39;</span>
    <span class="hljs-keyword">ELSE</span> <span class="hljs-string">&#39;others&#39;</span>
  <span class="hljs-keyword">END</span> <span class="hljs-keyword">AS</span> room_type_classification,
  <span class="hljs-keyword">CASE</span> 
    <span class="hljs-keyword">WHEN</span> price <span class="hljs-keyword">BETWEEN</span> <span class="hljs-number">1</span> <span class="hljs-keyword">AND</span> <span class="hljs-number">49</span> <span class="hljs-keyword">THEN</span> <span class="hljs-string">&#39;cheap&#39;</span>
    <span class="hljs-keyword">WHEN</span> price <span class="hljs-keyword">BETWEEN</span> <span class="hljs-number">50</span> <span class="hljs-keyword">AND</span> <span class="hljs-number">99</span> <span class="hljs-keyword">THEN</span> <span class="hljs-string">&#39;average&#39;</span>
    <span class="hljs-keyword">ELSE</span> <span class="hljs-string">&#39;expensive&#39;</span>
  <span class="hljs-keyword">END</span> <span class="hljs-keyword">AS</span> price_classification
<span class="hljs-keyword">FROM</span> \`coursera<span class="hljs-number">-385403.</span>london_airbnb_listings_march_2023.listings\`
<span class="hljs-keyword">WHERE</span> 
  (host_location <span class="hljs-keyword">IS</span> <span class="hljs-keyword">NOT</span> <span class="hljs-keyword">NULL</span> <span class="hljs-keyword">OR</span> <span class="hljs-built_in">TRIM</span>(host_location) <span class="hljs-operator">!=</span> <span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">AND</span> price <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>
  <span class="hljs-keyword">AND</span> <span class="hljs-built_in">LOWER</span>(<span class="hljs-built_in">TRIM</span>(host_location)) <span class="hljs-keyword">LIKE</span> <span class="hljs-string">&#39;%united kingdom%&#39;</span>;

<span class="hljs-comment">--Calculate the sum Airbnb listings in each location</span>

<span class="hljs-keyword">SELECT</span> 
  host_location,
  <span class="hljs-built_in">COUNT</span>(host_location) <span class="hljs-keyword">as</span> listing_count
<span class="hljs-keyword">FROM</span> \`coursera<span class="hljs-number">-385403.</span>london_airbnb_listings_march_2023.listings\`
<span class="hljs-keyword">WHERE</span> 
  (host_location <span class="hljs-keyword">IS</span> <span class="hljs-keyword">NOT</span> <span class="hljs-keyword">NULL</span> <span class="hljs-keyword">OR</span> <span class="hljs-built_in">TRIM</span>(host_location) <span class="hljs-operator">!=</span> <span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">AND</span> price <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>
  <span class="hljs-keyword">AND</span> <span class="hljs-built_in">LOWER</span>(<span class="hljs-built_in">TRIM</span>(host_location)) <span class="hljs-keyword">LIKE</span> <span class="hljs-string">&#39;%united kingdom%&#39;</span>
<span class="hljs-keyword">GROUP</span> <span class="hljs-keyword">BY</span> host_location;

</code></pre>`,3),e=[r],y=[],d={__name:"README",setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(i,j)=>(n(),l("div",o,e))}};export{d as default,y as meta};
