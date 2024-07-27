// AI Disclosure: I used ChatGPT to help troubleshoot syntax errors, and to help me understand the API. The rest (most) of the code is my own.

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
});
async function getWeather() {
    const cities = [ // Here I am adding location IDs from OpenWeatherMap
        "2643743", // London, GB
        "5128581", // New York City, US
        "5879400", // Anchorage, US
        
    ];
    const apiKey = "";

    const cityID = cities[Math.floor(Math.random() * cities.length)]; // This generates a random location from the list

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${apiKey}`)
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
        document.title = `Weather Somewhere - ${data.name}`; // This changes the title to "Weather Somewhere -" and the location
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `Error: ${error.message}`;
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const currentTempC = data.main.temp;
    const highTempC = data.main.temp_max;
    const lowTempC = data.main.temp_min;
    const country = data.sys.country

    const currentTempF = (currentTempC * 9/5) + 32;
    const highTempF = (highTempC * 9/5) + 32;
    const lowTempF = (lowTempC * 9/5) + 32;

    const weatherInfo = `
        <h2>${cityName}, ${country}</h2> 
        <p>Current Temperature: ${currentTempC.toFixed(1)}°C / ${currentTempF.toFixed(1)}°F</p>
        <p>High: ${highTempC.toFixed(1)}°C / ${highTempF.toFixed(1)}°F</p>
        <p>Low: ${lowTempC.toFixed(1)}°C / ${lowTempF.toFixed(1)}°F</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}
