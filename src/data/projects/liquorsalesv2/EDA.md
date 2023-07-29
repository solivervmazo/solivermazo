```python
import pandas as pd
from ydata_profiling import ProfileReport

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))
```

# Data Exploration and Data Cleaning/Preprocessing


```python
sales = pd.read_csv('/kaggle/input/iowa-liquor-sales/Iowa_Liquor_Sales.csv')
sales.head(20)
```

### We need to profile our data sets to see the overview and initially analyse the data


```python
# This may take a while
#profile = ProfileReport(sales)
#profile
```

## Data type coversion

### Convert date columns to datetime data type


```python
sales['Date'] = pd.to_datetime(sales['Date'])
sales['Date'].astype
```

## Check for Na


```python
sales.columns.isna()
```

## Check for relevant data for inconsistency/anomally


```python
# We will convert the City to uppercase and strip white spaces so we can get better results
sales['City'] = sales['City'].str.upper()
sales['City'] = sales['City'].str.strip()
cities = pd.DataFrame(sales['City'].value_counts(ascending=True))
cities['Name'] = cities.index
cities
```


```python
# We noticed that there are significally low numbers of City count, 
# To make sure these are not mistake. We import nltk 
import nltk
for city in cities[cities['City'] < 1000]['Name']:
    for compare in cities['Name']:
        distance = nltk.edit_distance(compare, city)
        if  distance > 0 and distance < 3:
            print((compare, city))
```

### Based on the result we map 
```
{ 
    'CLEARLAKE': 'CLEAR LAKE',
    'GRAND MOUNDS', 'GRAND MOUND',
    'OTUMWA', 'OTTUMWA'
}
```


```python
sales['City'].map(
    { 
        'CLEARLAKE': 'CLEAR LAKE',
        'GRAND MOUNDS': 'GRAND MOUND',
        'OTUMWA': 'OTTUMWA'
    }
)
sales['City'].value_counts()
```


```python
# We will also implement the same logic to County
sales['County'] = sales['County'].str.upper()
sales['County'] = sales['County'].str.strip()
counties = pd.DataFrame(sales['County'].value_counts(ascending=True))
counties['Name'] = counties.index

for county in counties[counties['County'] < 1000]['Name']:
    for compare in counties['Name']:
        distance = nltk.edit_distance(compare, county)
        if  distance > 0 and distance < 3:
            print((compare, county))
```


```python
sales.head()
```


```python
# while trying to imort the output csv file, was having trouble with the Stroe Location
sales['City'].str.contains(',').sum()
```


```python
sales['Store Location'].str.contains(',').sum()
```


```python
sales['Item Description'].str.contains(',').sum()
```


```python
sales['Item Description'] = sales['Item Description'].str.replace(',', ' ')
sales['Item Description'].str.contains(',').sum()
```


```python
sales['Store Name'].str.contains(',').sum()
```


```python
sales['Store Name'] = sales['Store Name'].str.replace(',', ' ')
sales['Store Name'].str.contains(',').sum()
```


```python
sales['Store Lat'] = sales['Store Location'].str.extract(r'\(([^)]+)\,')
sales['Store Long'] = sales['Store Location'].str.extract(r'\d,(.*)\)')
sales['Address'] = sales['Address'].str.replace(',', ' ')
(
    sales['Store Lat'].str.contains(',').sum(), 
    sales['Store Long'].str.contains(',').sum(), 
    sales['Address'].str.contains(',').sum()
)
```


```python
# Notice that sales and bottle cost are in string type with actual $ in it
sales['State Bottle Cost'] = sales['State Bottle Cost'].str.replace('\$', '')
sales['State Bottle Retail'] = sales['State Bottle Retail'].str.replace('\$', '')
sales['Sale (Dollars)'] = sales['Sale (Dollars)'].str.replace('\$', '')
```

# Great! Now we will export our dataframe for Tableau


```python
sales.loc[:, sales.columns != 'Store Location'].to_csv('iowa_liquor_sales_2015.csv')
```


```python
sales_cleaned = pd.read_csv('/kaggle/working/iowa_liquor_sales_2015.csv')
sales_cleaned.head()
```
