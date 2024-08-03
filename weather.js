// AI Disclosure: I used ChatGPT to help troubleshoot some syntax errors, and to help me understand the API. Everything else (most of it) of the code, API and research is my own.

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
});

async function getWeather() { // Here I am adding location IDs from OpenWeatherMap
    const cities = [
        "2643743", // London, GB
        "2964574", // Dublin, IE
        "2988507", // Paris, FR
        "2972315", // Toulouse, FR
        "2996944", // Lyon, FR
        "3007477", // Laon, FR
        "2661552", // Bern, CH
        "2660646", // Geneva, CH
        "3169070", // Rome, IT
        "3173435", // Milan, IT
        "3176219", // Genoa, IT
        "3183299", // Alessandria, IT
        "2761369", // Vienna, AT
        "3054643", // Budapest, HU
        "2332459", // Lagos, NG
        "1275339", // Mumbai, IN
        "5128581", // New York, US
        "5879400", // Anchorage, US
        "5861897", // Fairbanks, US
        "5506956", // Las Vegas, US
        "5391959", // San Francisco, US
        "4887398", // Chicago, US
        "5263045", // Milwaukee, US
        "4990729", // Detroit, US
        "5037649", // Minneapolis, US
        "5028500", // Grand Marais, US
        "5047308", // Silver Bay, US
        "5050817", // Two Harbors, US
        "5275191", // Superior, US
        "4996572", // Houghton, US
        "5007450", // Sault Ste. Marie, US
        "4393217", // Kansas City, US
        "4544349", // Oklahoma City, US
        "4407066", // St. Louis, US
        "4259418", // Indianapolis, US
        "4508722", // Cincinnati, US
        "4509177", // Columbus, US
        "5206379", // Pittsburgh, US
        "4560349", // Philadelphia, US
        "4930956", // Boston, US
        "4835797", // Hartford, US
        "4781756", // Richmond, US
        "4460243", // Charlotte, US
        "4574324", // Charleston, US
        "4160021", // Jacksonville, US
        "5809844", // Seattle, US
        "5746545", // Portland, US
        "4180439", // Atlanta, US
        "4684888", // Dallas, US
        "6183235", // Winnipeg, CA
        "6167865", // Toronto, CA
        "5969782", // Hamilton, CA
        "6058560", // London, CA
        "6094817", // Ottawa, CA
        "6077243", // Montreal, CA
        "6325494", // Québec, CA
        "5991055", // Kenora, CA
        "5888001", // Atikokan, CA
        "6166142", // Thunder Bay, CA
        "6162951", // Terrace Bay, CA
        "6173331", // Vancouver, CA
        "5921356", // Chilliwack, CA
        "5989045", // Kamloops, CA
        "5990579", // Kelowna, CA
        "6113365", // Prince George, CA
        "5946768", // Edmonton, CA
        "5913490", // Calgary, CA
        "5892532", // Banff, CA
        "5942798", // Drumheller, CA
        "6141256", // Saskatoon, CA
        "6119109", // Regina, CA
        "6160603", // Swift Current, CA
        "6185377", // Yellowknife, CA
        "3530597", // Mexico City, MX
        "3521081", // Puebla City, MX
        "3515302", // Toluca, MX
        "3582677", // Belize City, BZ
        "3588369", // Tikal, GT
        "3583361", // San Salvador, SV
        "3590979", // Quetzaltenango, SV
        "3600949", // Tegucigalpa, HN
        "3601783", // San Pedro Sula, HN
        "3617763", // Managua, NI
        "3621849", // San José, CR
        "3703443", // Panama City, PA
        "3688689", // Bogota, CO
        "3451190", // Rio de Janeiro, BR
        "3448439", // São Paulo, BR
        "3871336", // Santiago, CL
        "1609350", // Bangkok, TH
        "1850147", // Tokyo, JP
        "2147714", // Sydney, AU
        "2158177", // Melbourne, AU
        "2179537", // Wellington, NZ
        "2193732", // Auckland, NZ
        "3143244", // Oslo, NO
        "3161733", // Bergen, NO
        "2673730", // Stockholm, SE
        "2666199", // Uppsala, SE
        "2711537", // Göteborg (Gothenburg), SE
        "643492", // Oulu, FI
        "658225", // Helsinki, FI
        "660158", // Espoo, FI
        "633679", // Turku, FI
        "634963", // Tampere, FI
        "646005", // Mikkeli, FI
        "588409", // Tallinn, EE
        "588335", // Tartu, EE
        "456172", // Riga, LV
        "460413", // Daugavpils, LV
        "2618425", // Copenhagen, DK
        "3413829", // Reykjavik, IS
        "2625252", // Vik, IS
        "3413604", // Selfoss, IS
        "2633274", // Akureyri, IS

    ];
    const apiKey = "";

    const cityID = cities[Math.floor(Math.random() * cities.length)]; // This generates a random location from the list

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Location not found or request limit reached');
        }
        const data = await response.json();
        displayWeather(data);
        document.title = `Weather in ${data.name}`; // This changes the title to include the location
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `Error: ${error.message}`;
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const currentTempC = data.main.temp;
    const highTempC = data.main.temp_max;
    const lowTempC = data.main.temp_min;
    const feelsLike = data.main.feels_like
    const country = data.sys.country;
    const weather = data.weather[0].description;

    const currentTempF = (currentTempC * 9/5) + 32;
    const highTempF = (highTempC * 9/5) + 32;
    const lowTempF = (lowTempC * 9/5) + 32;
    const feelsLikeF = (feelsLike * 9/5) + 32;
    const coordLon = data.coord.lon;
    const coordLat = data.coord.lat;

    const weatherInfo = `
        <h2><a href="https://nominatim.openstreetmap.org/ui/reverse.html?format=html&lat=${coordLat}&lon=${coordLon}">${cityName}, ${country}</a></h2>
        <h3>${weather}</h2>
        <br>
        <p>Current Temperature: ${currentTempC.toFixed(1)}°C / ${currentTempF.toFixed(1)}°F</p>
        <p>Feels like: ${feelsLike}°C / ${feelsLikeF}°F</p>
        <p>High: ${highTempC.toFixed(1)}°C / ${highTempF.toFixed(1)}°F</p>
        <p>Low: ${lowTempC.toFixed(1)}°C / ${lowTempF.toFixed(1)}°F</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;

    
    document.body.style.backgroundImage = `url('images/${cityName}${country}.jpeg')`; // This sets the background image based on the location
}
