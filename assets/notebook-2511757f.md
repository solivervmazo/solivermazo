```python
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import matplotlib.pyplot as plt
import seaborn as sns

# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" 
# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session
```

Data source: [https://www.kaggle.com/datasets/aungpyaeap/supermarket-sales](http://)
# **Context**
The growth of supermarkets in most populated cities are increasing and market competitions are also high. The dataset is one of the historical sales of supermarket company which has recorded in 3 different brtanches for 3 months data.

# **Data Dictionary**

1. **Invoice id**: Computer generated sales slip invoice identification number
2. **Branch**: Branch of supercenter(3 branches available identified as A, B and C)
3. **City**: Location of supercenters
4. **Customer type**: Type of customers, recorded by Members for customers using member card and Normal for without member card
5. **Gender**: Gender of customer
6. **Product line**: General item categorization groups- Electronic accessories, Fashion accessories, Food and beverages, Health and beauty, Home and lifestyle, Sports and travel
7. **Unit price**: Price of each product in USD
8. **Quantity** Number of products purchased by customer
9. **Tax**: 5% tax fee for customer buying
10. **Total**: Total price including tax
11. **Date**: Date of purchase
12. **Time**: Time of Purchase(10am-9pm)
13. **Payment**: Payment used by customer for purchase(Cash, Credit card and EWallet)
14. **COGS**: Cost of goods sold
15. **Rating**: Customer stratification rating on their overall shopping experience( On a scale of 1 to 10)


## Initial Data Exploration


```python
## read our data set
df= pd.read_csv('/kaggle/input/supermarket-sales/supermarket_sales - Sheet1.csv')
```


```python
## shows top 10 of the row, use tail(x), x = rows to show the last rows
df.head(10)
```


```python
## shows columns
df.columns
```


```python
## shows column definition
df.dtypes
```


```python
## converts our date as string to datetime
df['Date'] = pd.to_datetime(df['Date'])
df['Date']
```


```python
## set the index of our dataset
df.set_index('Date', inplace=True)
```


```python
df.head(5)
```


```python
## computes a summary of statistics pertaining to the DataFrame columns
df.describe()
```

## Univariate Analysis

What does the distribution of customer ratings looks like? is it skewed?


```python
sns.displot(df['Rating'])
plt.axvline(x=np.mean(df['Rating']), c='red', ls='--', label='mean')
plt.axvline(x=np.percentile(df['Rating'], 25), c='green', ls='--', label='25th-75th percentile')
plt.axvline(x=np.percentile(df['Rating'], 75), c='green', ls='--')
```

Do aggregate sales numbers differ by much between branches?


```python
df.hist(figsize=(10,10))
```


```python
sns.countplot(data=df, x='Branch')
```


```python
sns.countplot(data=df, x='Payment')
```

## Bivariate Analysis
Is ther a relationship between gross income and customer ratings?


```python
sns.regplot(data=df, x='Rating', y='gross income')
```


```python
sns.boxplot(x=df['Branch'],y=df['gross income'])
```


```python
sns.boxplot(x=df['Gender'],y=df['gross income'])
```

Is there a noticeabke time trend in gross income?


```python
df.head()
```


```python
sns.lineplot(x=df.groupby(df.index).mean().index, y=df.groupby(df.index).mean()['gross income'])

```

## Dealing With Duplicate Rows and Missing Values


```python
df.duplicated().sum()
## shows duplicated rows
# df[df.duplicated() == True] 
## removes duplicate rows if there is any
# df.drop_duplicates(inplace=True)
```


```python
df.isna().sum()
## get ratio of empty cells by columns
# df.isna().sum()/len(df)
```


```python
sns.heatmap(df.isnull(), cbar=False)
## fill missing data for numerical values
#df.fillna(df.mean(), inplace=True)
## fill missing data for non-numerical values
#df.fillna(df.mode().iloc[0],inplace=True)
```


```python
dataset = pd.read_csv('/kaggle/input/supermarket-sales/supermarket_sales - Sheet1.csv')
profile = ProfileReport(dataset)
profile
```

## Correlation Analysis


```python
round(np.corrcoef(df['gross income'], df['Rating'])[1][0],2)
```


```python
np.round(df.corr(),2)
```


```python
sns.heatmap(np.round(df.corr(),2), annot=True)
```


```python
> soliver mazo
```
