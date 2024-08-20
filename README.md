# **Weather Somewhere**
## This displays weather from a random (from a list of 119) location with data from the OpenWeatherMap API.

 - index.html: web page
 - styles.css: CSS
 - weather.js: OpenWeatherMap API
 - credits.html: image credits
 - credits.js: sets background image of credits page

## This is how it works:
On the backend, I send requests to the OpenWeatherMap API (current data as of August 20, 2024 at 4:00 PM Eastern) and then I upload it to the data folder. In the future, this may be automatic.
- Selects a random location ID from the list
- Sends a request to the JSON file associated with the location
- Stores temperature, low, high, feels like, coordinates, location name, country and weather data from the file in variables
- Temperatures are converted to Fahrenheit, rounded and stored in variables
- The JavaScript adds HTML with the weather, current, high, low data and the Fahrenheit temperatures.
- The background images are stored in the format City(Country).jpeg and it gets the background
- The coordinates are stored in variables, and the location name (under Weather in) is a link to OpenStreetMap where the coordinates are
