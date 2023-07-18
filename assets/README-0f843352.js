import{u as a,o as n,c as e,a as l}from"./app-6609331d.js";const p={class:"markdown-body"},r=l(`<h3>Window function refresher</h3><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
	employee_id,
    first_name,
    department,
    hire_date,
    <span class="hljs-built_in">ROW_NUMBER</span>() <span class="hljs-keyword">OVER</span>(<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> hire_date) <span class="hljs-keyword">As</span> row_n
<span class="hljs-keyword">FROM</span>
	employees
</code></pre><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
	employee_id,
    first_name,
    department,
    hire_date,
    <span class="hljs-built_in">ROW_NUMBER</span>() <span class="hljs-keyword">OVER</span>(<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> hire_date) <span class="hljs-keyword">As</span> row_n
<span class="hljs-keyword">FROM</span>
	employees
</code></pre><h3>RANK() function</h3><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
	employee_id,
    first_name,
    department,
    hire_date,
    <span class="hljs-built_in">RANK</span>() <span class="hljs-keyword">OVER</span>(
		<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> salary <span class="hljs-keyword">DESC</span>
	) <span class="hljs-keyword">As</span> rank_n
<span class="hljs-keyword">FROM</span>
	employees
</code></pre><ul><li><em>Retrieve the hire_date. Return details of employees hired on or before Dec, 2005 and are in First Aid, Movies, and Computers departments</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
    first_name,
    email,
    department,
    salary,
    hire_date,
    <span class="hljs-built_in">RANK</span>() <span class="hljs-keyword">OVER</span>(
		<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> salary <span class="hljs-keyword">DESC</span>
	) <span class="hljs-keyword">As</span> rank_n
<span class="hljs-keyword">FROM</span>
	employees
<span class="hljs-keyword">WHERE</span>
    hire_date <span class="hljs-operator">&lt;=</span> <span class="hljs-string">&#39;2005-12-31&#39;</span> <span class="hljs-keyword">AND</span>
    department <span class="hljs-keyword">IN</span> (<span class="hljs-string">&#39;First Aid&#39;</span>, <span class="hljs-string">&#39;Movies&#39;</span>, <span class="hljs-string">&#39;Computers&#39;</span>)
</code></pre><ul><li><em>Return the fifth ranked salary for each department</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
	<span class="hljs-operator">*</span>
<span class="hljs-keyword">FROM</span> (
	<span class="hljs-keyword">SELECT</span> 
		first_name,
		email,
		department,
		salary,
		<span class="hljs-built_in">RANK</span>() <span class="hljs-keyword">OVER</span>(
			<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> salary <span class="hljs-keyword">DESC</span>
		) <span class="hljs-keyword">As</span> rank_n
	<span class="hljs-keyword">FROM</span>
		employees
) tbl
<span class="hljs-keyword">WHERE</span> rank_n <span class="hljs-operator">=</span> <span class="hljs-number">5</span>
</code></pre><h1>Undertand the difference between ROW_NUMBER, RANK AND DENSE_RANK</h1><ul><li><em>Create a common table expression to retrieve the customer_id,and how many times the customer has purchased from the mall</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">WITH</span> purchase_count <span class="hljs-keyword">AS</span> (
    <span class="hljs-keyword">SELECT</span> 
        customer_id, 
        <span class="hljs-built_in">COUNT</span>(sales) <span class="hljs-keyword">AS</span> purchase
    <span class="hljs-keyword">FROM</span> 
        sales
    <span class="hljs-keyword">GROUP</span> <span class="hljs-keyword">BY</span> customer_id
    <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> purchase <span class="hljs-keyword">DESC</span>
)

<span class="hljs-keyword">SELECT</span> 
    customer_id,
    purchase,
    <span class="hljs-built_in">ROW_NUMBER</span>() <span class="hljs-keyword">OVER</span> (<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> purchase <span class="hljs-keyword">DESC</span>) <span class="hljs-keyword">AS</span> row_n,
    <span class="hljs-built_in">RANK</span>() <span class="hljs-keyword">OVER</span> (<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> purchase <span class="hljs-keyword">DESC</span>) <span class="hljs-keyword">AS</span> rank_n,
    <span class="hljs-built_in">DENSE_RANK</span>() <span class="hljs-keyword">OVER</span> (<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> purchase <span class="hljs-keyword">DESC</span>) <span class="hljs-keyword">AS</span> dense_rank_n
<span class="hljs-keyword">FROM</span> 
    purchase_count
<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> purchase <span class="hljs-keyword">DESC</span>;
</code></pre><h1>NTILE()</h1><ul><li><em>breaks/page the result set into groups</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
    first_name, 
    email, 
    department, 
    salary,
    <span class="hljs-built_in">NTILE</span>(<span class="hljs-number">5</span>) <span class="hljs-keyword">OVER</span>(<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> salary <span class="hljs-keyword">DESC</span>) ntile_5
<span class="hljs-keyword">FROM</span> employees;

</code></pre><ul><li><em>Create a CTE that returns details of an employee and group the employees into five groups based on the order of their salaries</em></li><li><em>Find the average salary for each group of employees</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">WITH</span> salary_ranks <span class="hljs-keyword">AS</span> (
    <span class="hljs-keyword">SELECT</span> 
        first_name,
        email, 
        department, 
        salary,
        <span class="hljs-built_in">NTILE</span>(<span class="hljs-number">5</span>) <span class="hljs-keyword">OVER</span>(<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> salary <span class="hljs-keyword">DESC</span>) <span class="hljs-keyword">AS</span> rank_of_salary
    <span class="hljs-keyword">FROM</span> employees
)

<span class="hljs-keyword">SELECT</span>
    rank_of_salary,
    ROUND(<span class="hljs-built_in">AVG</span>(salary), <span class="hljs-number">2</span>) <span class="hljs-keyword">AS</span> avg_salary
<span class="hljs-keyword">FROM</span> salary_ranks
<span class="hljs-keyword">GROUP</span> <span class="hljs-keyword">BY</span> rank_of_salary
<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> rank_of_salary
</code></pre><h1>Aggregate Window Functions</h1><ul><li><em>Retrieve the first names, department and number of employees working in that department</em></li></ul><pre class="hljs"><code><span class="hljs-comment">-- using subquery </span>
<span class="hljs-keyword">SELECT</span> 
    first_name, 
    department, 
    ( <span class="hljs-keyword">SELECT</span> <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) <span class="hljs-keyword">AS</span> dept_count <span class="hljs-keyword">FROM</span> employees e1 <span class="hljs-keyword">WHERE</span> e1.department <span class="hljs-operator">=</span> e2.department)
<span class="hljs-keyword">FROM</span> employees e2
<span class="hljs-keyword">GROUP</span> <span class="hljs-keyword">BY</span> 
    department, 
    first_name
<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> department;

<span class="hljs-comment">-- using window function</span>
<span class="hljs-keyword">SELECT</span> 
    first_name, 
    department,
    <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) <span class="hljs-keyword">OVER</span>(
		<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department
        <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> department
    ) <span class="hljs-keyword">AS</span> department_count
<span class="hljs-keyword">FROM</span> employees 
</code></pre><ul><li><em>Total Salary for all employees</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
    first_name, 
    department,
    hire_date,
    <span class="hljs-built_in">SUM</span>(salary) <span class="hljs-keyword">OVER</span>( <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> hire_date ) <span class="hljs-keyword">AS</span> total_salary
<span class="hljs-keyword">FROM</span> employees 
</code></pre><ul><li><em>Total Salary for each department</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
    first_name, 
    department,
    hire_date,
    <span class="hljs-built_in">SUM</span>(salary) <span class="hljs-keyword">OVER</span>( <span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department ) <span class="hljs-keyword">AS</span> dept_total_salary
<span class="hljs-keyword">FROM</span> employees 
</code></pre><ul><li><em>Retrieve the first names, department and number of employees working in that department and in region</em></li></ul><pre class="hljs"><code><span class="hljs-keyword">SELECT</span> 
    first_name,
    department,
    <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) <span class="hljs-keyword">OVER</span>(<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> department) dept_count,
    region_id,
    <span class="hljs-built_in">COUNT</span>(<span class="hljs-operator">*</span>) <span class="hljs-keyword">OVER</span>(<span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> region_id) region_count
<span class="hljs-keyword">FROM</span> employees
</code></pre><ul><li><em>Calculate the cumulative sum of customers purchase for the different ship mode</em></li></ul><pre class="hljs"><code><span class="hljs-comment">-- Create a common table expression to retrieve the customer_id, </span>
<span class="hljs-comment">-- ship_mode, and how many times the customer has purchased from the mall</span>
<span class="hljs-keyword">WITH</span> purchase_count <span class="hljs-keyword">AS</span> (
    <span class="hljs-keyword">SELECT</span> 
        customer_id, 
        ship_mode, 
        <span class="hljs-built_in">COUNT</span>(sales) <span class="hljs-keyword">AS</span> purchase
    <span class="hljs-keyword">FROM</span> sales
    <span class="hljs-keyword">GROUP</span> <span class="hljs-keyword">BY</span> customer_id, ship_mode
    <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> purchase <span class="hljs-keyword">DESC</span>
)

<span class="hljs-keyword">SELECT</span> 
    customer_id, 
    ship_mode, 
    purchase,
    <span class="hljs-built_in">SUM</span>(purchase) <span class="hljs-keyword">OVER</span>( 
        <span class="hljs-keyword">PARTITION</span> <span class="hljs-keyword">BY</span> ship_mode 
        <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> customer_id <span class="hljs-keyword">ASC</span>
    ) <span class="hljs-keyword">AS</span> sum_of_sales
<span class="hljs-keyword">FROM</span> purchase_count
</code></pre><h1>Window frames</h1>`,29),o=[r],k=[],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(t,j)=>(n(),e("div",p,o))}};export{i as default,k as meta};
