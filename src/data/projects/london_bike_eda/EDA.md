
```python
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)

# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" 
# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session
```

## Exploring Data For Analysis
*Convert data set to dataframe using Pandas*


```python
bike_df_or = pd.read_csv('/kaggle/input/london-bike-sharing-dataset/london_merged.csv')
bike_df_or.info()
```


```python
bike_df_or.shape
```

*Change column names to more intuitive values*


```python
# Create copy before we make any changes, inplace=True
bike_df_or.to_csv('dataset_07192023.csv', index=False)
bike_df = pd.read_csv('/kaggle/working/dataset_07192023.csv')
bike_df.info()
```


```python
# map our columns to dictionary
columns = dict( zip( bike_df.columns, [
    'time', #timestamp
    'count', #cnt
    'temp_real_celd', #t1
    'temp_feel_celd', #t2
    'humidity_percent', #hum
    'wind_speed_kph', #wind_speed
    'weather', #weather_code
    'is_holiday', #is_holiday
    'is_weekend', #is_weekend
    'season' #season
] ))
columns
    
```


```python
# rename the columns of our dataframe to our mapped columns
bike_df.rename(columns, axis=1, inplace=True)
bike_df.info()
```


```python
# convert humidity to percentage
bike_df.humidity_percent = bike_df.humidity_percent / 100
bike_df.humidity_percent
```


```python
# we also need to map our season and weather to intuitive values 
# season: 0.0=spring, 1.0=summer, 2.0=autumn, 3.0=winter 
# weather: 1.0=Clear, 2.0=Scattered clouds, 3.0=Broken clouds, 4.0=Cloudy,
# 7.0=Rainy, 10.0=Rain with thunderstorm, 26.0=Snowfall

# Change the data type of season and weather before we map the values
bike_df.season = bike_df.season.astype('str')
bike_df.season = bike_df.season.map({
    '0.0':'spring', '1.0':'summer', '2.0':'autumn', '3.0':'winter'
})

bike_df.weather = bike_df.weather.astype('str')
bike_df.weather = bike_df.weather.map({
    '1.0':'Clear', '2.0':'Scattered clouds', '3.0':'Broken clouds', '4.0':'Cloudy',
     '7.0':'Rainy', '10.0':'Rain with thunderstorm', '26.0':'Snowfall'
})

bike_df.head()
```

## Final checking of our dataset


```python
# check for duplicate rows
bike_df.duplicated().sum()
## shows duplicated rows
# df[df.duplicated() == True] 
## removes duplicate rows if there is any
# df.drop_duplicates(inplace=True)
```


```python
# check for null values
bike_df.isna().sum()
## get ratio of empty cells by columns
# df.isna().sum()/len(df)
```

## Exporting dataframe to excel for data viz in Tableau


```python
bike_df.to_excel('london_bikes_cleaned.xlsx', sheet_name='data')
```


```python
bike_cleaned_df = pd.read_excel('/kaggle/working/london_bikes_cleaned.xlsx')
bike_cleaned_df.head()
```
