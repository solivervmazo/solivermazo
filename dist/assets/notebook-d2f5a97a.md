# Single and multi-dimensional numpy arrays


```python
import numpy as np
import pandas as pd
```


```python
# Define list
my_list = [50, 60, 80, 100 , 200, 300, 500, 600]
my_list
```




    [50, 60, 80, 100, 200, 300, 500, 600]




```python
# Create numpy array from list
my_numpy_array = np.array(my_list)
my_numpy_array
```




    array([ 50,  60,  80, 100, 200, 300, 500, 600])




```python
type(my_numpy_array)
```




    numpy.ndarray




```python
# Create multi-dimensional array
my_numpy_matrix = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
my_numpy_matrix
```




    array([[1, 2, 3, 4],
           [5, 6, 7, 8]])



### Task
- Write a code that creates the following 2x4 numpy array *x*
    
```
[[3, 7, 9, 3], [4, 3, 2, 2]]
```


```python
x = np.array([[3, 7, 9, 3], [4, 3, 2, 2]])
x
```




    array([[3, 7, 9, 3],
           [4, 3, 2, 2]])



# Leverage numpy built-in methods and functions


```python
# rand(x) is uniform distributon between 0 and 1 where x is the value count
x = np.random.rand(20)
x
```




    array([0.56989225, 0.84897158, 0.49345066, 0.48372597, 0.04575984,
           0.53697897, 0.68027699, 0.09583368, 0.81017863, 0.25660932,
           0.41920951, 0.77114146, 0.30747146, 0.03991625, 0.82013851,
           0.09653364, 0.26950892, 0.02569232, 0.16605444, 0.28843174])




```python
# multi-dimensional array using rand(x,y) where x = n of rows and y = n of items in rows
x = np.random.rand(3,4)
x
```




    array([[0.66650716, 0.6588394 , 0.22677262, 0.89042947],
           [0.18637376, 0.32680001, 0.46863233, 0.15041739],
           [0.66759319, 0.59698759, 0.55031133, 0.49437006]])




```python
# randint(l,u) generates random integer where l = lower bounds and u = upper bounds
x = np.random.randint(1,100)
x
```




    49




```python
# randint(l,y,t) generates random integer where l = lower bounds, u = upper bounds and t = n of items or dimension(x,y)
x = np.random.randint(1, 100, 4)
x
```




    array([32, 57, 34, 33])



### arange(lower, upper) generates evenly spaced values within a given range where upper is up to but not included
x = np.arange(1,20)
x


```python
# eye(n) generates a diagonal of ones and fill with zeros where n is ncount of ones
x = np.eye(3)
x
```




    array([[1., 0., 0.],
           [0., 1., 0.],
           [0., 0., 1.]])




```python
# ones(t) generates a multi-dimensional array of ones where t is = (x,y) x = rows and y = nitems in rows
x = np.ones((7,7))
x
```




    array([[1., 1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1., 1.]])



### Task
- Write a code that takes in a positive integer x from the user and creates a 5x5 array with random numbers ranging from 0 to x


```python
x = int(input('Enter a positive number:'))
m = np.random.randint(1, x, (5,5))
m
```

# Mathematical operations in numpy


```python
# Sums the values in two arrays based on index given that both array has the same count or dimension
a = np.random.randint(1, 50, 3)
a
```




    array([34, 47, 33])




```python
b = np.random.randint(1, 50, 3)
b
```




    array([11, 22, 17])




```python
c = a + b
c
```




    array([45, 69, 50])




```python
# using root operand in array
r = c ** 2
r
```




    array([2025, 4761, 2500])



### Task
- Given the x and y values below, obtain the distance between them
    
```
x = [5, 7, 20]
y = [9, 15, 4]
```


```python
x = np.array([5, 7, 20])
y = np.array([9, 15, 4])
z = np.sqrt((x ** 2) + (y ** 2))
z
```




    array([10.29563014, 16.55294536, 20.39607805])



# Arrays slicing and indexing


```python
my_array = np.array([1, 2, 3, 4, 5, 6])
my_array
```




    array([1, 2, 3, 4, 5, 6])




```python
# array[x:y] slice from firstindex x up until and not including
my_array[0:3]
```




    array([1, 2, 3])




```python
# Broadcasting, altering array
my_array[0:3] = 5
my_array
```




    array([5, 5, 5, 4, 5, 6])




```python
# Access element in multi-dimensional array
my_matrix = np.array([my_array, my_array])
my_matrix
```




    array([[5, 5, 5, 4, 5, 6],
           [5, 5, 5, 4, 5, 6]])




```python
my_matrix[1, 5]
```




    6



### Task
- Replace the last row with 0
    
```
[2, 30, 20, -2, -4]
[3, 4, 40, -3, -2]
[-3, 4, -6, 90, 10]
[25, 45, 34, 22, 12]
[13, 24, 22, 32, 37]
```


```python
my_matrix = np.array([
    [2, 30, 20, -2, -4],
    [3, 4, 40, -3, -2],
    [-3, 4, -6, 90, 10],
    [25, 45, 34, 22, 12],
    [13, 24, 22, 32, 37],
])
my_matrix[4] = 0
my_matrix
```




    array([[ 2, 30, 20, -2, -4],
           [ 3,  4, 40, -3, -2],
           [-3,  4, -6, 90, 10],
           [25, 45, 34, 22, 12],
           [ 0,  0,  0,  0,  0]])



# Elements selection


```python
# condionally indexing array
my_matrix = np.array([
    [2, 30, 20, -2, -4],
    [3, 4, 40, -3, -2],
    [-3, 4, -6, 90, 10],
    [25, 45, 34, 22, 12],
    [13, 24, 22, 32, 37],
])
my_matrix[my_matrix % 2 == 0]
```




    array([ 2, 30, 20, -2, -4,  4, 40, -2,  4, -6, 90, 10, 34, 22, 12, 24, 22,
           32])



### Task
- Replace negative elements by 0 and odd elements by -2
    
```
[2, 30, 20, -2, -4]
[3, 4, 40, -3, -2]
[-3, 4, -6, 90, 10]
[25, 45, 34, 22, 12]
[13, 24, 22, 32, 37]
```


```python
my_matrix[my_matrix < 0] = 0
my_matrix
```




    array([[ 2, 30, 20,  0,  0],
           [ 3,  4, 40,  0,  0],
           [ 0,  4,  0, 90, 10],
           [25, 45, 34, 22, 12],
           [13, 24, 22, 32, 37]])




```python
my_matrix[my_matrix % 2 != 0] = -2
my_matrix
```




    array([[ 2, 30, 20,  0,  0],
           [-2,  4, 40,  0,  0],
           [ 0,  4,  0, 90, 10],
           [-2, -2, 34, 22, 12],
           [-2, 24, 22, 32, -2]])



# Pandas fundamentals


```python
# two-dimensinal Pandas dataframe
client_df = pd.DataFrame({
    'id': [1, 2, 3],
    'name': ['John', 'Doe', 'Smith'],
    'net usd': [ 1000, 2000, 3000],
    'duration year': [3 , 4, 5]
})
client_df
```

# Pandas with CSV and HTML data

## Task
- Write a code to read tabular US retirement data. Data source: [https://www.ssa.gov/oact/progdata/nra.html](http://)


```python
retirement_age_df = pd.read_html('https://www.ssa.gov/oact/progdata/nra.html')
retirement_age_df[0]
```

## Pandas operations


```python
client_df = pd.DataFrame({
    'id': [1, 2, 3],
    'name': ['John', 'Doe', 'Smith'],
    'net usd': [ 1000, 2000, 3000],
    'duration year': [3 , 4, 5]
})
client_df
```


```python
# Get client/s where duration by year > 3
client_df[client_df['duration year'] > 3 ]
# del Deleteds a column from dataframe
# del client_df['duration year']
```

## Pandas with functions


```python
# Define a function that increases all clients netword by fix 10%
def networth_increase(bal, perc):
    return bal + ( bal * perc )
networth_icrease(10, 0.1)
```




    11.0




```python
client_df['net usd'].apply(networth_increase, args=([0.1]) )
```




    0    1100.0
    1    2200.0
    2    3300.0
    Name: net usd, dtype: float64



### Task
- Define a function thath triples the networth and adds $200
- Apply the function to the DataFrame
- Calculate the update total networth of all clients combined


```python
# Define a function thath triples the networth and adds $200
def triples(bal, incen):
    return bal + ( bal * incen )
```


```python
# Apply the function to the DataFrame
tripled = client_df['net usd'].apply(triples, args=([200]) )
tripled
```




    0    201000
    1    402000
    2    603000
    Name: net usd, dtype: int64




```python
# Calculate the update total networth of all clients combined
tripled.sum()
```




    1206000



# Sorting and ordering in Pandas


```python
# Sorting
client_df.sort_values(by = 'name')
```


```python
# Sorting by multiple columns
client_df.sort_values(by = ['net usd', 'duration year'])
```


```python
# Sorting by multiple columns and change the dataframe in the memory
client_df.sort_values(by = ['net usd', 'duration year'], inplace=True )
client_df
```

# Concatenating and merging in Pandas


```python
slug_df = pd.DataFrame({
    'id': [4, 5, 6],
    'name': ['Will', 'Yu', 'Mario'],
    'net usd': [ 1100, 2200, 3300],
    'duration year': [3 , 4, 5]
},index = [3, 4, 5])

pd.concat([client_df,slug_df])
```

# Project
- Define a dataframe *'bank_df_1'* that contains the first and last names for 5 bank clients with *id*s=1,2,3,4 and 5.
- Assume the bank got 5 new clients, define another dataframe *'bank_df_2'* that contains a new clients with *id*s=6,7,8,9 and 10.
- Let's assume we obtained additional information(Annual Salaray) about all our bank customers.
- Concatenate both *'bank_df_1'* and *'bank_df_2'* dataframes.
- Merge client names and their newly added salary information using *Bank Client ID*.
- Let's assume that you became a new client to the bank.
- Define a new dataframe that contains your information such as *cliend ID*=11, *first name*, *last name*, and *annual salary*.
- Add this new dataframe to the original dataframe *'bank_df_all'*


```python
# Define a dataframe 'bank_df_1' that contains the first and last names for 5 bank clients with ids=1,2,3,4 and 5.
bank_df_1 = pd.DataFrame({
    'id': [1, 2, 3, 4, 5],
    'first name': ['John', 'Mary', 'Yram', 'Nhoj', 'Isiaj'],
    'last name': ['Doe', 'Jane', 'Enaj', 'Eod', 'Smith'],
})
bank_df_1
```


```python
# Assume the bank got 5 new clients, define another dataframe 'bank_df_2' that contains a new clients with ids=6,7,8,9 and 10.
bank_df_2 = pd.DataFrame({
    'id': [6, 7, 8, 9, 10],
    'first name': ['John2', 'Mary2', 'Yram2', 'Nhoj2', 'Isiaj2'],
    'last name': ['Doe2', 'Jane2', 'Enaj2', 'Eod2', 'Smith2'],
})
bank_df_2
```


```python
# Let's assume we obtained additional information(Annual Salaray) about all our bank customers.
client_salary_df = pd.DataFrame({
    'id': np.arange(1,11),
    'annual salary usd': np.random.randint(40000,120000, 10),
})
client_salary_df
```


```python
# Concatenate both 'bank_df_1' and 'bank_df_2' dataframes.
bank_df_3 = pd.concat([bank_df_1, bank_df_2] , ignore_index=True)
bank_df_3
```


```python
# Merge client names and their newly added salary information using Bank Client ID.
bank_df_all = pd.merge(bank_df_3, client_salary_df, on = 'id')
bank_df_all
```


```python
# Let's assume that you became a new client to the bank.
# Define a new dataframe that contains your information such as cliend ID=11, first name, last name, and annual salary.
new_client_df = pd.DataFrame({
    'id': [11],
    'first name': ['Soliver'],
    'last name': ['Mazo'],
    'annual salary usd': np.random.randint(40000,120000, 1)
})
new_client_df
```


```python
# Add this new dataframe to the original dataframe 'bank_df_all'
bank_df_all = pd.concat([bank_df_all, new_client_df] , ignore_index=True)
bank_df_all
```
