```python
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import sqlite3
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

# Data Exploration and Data Cleaning/Preprocessing


```python
database = '/kaggle/input/project-files/data.sqlite'
conn = sqlite3.connect(database)
tables = pd.read_sql("""SELECT *
                        FROM sqlite_master
                        WHERE type='table' 
                            AND tbl_name IN (
                                'posts',
                                'comments',
                                'users',
                                'votes'
                            );""", conn)
tables
```


```python
comments = pd.read_sql("""SELECT * FROM comments;""", conn)
comments.info()
```


```python
comments.isna().any().sum()
```


```python
# Convert date columns to datetime data type
comments['CreationDate'] = pd.to_datetime(comments['CreationDate'])

# Remove any leading or trailing white spaces from text columns
comments['Text'] = comments['Text'].str.strip()

comments.info()
```


```python
posts = pd.read_sql("""SELECT * FROM posts;""", conn)
posts.info()
```


```python
posts.isna().any().sum()
```


```python
# Convert date columns to datetime data type
posts['CreationDate'] = pd.to_datetime(posts['CreationDate'])
posts['LastEditDate'] = pd.to_datetime(posts['LastEditDate'])
posts['LastActivityDate'] = pd.to_datetime(posts['LastActivityDate'])
posts['ClosedDate'] = pd.to_datetime(posts['ClosedDate'])

posts.head()
```


```python
users = pd.read_sql("""SELECT 
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
FROM users;""", conn)
users.info()
```


```python
users.isna().any().sum()
```


```python
# Convert date columns to datetime data type
users['CreationDate'] = pd.to_datetime(users['CreationDate'])

# Remove any leading or trailing white spaces from text columns
users['WebsiteUrl'] = users['WebsiteUrl'].str.strip()
users['Location'] = users['Location'].str.strip()

users.info()
```


```python
votes = pd.read_sql("""SELECT * FROM votes;""", conn)
votes.info()
```


```python
votes.isna().any().sum()
```


```python
# Convert date columns to datetime data type
votes['CreationDate'] = pd.to_datetime(votes['CreationDate'])
votes.info()
```

# Basic Analysis

## How many posts were made each year?



```python
posts_by_year = pd.read_sql("""SELECT 
        COUNT(*) AS posts_count,
        STRFTIME('%Y', CreationDate) AS year 
    FROM posts
    GROUP BY STRFTIME('%Y', CreationDate);""", conn)

posts_by_year
```

## How many votes were made on each day of the week?


```python
votes_by_year = pd.read_sql("""SELECT 
        COUNT(*) AS votes_count,
        STRFTIME('%w', CreationDate) AS day 
    FROM votes
    GROUP BY STRFTIME('%w', CreationDate);""", conn)

votes_by_year
```

## How many comments were made on each day of the week?


```python
votes_by_year = pd.read_sql("""SELECT 
        COUNT(*) AS comments_count,
        STRFTIME('%w', CreationDate) AS day 
    FROM comments
    GROUP BY STRFTIME('%w', CreationDate);""", conn)

votes_by_year
```

# Advanced Analysis

## Get relevant data to analyze voting behavior by location

*Group the data  by the location of the post and count number of votes per post for each voter's location.*


```python
voting_df = pd.read_sql("""
    
    SELECT
        p.id AS PostId,
        p.AuthorID,
        p.AuthorLocation,
        v.id AS VoterId,
        NULLIF(v.location, '') VoterLocation,
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
""", conn)
voting_df
```

## Get relevant data to analyze commenting behavior by location

*Group the data  by the location of the post and count number of comments per post for each commenters's location.*


```python
commenting_df = pd.read_sql("""
    SELECT
        p.id AS PostId,
        p.AuthorID,
        p.AuthorLocation,
        c.id AS CommenterId,
        NULLIF(c.location, '') CommenterLocation,
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
""", conn)
commenting_df
```


```python
country_dictionary = pd.read_json('/kaggle/input/project-files/country_dictionary.json',  typ='series')
country_dictionary
```


```python
# We also map user location from users
users['Country'] = users.loc[:,'Location'].map(country_dictionary)
users.head()
```


```python
commenting_df['AuthorCountry'] = commenting_df.loc[:, 'AuthorLocation'].map(country_dictionary)
commenting_df['CommenterCountry'] = commenting_df.loc[:, 'CommenterLocation'].map(country_dictionary)
commenting_df.head()
```


```python
voting_df['AuthorCountry'] = voting_df.loc[:, 'AuthorLocation'].map(country_dictionary)
voting_df['VoterCountry'] = voting_df.loc[:, 'VoterLocation'].map(country_dictionary)
voting_df.head()
```

## Get relevant data to analyze tag occurance of each voter's and commenter's country respectively


```python
post_tags_df = posts[['Id','Tags']]
post_tags_df.index = post_tags_df['Id']
post_tags_df
```


```python
tags = pd.DataFrame(post_tags_df[post_tags_df['Tags'] != '' ]['Tags'].str.extractall('\<(.*?)\>') )
tags['PostId'] = tags.index
tags['PostId'] = np.select([True],[tags['PostId'].str[0]],default =tags['PostId'].str[0])
tags.rename(columns={0:'Tag'}, inplace=True)
tags.reset_index(drop=True, inplace=True)
```

*Group the data by the location of the post's tag and count number of of tag occurance per voter's location.*


```python
voting_tags = pd.merge(voting_df, tags,how='inner', left_on='PostId', right_on='PostId')
voting_tags = voting_tags[['PostId', 'AuthorCountry', 'VoterCountry', 'Tag']]
voting_tags.head(10)
```

*Group the data by the location of the post's tag and count number of of tag occurance per commenters's location.*


```python
commenting_tags = pd.merge(commenting_df, tags,how='inner', left_on='PostId', right_on='PostId')
commenting_tags = commenting_tags[['PostId', 'AuthorCountry', 'CommenterCountry', 'Tag']]
commenting_tags.head(10)
```

#  Export DataFrame to a CSV File


```python


with pd.ExcelWriter('dataframes.xlsx') as writer:
    # Write each DataFrame to a separate sheet in the Excel file
    posts.to_excel(writer, sheet_name='Posts', index=False)
    votes.to_excel(writer, sheet_name='Votes', index=False)
    users.to_excel(writer, sheet_name='Users', index=False)
    comments.to_excel(writer, sheet_name='Comments', index=False)
    voting_df.to_excel(writer, sheet_name='Voting', index=False)
    voting_tags.to_excel(writer, sheet_name='Voting Tags', index=False)
    commenting_df.to_excel(writer, sheet_name='Commenting', index=False)
    commenting_tags.to_excel(writer, sheet_name='Commenting Tags', index=False)
```


```python
check_cleaned_df = pd.read_excel('/kaggle/working/dataframes.xlsx')
check_cleaned_df.info()
```
