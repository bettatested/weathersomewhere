// AI Disclosure: I used ChatGPT to help troubleshoot some syntax errors, and to help me understand the API. Everything else (most of it) of the code, API and research is my own.

let cityID;

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    getCredit();
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
        "290030", // Doha, QA
        "3054643", // Budapest, HU
        "2332459", // Lagos, NG
        "1275339", // Mumbai, IN
        "5128581", // New York, US
        "5879400", // Anchorage, US
        "5861897", // Fairbanks, US
        "5506956", // Las Vegas, US
        "5454711", // Albuquerque, US
        "5419384", // Denver, US
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
        "3995465", // Monterrey, MX
        "3515302", // Toluca, MX
        "3582677", // Belize City, BZ
        "3588369", // Tikal, GT
        "3583361", // San Salvador, SV
        "3590979", // Quetzaltenango, GT
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
        "1791247", // Wuhan, CN
        "1850147", // Tokyo, JP
        "1668341", // Taipei, TW
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
        "2950159", // Berlin, DE
        "3413829", // Reykjavik, IS
        "2625252", // Vik, IS
        "3413604", // Selfoss, IS
        "2633274", // Akureyri, IS
        "292223", // Dubai, AE
        "3117735", // Madrid, ES
        "2797656", // Ghent, BE
        "2800866", // Brussels, BE
        "2925533", // Frankfurt am Main, DE
        "2910831", // Hanover (Hannover), DE
        "2775220", // Innsbruck, AT
        "2659994", // Lausanne, CH
        "3172394", // Naples, IT
        "3165524", // Turin, IT
        "650946", // Kotka, FI
        "648090", // Lieksa, FI
        "756135", // Warsaw, PL
        "2750053", // Nijmegen, NL
        "2755003", // Haarlem, NL
        "5604045", // Pocatello, US
        "3553478", // Havana, CU
        "4174757", // Tampa, US
        "5959974", // Gatineau, CA
        "2641455", // Norfolk, GB
        "5947866", // Elliot Lake, CA

    ];

    cityID = cities[Math.floor(Math.random() * cities.length)]; // This generates a random location from the list

    try {
        const response = await fetch(`/data/${cityID}.json`);
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

    const currentTempF = Math.round(currentTempC * 9/5) + 32;
    const highTempF = Math.round(highTempC * 9/5) + 32;
    const lowTempF = Math.round(lowTempC * 9/5) + 32;
    const feelsLikeF = Math.round(feelsLike * 9/5) + 32;
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

let credit;
async function getCredit() { // loads image credit, not the most efficient, but it works
    console.log("cityID:", cityID); // for debugging
    if (cityID === "2643743") { // London, GB
        credit = `<a href="https://www.pexels.com/photo/city-view-at-london-672532/">Photo by Dominika Gregušová</a>`;
    } else if (cityID === "2964574") { // Dublin, IE
        credit = `<a href="https://unsplash.com/photos/a-path-in-a-park-with-lots-of-trees-aNa2d96Jf_k">Photo by Valerie on Unsplash</a>`;
    } else if (cityID === "2988507") { // Paris, FR
        credit = `<a href="https://unsplash.com/photos/eiffel-tower-paris-france-nnzkZNYWHaU">Photo by Chris Karidis on Unsplash</a>`;
    } else if (cityID === "2972315") { // Toulouse, FR
        credit = `<a href="https://unsplash.com/photos/brown-concrete-statue-UUZ7Ft7Ssj4">Photo by DAT VO on Unsplash</a>`;
    } else if (cityID === "2996944") { // Lyon, FR
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-city-9YR74pUJxnc">Photo by Julien Rocheblave on Unsplash</a>`;
    } else if (cityID === "3007477") { // Laon, FR
        credit = `<a href="https://unsplash.com/photos/white-and-brown-concrete-structure-during-day-hCh_PHIhoLI">Photo by Adrien Tutin on Unsplash</a>`;
    } else if (cityID === "2661552") { // Bern, CH
        credit = `<a href="https://www.pexels.com/photo/silver-vehicle-on-concrete-arch-bridge-1291766/">Photo by Matheus Guimarães</a>`;
    } else if (cityID === "2660646") { // Geneva, CH
        credit = `<a href="https://unsplash.com/photos/boat-on-water-AWjVCFcUIbY">Photo by visualsoflukas on Unsplash</a>`;
    } else if (cityID === "3169070") { // Rome, IT
        credit = `<a href="https://www.pexels.com/photo/colosseum-rome-italy-2064827/">Photo by Davi Pimentel</a>`;
    } else if (cityID === "3173435") { // Milan, IT
        credit = `<a href="https://unsplash.com/photos/a-river-running-through-a-city-next-to-tall-buildings-LUbSoMLJGyI">Photo by mathieu gauzy on Unsplash</a>`;
    } else if (cityID === "3176219") { // Genoa, IT
        credit = `<a href="https://unsplash.com/photos/white-and-pink-concrete-buildings-during-daytime-FEzvd2O3C2Y">Photo by Jessie Brown on Unsplash</a>`;
    } else if (cityID === "3183299") { // Alessandria, IT
        credit = `<a href="https://unsplash.com/photos/a-bridge-over-a-river-lnw2lsj2GB0">Photo by Aho on Unsplash</a>`;
    } else if (cityID === "2761369") { // Vienna, AT
        credit = `<a href="https://www.pexels.com/photo/skyline-of-donau-city-vienna-austria-19140965/">Photo by Maximilian Jähnichen</a>`;
    } else if (cityID === "290030") { // Doha, QA
        credit = `<a href="https://unsplash.com/photos/a-city-skyline-at-night-5jvAmqV4W-c">Photo by Hongbin on Unsplash</a>`;
    } else if (cityID === "3054643") { // Budapest, HU
        credit = `<a href="https://www.pexels.com/photo/town-near-river-during-night-time-774856/">Photo by Amir H. Bakhtiari</a>`;
    } else if (cityID === "2332459") { // Lagos, NG
        credit = `<a href="https://www.pexels.com/photo/aerial-view-of-the-carter-bridge-connecting-lagos-island-to-the-mainland-22681398/">Photo by Ben Iwara</a>`;
    } else if (cityID === "1275339") { // Mumbai, IN
        credit = `<a href="https://www.pexels.com/photo/low-angle-shot-of-the-gateway-of-india-10587328/">Photo by Thé Aditya Jadhav</a>`;
    } else if (cityID === "5128581") { // New York, US
        credit = `<a href="https://www.pexels.com/photo/the-world-trade-center-new-york-1058278/">Photo by Marcus Herzberg</a>`;
    } else if (cityID === "5879400") { // Anchorage, US
        credit = `<a href="https://www.pexels.com/photo/green-trees-near-lake-4027720/">Photo by Sara Loeffler</a>`;
    } else if (cityID === "5861897") { // Fairbanks, US
        credit = `<a href="https://unsplash.com/photos/green-trees-beside-lake-under-blue-sky-during-daytime-F3vX4TL4qYo">Photo by James Pack on Unsplash</a>`;
    } else if (cityID === "5454711") { // Las Vegas, US
        credit = `<a href="https://www.pexels.com/photo/view-of-metropolitan-area-at-night-2540653/">Photo by Dave Morgan</a>`;
    } else if (cityID === "5506956") { // Albuquerque, US
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-during-daytime-a1Mrycbix-w">Photo by Gabriel Griego on Unsplash</a>`;
    } else if (cityID === "5419384") { // Denver, US
        credit = `<a href="https://unsplash.com/photos/the-sun-is-setting-over-a-large-city-OVE2SA0TVJE">Photo by Nils Huenerfuerst on Unsplash</a>`;
    } else if (cityID === "5391959") { // San Francisco, US
        credit = `<a href="https://unsplash.com/photos/golden-gate-bridge-san-francisco-california-NrrwM3GMDcM">Photo by Peter Emery on Unsplash</a>`;
    } else if (cityID === "4887398") { // Chicago, US
        credit = `<a href="https://www.pexels.com/photo/city-with-river-in-middle-during-cloudy-day-167200/">Photo by Grzegorz Zdanowski</a>`;
    } else if (cityID === "5263045") { // Milwaukee, US
        credit = `<a href="https://www.pexels.com/photo/city-landscape-290144/">Photo by Pixabay</a>`;
    } else if (cityID === "4990729") { // Detroit, US
        credit = `<a href="https://www.pexels.com/photo/cityscape-of-detroit-at-dusk-15020901/">Photo by Shan Nir</a>`;
    } else if (cityID === "5037649") { // Minneapolis, US
        credit = `<a href="https://www.pexels.com/photo/aerial-photography-of-moving-cars-on-the-bridge-over-river-4320303/">Photo by Josh Hild</a>`;
    } else if (cityID === "5028500") { // Grand Marais, US
        credit = `<a href="https://unsplash.com/photos/body-of-water-under-brown-sky-at-golden-hour-8ddNUbiWs8c">Photo by Andrew Ling on Unsplash</a>`;
    } else if (cityID === "5047308") { // Silver Bay, US
        credit = `<a href="https://unsplash.com/photos/green-and-brown-mountain-beside-sea-during-daytime-brBsveD19cg">Photo by Brandon Cormier on Unsplash</a>`;
    } else if (cityID === "5050817") { // Two Harbors, US
        credit = `<a href="https://unsplash.com/photos/waterfalls-near-green-trees-under-white-sky-during-daytime-ANJ2-RFYZFI">Photo by Cody Otto on Unsplash</a>`;
    } else if (cityID === "5275191") { // Superior, US
        credit = `<a href="https://www.pexels.com/photo/drone-shot-of-the-wisconsin-point-light-in-superior-on-wisconsin-point-in-douglas-county-wisconsin-19784150/">Photo by Bl∡ke</a>`;
    } else if (cityID === "4996572") { // Houghton, US
        credit = `<a href="https://unsplash.com/photos/white-bridge-over-river-under-white-sky-during-daytime-wjyHa3GqOTI">Photo by Elijah Cobb on Unsplash</a>`;
    } else if (cityID === "4393217") { // Kansas City, US
        credit = `<a href="https://www.pexels.com/photo/city-skyline-under-blue-sky-5660080/">Photo by Giancarlo Rojas</a>`;
    } else if (cityID === "4544349") { // Oklahoma City, US
        credit = `<a href="https://unsplash.com/photos/eagle-eye-view-time-lapse-city-and-streets-OSNZjXCF5VE">Photo by Gerson Repreza on Unsplash</a>`;
    } else if (cityID === "4407066") { // St. Louis, US
        credit = `<a href="https://unsplash.com/photos/a-view-of-the-st-louis-skyline-from-across-the-st-louis-river-JSBFK4DR7qU">Photo by Kenny Nguyễn on Unsplash</a>`;
    } else if (cityID === "4259418") { // Indianapolis, US
        credit = `<a href="https://www.pexels.com/photo/bird-s-eye-view-photography-of-lighted-city-3573383/">Photo by Josh Hild</a>`;
    } else if (cityID === "4508722") { // Cincinnati, US
        credit = `<a href="https://www.pexels.com/photo/photo-of-lighted-buildings-near-river-2570704/">Photo by Dave Morgan</a>`;
    } else if (cityID === "4509177") { // Columbus, US
        credit = `<a href="https://unsplash.com/photos/aerial-view-photo-of-city-buildings-during-nighttime-EEenrxFJDHE">Photo by Ellie Brown on Unsplash</a>`;
    } else if (cityID === "5206379") { // Pittsburgh, US
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-bridge-and-buildings-under-blue-sky-9HGqJq3vglc">Photo by Vidar Nordli-Mathisen on Unsplash</a>`;
    } else if (cityID === "4560349") { // Philadelphia, US
        credit = `<a href="https://www.pexels.com/photo/contemporary-architecture-of-megapolis-with-skyscrapers-4642403/">Photo by Kelly</a>`;
    } else if (cityID === "4930956") { // Boston, US
        credit = `<a href="https://www.pexels.com/photo/aerial-view-of-city-buildings-5627116/">Photo by Andrés García</a>`;
    } else if (cityID === "4835797") { // Hartford, US
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime-jeJWWrldemw">Photo by Balazs Busznyak on Unsplash</a>`;
    } else if (cityID === "4781756") { // Richmond, US
        credit = `<a href="https://unsplash.com/photos/high-rise-building-during-sunset-WGXHrJ6DSEQ">Photo by Alexander Jawfox on Unsplash</a>`;
    } else if (cityID === "4460243") { // Charlotte, US
        credit = `<a href="https://unsplash.com/photos/a-train-yard-with-many-trains-on-the-tracks-cJp16tjKAWk">Photo by Ryan M on Unsplash</a>`;
    } else if (cityID === "4574324") { // Charleston, US
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-bridge-during-daytime-p9vBVq_-nXY">Photo by David Martin</a>`;
    } else if (cityID === "4160021") { // Jacksonville, US
        credit = `<a href="https://www.pexels.com/photo/elevated-road-in-jacksonville-20708697/">Photo by Kelly</a>`;
    } else if (cityID === "5809844") { // Seattle, US
        credit = `<a href="https://www.pexels.com/photo/photo-of-seattle-skyline-2539374/">Photo by Sergei A</a>`;
    } else if (cityID === "5746545") { // Portland, US
        credit = `<a href="https://unsplash.com/photos/city-skyline-near-body-of-water-during-daytime-UVG1K4ejdB8">Photo by Meggyn Pomerleau</a>`;
    } else if (cityID === "4180439") { // Atlanta, US
        credit = `<a href="https://unsplash.com/photos/grey-high-rise-building-during-daytime-sR1Kz2auNJE">Photo by Brad Huchteman on Unsplash</a>`;
    } else if (cityID === "4684888") { // Dallas, US
        credit = `<a href="https://www.pexels.com/photo/aerial-photo-of-city-under-white-clouds-280193/">Photo by Pixabay</a>`;
    } else if (cityID === "6183235") { // Winnipeg, CA
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-night-time-sM0q8DxTkWQ">Photo by Josh Lavallee on Unsplash</a>`;
    } else if (cityID === "6167865") { // Toronto, CA
        credit = `<a href="https://www.pexels.com/photo/panoramic-photography-of-cn-tower-614224/">Photo by Scott Webb</a>`;
    } else if (cityID === "5969782") { // Hamilton, CA
        credit = `<a href="https://unsplash.com/photos/white-wooden-fence-on-white-sand-beach-during-daytime-kZiVnkTx8Mw">Photo by Ahmed Abbas on Unsplash</a>`;
    } else if (cityID === "6058560") { // London, CA
        credit = `<a href="https://unsplash.com/photos/high-rise-buildings-under-blue-sky-during-daytime-g4I64IzqurI">Photo by Scott Webb on Unsplash</a>`;
    } else if (cityID === "6094817") { // Ottawa, CA
        credit = `<a href="https://www.pexels.com/photo/building-architecture-historical-tower-7328/">Photo by Splash of Rain</a>`;
    } else if (cityID === "6077243") { // Montreal, CA
        credit = `<a href="https://unsplash.com/photos/landscape-photography-of-skyscrapers-BG9oZ15a4Xk">Photo by Marc-Olivier Jodoin on Unsplash</a>`;
    } else if (cityID === "6325494") { // Québec, CA
        credit = `<a href="hhttps://unsplash.com/photos/a-large-castle-like-building-with-a-clock-tower-39ILOETJ0iU">Photo by Dana Andreea Gheorghe on Unsplash</a>`;
    } else if (cityID === "5991055") { // Kenora, CA
        credit = `<a href="https://unsplash.com/photos/a-body-of-water-with-trees-and-a-sunset-in-the-background-bwPXhjcKFHM">Photo by Kieran Whitford on Unsplash</a>`;
    } else if (cityID === "5888001") { // Atikokan, CA
        credit = `<a href="https://www.pexels.com/photo/scenic-photo-of-lake-during-dawn-2958547/">Photo by Justin Anderson</a>`;
    } else if (cityID === "6173331") { // Vancouver, CA
        credit = `<a href="https://www.pexels.com/photo/scenic-view-of-bridge-during-dawn-2777056/">Photo by James Wheeler</a>`;
    } else if (cityID === "5921356") { // Chilliwack, CA
        credit = `<a href="https://www.pexels.com/photo/body-of-water-2463851/">Photo by kristen munk</a>`;
    } else if (cityID === "5989045") { // Kamloops, CA
        credit = `<a href="https://unsplash.com/photos/green-trees-near-lake-under-blue-sky-during-daytime-oz07J1XUIVs">Photo by Louis Paulin on Unsplash</a>`;
    } else if (cityID === "5990579") { // Kelowna, CA
        credit = `<a href="https://unsplash.com/photos/black-asphalt-road-under-blue-sky-during-daytime-yHhfYzH_o-o">Photo by Kate Joyce</a>`;
    } else if (cityID === "6113365") { // Prince George, CA
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-bridge-over-a-river-q6bicFBA-UM">Photo by Harsh Singh on Unsplash</a>`;
    } else if (cityID === "5946768") { // Edmonton, CA
        credit = `<a href="https://www.pexels.com/photo/the-walterdale-bridge-at-night-10584080/">Photo by Jimmy Liao</a>`;
    } else if (cityID === "5913490") { // Calgary, CA
        credit = `<a href="https://unsplash.com/photos/silhouette-of-high-rise-building-during-daytime-_ZBekGTBh-c">Photo by Kyler Nixon on Unsplash</a>`;
    } else if (cityID === "5892532") { // Banff, CA
        credit = `<a href="https://unsplash.com/photos/mountain-alp-under-cloudy-sky-Y_coTG5xEsE">Photo by Priscilla Du Preez 🇨🇦 on Unsplash</a>`;
    } else if (cityID === "5942798") { // Drumheller, CA
        credit = `<a href="https://unsplash.com/photos/a-scenic-view-of-the-badlands-of-the-badlands-7hAoRXIviX0">Photo by Cece Concepts on Unsplash</a>`;
    } else if (cityID === "6141256") { // Saskatoon, CA
        credit = `<a href="https://www.pexels.com/photo/building-photography-2609257/">Photo by Sarath SunilDutt from Pexels</a>`;
    } else if (cityID === "6119109") { // Regina, CA
        credit = `<a href="https://unsplash.com/photos/bare-trees-on-snow-covered-ground-during-daytime-MoQRO-fjoVE">Photo by ILLIYEEN on Unsplash</a>`;
    } else if (cityID === "6160603") { // Swift Current, CA
        credit = `<a href="https://unsplash.com/photos/orange-leafed-trees-Inu37-bjO2I">Photo by Erik Mclean on Unsplash</a>`;
    } else if (cityID === "4180439") { // Yellowknife, CA
        credit = `<a href="https://unsplash.com/photos/silhouette-of-trees-under-green-aurora-kRB26utONtw">Photo by HyunKuk Kim on Unsplash</a>`;
    } else if (cityID === "3530597") { // Mexico City, MX
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-from-the-top-of-a-hill-8A4E8bGLUqY">Photo by Anton Lukin on Unsplash</a>`;
    } else if (cityID === "3521081") { // Puebla City, MX
        credit = `<a href="https://unsplash.com/photos/a-row-of-parked-cars-on-a-city-street-nIupUN8dcb0">Photo by Vibe Adventures on Unsplash</a>`;
    } else if (cityID === "4180439") { // Monterrey, MX
        credit = `<a href="https://unsplash.com/photos/birds-eye-view-of-mountain-under-cloudy-sky-vtvwNNjYBz4">Photo by Jorge G. Balleza on Unsplash</a>`;
    } else if (cityID === "3515302") { // Toluca, MX
        credit = `<a href="https://unsplash.com/photos/silhouette-of-mountain-YVSDD8ndlP8">Photo by Diego PH on Unsplash</a>`;
    } else if (cityID === "3582677") { // Belize City, BZ
        credit = `<a href="https://unsplash.com/photos/gray-concrete-building-near-green-grass-field-under-white-clouds-during-daytime-iQR6ciADh8s">Photo by Alisa Matthews on Unsplash</a>`;
    } else if (cityID === "3588369") { // Tikal, GT
        credit = `<a href="https://unsplash.com/photos/a-forest-of-trees-EEPqrLYe4T0">Photo by Paweł Wielądek on Unsplash</a>`;
    } else if (cityID === "3583361") { // San Salvador, SV
        credit = `<a href="https://unsplash.com/photos/a-sunset-view-of-a-city-with-a-mountain-in-the-background-cCXoS9uAKbc">Photo by Oswaldo Martinez on Unsplash</a>`;
    } else if (cityID === "3590979") { // Quetzaltenango, GT
        credit = `<a href="https://unsplash.com/photos/city-with-high-rise-buildings-under-blue-sky-during-daytime-nB9t42uAI6Y">Photo by Antonio Lopez on Unsplash</a>`;
    } else if (cityID === "3600949") { // Tegucigalpa, HN
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-city-intersection-with-cars-kvSOLfp56uo">Photo by Héctor Emilio Gonzalez on Unsplash</a>`;
    } else if (cityID === "3601783") { // San Pedro Sula, HN
        credit = `<a href="https://unsplash.com/photos/a-sunset-view-of-a-city-with-a-mountain-in-the-background-cCXoS9uAKbc">Photo by Oswaldo Martinez on Unsplash</a>`;
    } else if (cityID === "3617763") { // Managua, NI
        credit = `<a href="https://unsplash.com/photos/a-rocky-beach-with-a-mountain-range-in-the-background-6fnHYoZa7io">Photo by Gabriella Trejoss on Unsplash</a>`;
    } else if (cityID === "3621849") { // San José, CR
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-at-night-with-the-moon-in-the-sky-GA0OGHrNDHg">Photo by César Badilla Miranda on Unsplash</a>`;
    } else if (cityID === "3703443") { // Panama City, PA
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-large-city-with-tall-buildings-YsHVc8NlxJw">Photo by Keiron Crasktellanos on Unsplash</a>`;
    } else if (cityID === "3688689") { // Bogota, CO
        credit = `<a href="https://unsplash.com/photos/buildings-near-mountain-GkacI-_mGlg">Photo by Random Institute on Unsplash</a>`;
    } else if (cityID === "3451190") { // Rio de Janeiro, BR
        credit = `<a href="https://www.pexels.com/photo/crowd-of-tourists-on-the-arpoador-beach-in-rio-de-janeiro-24039565/">Photo by Kelly</a>`;
    } else if (cityID === "3448439") { // São Paulo, BR
        credit = `<a href="https://unsplash.com/photos/cityscape-during-daytime-uth095lCHdM">Photo by Wylkon Cardoso on Unsplash</a>`;
    } else if (cityID === "3871336") { // Santiago, CL
        credit = `<a href="https://unsplash.com/photos/a-park-with-a-lot-of-tall-buildings-in-the-background-WwBVfh1eyq8">Photo by Daniel Prado on Unsplash</a>`;
    } else if (cityID === "1609350") { // Bangkok, TH
        credit = `<a href="https://www.pexels.com/photo/an-aerial-shot-of-a-city-at-night-7702640/">Photo by Eyal Sberro</a>`;
   } else {
        credit = "Error: Image credit not found";
    }

    document.getElementById("credit").innerHTML = credit;
}
