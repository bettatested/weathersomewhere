# **Weather Somewhere**
## This displays weather from a random (from a list) location with the OpenWeatherMap API. I plan to add images, CSS style and more information.

 - index.html: web page
 - styles.css: CSS
 - weather.js: OpenWeatherMap API
 - credits.html: image credits
 - credits.js: sets background image of credits page

## This is how it works:
- Selects a random location ID from the list
- Sends a request to the OpenWeatherMap API to get data for the location (in metric)
- Stores temperature, low, high, feels like, coordinates, location name, country and weather data from the API in variables
- Temperatures are converted to Fahrenheit and stored in variables
- The JavaScript adds HTML with the weather, current, high, low data and the Fahrenheit temperatures.
- The background images are stored in the format City(Country).jpeg and it gets the background
- The coordinates are stored in variables, and the location name (under Weather in) is a link to OpenStreetMap where the coordinates are
