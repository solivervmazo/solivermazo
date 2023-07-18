### Window function refresher

```sql
SELECT 
	employee_id,
    first_name,
    department,
    hire_date,
    ROW_NUMBER() OVER(ORDER BY hire_date) As row_n
FROM
	employees
```

```sql
SELECT 
	employee_id,
    first_name,
    department,
    hire_date,
    ROW_NUMBER() OVER(PARTITION BY department ORDER BY hire_date) As row_n
FROM
	employees
```

### RANK() function

```sql
SELECT 
	employee_id,
    first_name,
    department,
    hire_date,
    RANK() OVER(
		PARTITION BY department ORDER BY salary DESC
	) As rank_n
FROM
	employees
```

- *Retrieve the hire_date. Return details of employees hired on or before Dec, 2005 and are in First Aid, Movies, and Computers departments*

```sql
SELECT 
    first_name,
    email,
    department,
    salary,
    hire_date,
    RANK() OVER(
		PARTITION BY department ORDER BY salary DESC
	) As rank_n
FROM
	employees
WHERE
    hire_date <= '2005-12-31' AND
    department IN ('First Aid', 'Movies', 'Computers')
```

- *Return the fifth ranked salary for each department*

```sql
SELECT 
	*
FROM (
	SELECT 
		first_name,
		email,
		department,
		salary,
		RANK() OVER(
			PARTITION BY department ORDER BY salary DESC
		) As rank_n
	FROM
		employees
) tbl
WHERE rank_n = 5
```

# Undertand the difference between ROW_NUMBER, RANK AND DENSE_RANK

- *Create a common table expression to retrieve the customer_id,and how many times the customer has purchased from the mall*

```sql
WITH purchase_count AS (
    SELECT 
        customer_id, 
        COUNT(sales) AS purchase
    FROM 
        sales
    GROUP BY customer_id
    ORDER BY purchase DESC
)

SELECT 
    customer_id,
    purchase,
    ROW_NUMBER() OVER (ORDER BY purchase DESC) AS row_n,
    RANK() OVER (ORDER BY purchase DESC) AS rank_n,
    DENSE_RANK() OVER (ORDER BY purchase DESC) AS dense_rank_n
FROM 
    purchase_count
ORDER BY purchase DESC;
```

# NTILE() 

-   *breaks/page the result set into groups*

```sql
SELECT 
    first_name, 
    email, 
    department, 
    salary,
    NTILE(5) OVER(PARTITION BY department ORDER BY salary DESC) ntile_5
FROM employees;

```

- *Create a CTE that returns details of an employee and group the employees into five groups based on the order of their salaries*
- *Find the average salary for each group of employees*

```sql
WITH salary_ranks AS (
    SELECT 
        first_name,
        email, 
        department, 
        salary,
        NTILE(5) OVER(ORDER BY salary DESC) AS rank_of_salary
    FROM employees
)

SELECT
    rank_of_salary,
    ROUND(AVG(salary), 2) AS avg_salary
FROM salary_ranks
GROUP BY rank_of_salary
ORDER BY rank_of_salary
```

# Aggregate Window Functions

- *Retrieve the first names, department and number of employees working in that department*

```sql
-- using subquery 
SELECT 
    first_name, 
    department, 
    ( SELECT COUNT(*) AS dept_count FROM employees e1 WHERE e1.department = e2.department)
FROM employees e2
GROUP BY 
    department, 
    first_name
ORDER BY department;

-- using window function
SELECT 
    first_name, 
    department,
    COUNT(*) OVER(
		PARTITION BY department
        ORDER BY department
    ) AS department_count
FROM employees 
```

- *Total Salary for all employees*

```sql
SELECT 
    first_name, 
    department,
    hire_date,
    SUM(salary) OVER( ORDER BY hire_date ) AS total_salary
FROM employees 
```

- *Total Salary for each department*

```sql
SELECT 
    first_name, 
    department,
    hire_date,
    SUM(salary) OVER( PARTITION BY department ) AS dept_total_salary
FROM employees 
```

- *Retrieve the first names, department and number of employees working in that department and in region*

```sql
SELECT 
    first_name,
    department,
    COUNT(*) OVER(PARTITION BY department) dept_count,
    region_id,
    COUNT(*) OVER(PARTITION BY region_id) region_count
FROM employees
```

- *Calculate the cumulative sum of customers purchase for the different ship mode*

```sql
-- Create a common table expression to retrieve the customer_id, 
-- ship_mode, and how many times the customer has purchased from the mall
WITH purchase_count AS (
    SELECT 
        customer_id, 
        ship_mode, 
        COUNT(sales) AS purchase
    FROM sales
    GROUP BY customer_id, ship_mode
    ORDER BY purchase DESC
)

SELECT 
    customer_id, 
    ship_mode, 
    purchase,
    SUM(purchase) OVER( 
        PARTITION BY ship_mode 
        ORDER BY customer_id ASC
    ) AS sum_of_sales
FROM purchase_count
```

# Window frames
