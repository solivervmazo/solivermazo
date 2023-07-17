## SQL
Data source: [https://www.kaggle.com/datasets/minemartin/london-airbnb-listings-march-2023](http://)
```sql
/*
Cleaning Data in SQL Queries
Dataset:https://www.kaggle.com/datasets/minemartin/london-airbnb-listings-march-2023
*/

--SELECT * FROM `coursera-385403.london_airbnb_listings_march_2023.listings` LIMIT 1000;

--------------------------------------------------------------------------------------------------------------------------

-- Checking highly significant attributes for null values

WITH null_host_location AS
  (SELECT 
    COUNT(*) null_host_location_count
  FROM 
    `coursera-385403.london_airbnb_listings_march_2023.listings`
  WHERE 
    host_location IS NULL OR TRIM(host_location) = '' ) ,
  null_property_type AS
  (SELECT 
    COUNT(*) null_property_type_count
  FROM 
    `coursera-385403.london_airbnb_listings_march_2023.listings`
  WHERE 
    property_type IS NULL OR TRIM(property_type) = '' ),
  null_room_type AS
  (SELECT 
    COUNT(*) null_room_type_count
  FROM 
    `coursera-385403.london_airbnb_listings_march_2023.listings`
  WHERE 
    room_type IS NULL OR TRIM(room_type) = '' ),
  null_price_or_zero AS
  (SELECT 
    COUNT(*) null_price_or_zero_count
  FROM 
    `coursera-385403.london_airbnb_listings_march_2023.listings`
  WHERE 
    price IS NULL OR price = 0 )
SELECT 
  null_host_location_count, null_property_type_count, null_room_type_count,null_price_or_zero_count 
FROM null_host_location,null_property_type,null_room_type,null_price_or_zero;

-- Filtering null host_location and null or zero price
SELECT 
  *
FROM `coursera-385403.london_airbnb_listings_march_2023.listings`
WHERE host_location IS NOT NULL OR TRIM(host_location) != ''
  AND price > 0;


-- Classifying property_type to `entire_unit`, `private_room`, `others`
-- Classifying room_type_type to `entire_home_apt`, `private_room`, `others`
-- Classifying prices in to ranges 1-50 = `cheap` , 51-99 = `average` , 99+ = `expensive`
-- Filter out listing outside UK
SELECT 
  *,
  CASE
    WHEN LOWER(TRIM(property_type)) = 'entire rental unit' THEN 'entire_unit'
    WHEN LOWER(TRIM(property_type)) = 'private room in rental unit' THEN 'private_room'
    ELSE 'others'
  END AS property_type_classification,
  CASE
    WHEN LOWER(TRIM(room_type)) = 'entire home/apt' THEN 'entire_home_apt'
    WHEN LOWER(TRIM(room_type)) = 'private room' THEN 'private_room'
    ELSE 'others'
  END AS room_type_classification,
  CASE 
    WHEN price BETWEEN 1 AND 49 THEN 'cheap'
    WHEN price BETWEEN 50 AND 99 THEN 'average'
    ELSE 'expensive'
  END AS price_classification
FROM `coursera-385403.london_airbnb_listings_march_2023.listings`
WHERE 
  (host_location IS NOT NULL OR TRIM(host_location) != '')
  AND price > 0
  AND LOWER(TRIM(host_location)) LIKE '%united kingdom%';

--Calculate the sum Airbnb listings in each location

SELECT 
  host_location,
  COUNT(host_location) as listing_count
FROM `coursera-385403.london_airbnb_listings_march_2023.listings`
WHERE 
  (host_location IS NOT NULL OR TRIM(host_location) != '')
  AND price > 0
  AND LOWER(TRIM(host_location)) LIKE '%united kingdom%'
GROUP BY host_location;

```