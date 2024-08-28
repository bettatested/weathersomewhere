# **Weather Somewhere**
## This displays weather from a random (from a list of 140) location with data from the OpenWeatherMap API.

## How to use it
1. [https://weathersomewhere.netlify.app](https://weathersomewhere.netlify.app)
2. There is no step 2.

## Files
 - index.html: web page
 - styles.css: CSS
 - weather.js: OpenWeatherMap API
 - credits.html: image credits
 - credits.js: sets background image of credits page

## This is how it works:
On the backend, I send requests to the OpenWeatherMap API (current data as of August 27, 2024 at 9:00 PM Eastern) and then I upload it to the data folder. In the future, this may be automatic.
- Selects a random location ID from the list
- Sends a request to the JSON file associated with the location
- Stores temperature, low, high, feels like, coordinates, location name, country and weather data from the file in variables
- Temperatures are converted to Fahrenheit, rounded and stored in variables
- Gets the background, population and image credit from the location ID
- The JavaScript adds HTML with the weather, current, high, low data, Fahrenheit temperatures, population and image credit
- The background images are stored in the format City(Country).jpeg
- The coordinates are stored in variables, and the location name (under Weather in) is a link to OpenStreetMap where the coordinates are

## Screenshots
![image](https://github.com/user-attachments/assets/7788873b-d8d7-47ff-8402-fd801a08e36e)
![image](https://github.com/user-attachments/assets/5f62b135-3f50-4354-8ada-32370b56099d)
![image](https://github.com/user-attachments/assets/fb437040-bd8d-41da-9844-5fb369d38a81)




## Bugs?
Probably. Please send a GitHub issue, and I may fix it.

## Feedback?
Please send a GitHub issue, and I may consider it.
