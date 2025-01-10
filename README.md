# **Weather Somewhere**
## This displays weather from a random location (from a list of 139) with data from the [Open-Meteo API](https://open-meteo.com/).

## Files
 - index.html: Web page
 - styles.css: CSS
 - weather.js: JavaScript, gets and displays data

## How it works:
- Selects a random location ID from the list
- Sends a request to the Open-Meteo API
- Gets the name, coordinates, population and image credit associated with the location ID
- Changes weather from major [WMO codes](https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM)
- Temperatures are converted to Fahrenheit, rounded and stored in variables
- The JavaScript adds HTML with the weather, current, high, low data, Fahrenheit temperatures, population and image credit
- The coordinates are stored in variables, and the location name (below Weather in) is a link to the OpenStreetMap coordinates

## Screenshots
![image](https://github.com/user-attachments/assets/0d6fbb22-7ae0-4b02-85ac-4e7c54213b38)
![image](https://github.com/user-attachments/assets/15fae684-3389-45e5-aabc-d70eb1de8010)

## Bugs?
Probably. Please send a GitHub issue, and I may fix it.

## Feedback?
Please send a GitHub issue, and I may consider it.
