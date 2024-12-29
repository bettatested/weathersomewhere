// AI Disclosure: I used ChatGPT to help troubleshoot some syntax errors, and to help me understand the API. Everything else (most of it) of the code, API and research is my own.

let cityID;

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    getCreditandPopulation();
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
        <h3>Population ${population}</h3>
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
let population;
async function getCreditandPopulation() { // loads image credit, not the most efficient, but it works
    console.log("cityID:", cityID); // for debugging
    if (cityID === "2643743") { // London, GB
        credit = `<a href="https://www.pexels.com/photo/city-view-at-london-672532/">Photo by Dominika Gregušová</a>`;
        population = `8,866,180`;
    } else if (cityID === "2964574") { // Dublin, IE
        credit = `<a href="https://unsplash.com/photos/a-path-in-a-park-with-lots-of-trees-aNa2d96Jf_k">Photo by Valerie on Unsplash</a>`;
        population = `592,713`;
    } else if (cityID === "2988507") { // Paris, FR
        credit = `<a href="https://unsplash.com/photos/eiffel-tower-paris-france-nnzkZNYWHaU">Photo by Chris Karidis on Unsplash</a>`;
        population = `2,102,650`;
    } else if (cityID === "2972315") { // Toulouse, FR
        credit = `<a href="https://unsplash.com/photos/brown-concrete-statue-UUZ7Ft7Ssj4">Photo by DAT VO on Unsplash</a>`;
        population = `504,078`;
    } else if (cityID === "2996944") { // Lyon, FR
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-city-9YR74pUJxnc">Photo by Julien Rocheblave on Unsplash</a>`;
        population = `522,250`;
    } else if (cityID === "3007477") { // Laon, FR
        credit = `<a href="https://unsplash.com/photos/white-and-brown-concrete-structure-during-day-hCh_PHIhoLI">Photo by Adrien Tutin on Unsplash</a>`;
        population = `24,021`;
    } else if (cityID === "2661552") { // Bern, CH
        credit = `<a href="https://www.pexels.com/photo/silver-vehicle-on-concrete-arch-bridge-1291766/">Photo by Matheus Guimarães</a>`;
        population = `133,883`;
    } else if (cityID === "2660646") { // Geneva, CH
        credit = `<a href="https://unsplash.com/photos/boat-on-water-AWjVCFcUIbY">Photo by visualsoflukas on Unsplash</a>`;
        population = `201,741`;
    } else if (cityID === "3169070") { // Rome, IT
        credit = `<a href="https://www.pexels.com/photo/colosseum-rome-italy-2064827/">Photo by Davi Pimentel</a>`;
        population = `4,342,212`;
    } else if (cityID === "3173435") { // Milan, IT
        credit = `<a href="https://unsplash.com/photos/a-river-running-through-a-city-next-to-tall-buildings-LUbSoMLJGyI">Photo by mathieu gauzy on Unsplash</a>`;
        population = `4,336,121`;
    } else if (cityID === "3176219") { // Genoa, IT
        credit = `<a href="https://unsplash.com/photos/white-and-pink-concrete-buildings-during-daytime-FEzvd2O3C2Y">Photo by Jessie Brown on Unsplash</a>`;
        population = `580,097`;
    } else if (cityID === "3183299") { // Alessandria, IT
        credit = `<a href="https://unsplash.com/photos/a-bridge-over-a-river-lnw2lsj2GB0">Photo by Aho on Unsplash</a>`;
        population = `92,104`;
    } else if (cityID === "2761369") { // Vienna, AT
        credit = `<a href="https://www.pexels.com/photo/skyline-of-donau-city-vienna-austria-19140965/">Photo by Maximilian Jähnichen</a>`;
        population = `2,890,577`;
    } else if (cityID === "290030") { // Doha, QA
        credit = `<a href="https://unsplash.com/photos/a-city-skyline-at-night-5jvAmqV4W-c">Photo by Hongbin on Unsplash</a>`;
        population = `1,186,023`;
    } else if (cityID === "3054643") { // Budapest, HU
        credit = `<a href="https://www.pexels.com/photo/town-near-river-during-night-time-774856/">Photo by Amir H. Bakhtiari</a>`;
        population = `1,685,342`;
    } else if (cityID === "2332459") { // Lagos, NG
        credit = `<a href="https://www.pexels.com/photo/aerial-view-of-the-carter-bridge-connecting-lagos-island-to-the-mainland-22681398/">Photo by Ben Iwara</a>`;
        population = `8,048,430`;
    } else if (cityID === "1275339") { // Mumbai, IN
        credit = `<a href="https://www.pexels.com/photo/low-angle-shot-of-the-gateway-of-india-10587328/">Photo by Thé Aditya Jadhav</a>`;
        population = `12,442,373`;
    } else if (cityID === "5128581") { // New York, US
        credit = `<a href="https://www.pexels.com/photo/the-world-trade-center-new-york-1058278/">Photo by Marcus Herzberg</a>`;
        population = `8,804,190`;
    } else if (cityID === "5879400") { // Anchorage, US
        credit = `<a href="https://www.pexels.com/photo/green-trees-near-lake-4027720/">Photo by Sara Loeffler</a>`;
        population = `32,515`;
    } else if (cityID === "5861897") { // Fairbanks, US
        credit = `<a href="https://unsplash.com/photos/green-trees-beside-lake-under-blue-sky-during-daytime-F3vX4TL4qYo">Photo by James Pack on Unsplash</a>`;
        population = `1,234,567`;
    } else if (cityID === "5454711") { // Las Vegas, US
        credit = `<a href="https://www.pexels.com/photo/view-of-metropolitan-area-at-night-2540653/">Photo by Dave Morgan</a>`;
        population = `641,903`;
    } else if (cityID === "5506956") { // Albuquerque, US
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-during-daytime-a1Mrycbix-w">Photo by Gabriel Griego on Unsplash</a>`;
        population = `564,559`;
    } else if (cityID === "5419384") { // Denver, US
        credit = `<a href="https://unsplash.com/photos/the-sun-is-setting-over-a-large-city-OVE2SA0TVJE">Photo by Nils Huenerfuerst on Unsplash</a>`;
        population = `715,522`;
    } else if (cityID === "5391959") { // San Francisco, US
        credit = `<a href="https://unsplash.com/photos/golden-gate-bridge-san-francisco-california-NrrwM3GMDcM">Photo by Peter Emery on Unsplash</a>`;
        population = `873,965`;
    } else if (cityID === "4887398") { // Chicago, US
        credit = `<a href="https://www.pexels.com/photo/city-with-river-in-middle-during-cloudy-day-167200/">Photo by Grzegorz Zdanowski</a>`;
        population = `2,746,388`;
    } else if (cityID === "5263045") { // Milwaukee, US
        credit = `<a href="https://www.pexels.com/photo/city-landscape-290144/">Photo by Pixabay</a>`;
        population = `577,222`;
    } else if (cityID === "4990729") { // Detroit, US
        credit = `<a href="https://www.pexels.com/photo/cityscape-of-detroit-at-dusk-15020901/">Photo by Shan Nir</a>`;
        population = `639,111`;
    } else if (cityID === "5037649") { // Minneapolis, US
        credit = `<a href="https://www.pexels.com/photo/aerial-photography-of-moving-cars-on-the-bridge-over-river-4320303/">Photo by Josh Hild</a>`;
        population = `429,954`;
    } else if (cityID === "5028500") { // Grand Marais, US
        credit = `<a href="https://unsplash.com/photos/body-of-water-under-brown-sky-at-golden-hour-8ddNUbiWs8c">Photo by Andrew Ling on Unsplash</a>`;
        population = `1,337`;
    } else if (cityID === "5047308") { // Silver Bay, US
        credit = `<a href="https://unsplash.com/photos/green-and-brown-mountain-beside-sea-during-daytime-brBsveD19cg">Photo by Brandon Cormier on Unsplash</a>`;
        population = `1,857`;
    } else if (cityID === "5050817") { // Two Harbors, US
        credit = `<a href="https://unsplash.com/photos/waterfalls-near-green-trees-under-white-sky-during-daytime-ANJ2-RFYZFI">Photo by Cody Otto on Unsplash</a>`;
        population = `3,633`;
    } else if (cityID === "5275191") { // Superior, US
        credit = `<a href="https://www.pexels.com/photo/drone-shot-of-the-wisconsin-point-light-in-superior-on-wisconsin-point-in-douglas-county-wisconsin-19784150/">Photo by Bl∡ke</a>`;
        population = `26,751`;
    } else if (cityID === "4996572") { // Houghton, US
        credit = `<a href="https://unsplash.com/photos/white-bridge-over-river-under-white-sky-during-daytime-wjyHa3GqOTI">Photo by Elijah Cobb on Unsplash</a>`;
        population = `8,386`;
    } else if (cityID === "4393217") { // Kansas City, US
        credit = `<a href="https://www.pexels.com/photo/city-skyline-under-blue-sky-5660080/">Photo by Giancarlo Rojas</a>`;
        population = `508,090`;
    } else if (cityID === "4544349") { // Oklahoma City, US
        credit = `<a href="https://unsplash.com/photos/eagle-eye-view-time-lapse-city-and-streets-OSNZjXCF5VE">Photo by Gerson Repreza on Unsplash</a>`;
        population = `681,054`;
    } else if (cityID === "4407066") { // St. Louis, US
        credit = `<a href="https://unsplash.com/photos/a-view-of-the-st-louis-skyline-from-across-the-st-louis-river-JSBFK4DR7qU">Photo by Kenny Nguyễn on Unsplash</a>`;
        population = `301,578`;
    } else if (cityID === "4259418") { // Indianapolis, US
        credit = `<a href="https://www.pexels.com/photo/bird-s-eye-view-photography-of-lighted-city-3573383/">Photo by Josh Hild</a>`;
        population = `887,642`;
    } else if (cityID === "4508722") { // Cincinnati, US
        credit = `<a href="https://www.pexels.com/photo/photo-of-lighted-buildings-near-river-2570704/">Photo by Dave Morgan</a>`;
        population = `309,317`;
    } else if (cityID === "4509177") { // Columbus, US
        credit = `<a href="https://unsplash.com/photos/aerial-view-photo-of-city-buildings-during-nighttime-EEenrxFJDHE">Photo by Ellie Brown on Unsplash</a>`;
        population = `905,748`;
    } else if (cityID === "5206379") { // Pittsburgh, US
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-bridge-and-buildings-under-blue-sky-9HGqJq3vglc">Photo by Vidar Nordli-Mathisen on Unsplash</a>`;
        population = `302,971`;
    } else if (cityID === "4560349") { // Philadelphia, US
        credit = `<a href="https://www.pexels.com/photo/contemporary-architecture-of-megapolis-with-skyscrapers-4642403/">Photo by Kelly</a>`;
        population = `1,603,797`;
    } else if (cityID === "4930956") { // Boston, US
        credit = `<a href="https://www.pexels.com/photo/aerial-view-of-city-buildings-5627116/">Photo by Andrés García</a>`;
        population = `675,647`;
    } else if (cityID === "4835797") { // Hartford, US
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime-jeJWWrldemw">Photo by Balazs Busznyak on Unsplash</a>`;
        population = `121,054`;
    } else if (cityID === "4781756") { // Richmond, US
        credit = `<a href="https://unsplash.com/photos/high-rise-building-during-sunset-WGXHrJ6DSEQ">Photo by Alexander Jawfox on Unsplash</a>`;
        population = `226,610`;
    } else if (cityID === "4460243") { // Charlotte, US
        credit = `<a href="https://unsplash.com/photos/a-train-yard-with-many-trains-on-the-tracks-cJp16tjKAWk">Photo by Ryan M on Unsplash</a>`;
        population = `874,579`;
    } else if (cityID === "4574324") { // Charleston, US
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-bridge-during-daytime-p9vBVq_-nXY">Photo by David Martin</a>`;
        population = `150,227`;
    } else if (cityID === "4160021") { // Jacksonville, US
        credit = `<a href="https://www.pexels.com/photo/elevated-road-in-jacksonville-20708697/">Photo by Kelly</a>`;
        population = `949,611`;
    } else if (cityID === "5809844") { // Seattle, US
        credit = `<a href="https://www.pexels.com/photo/photo-of-seattle-skyline-2539374/">Photo by Sergei A</a>`;
        population = `737,015`;
    } else if (cityID === "5746545") { // Portland, US
        credit = `<a href="https://unsplash.com/photos/city-skyline-near-body-of-water-during-daytime-UVG1K4ejdB8">Photo by Meggyn Pomerleau</a>`;
        population = `652,503`;
    } else if (cityID === "4180439") { // Atlanta, US
        credit = `<a href="https://unsplash.com/photos/grey-high-rise-building-during-daytime-sR1Kz2auNJE">Photo by Brad Huchteman on Unsplash</a>`;
        population = `498,715`;
    } else if (cityID === "4684888") { // Dallas, US
        credit = `<a href="https://www.pexels.com/photo/aerial-photo-of-city-under-white-clouds-280193/">Photo by Pixabay</a>`;
        population = `1,304,379`;
    } else if (cityID === "6183235") { // Winnipeg, CA
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-night-time-sM0q8DxTkWQ">Photo by Josh Lavallee on Unsplash</a>`;
        population = `749,607`;
    } else if (cityID === "6167865") { // Toronto, CA
        credit = `<a href="https://www.pexels.com/photo/panoramic-photography-of-cn-tower-614224/">Photo by Scott Webb</a>`;
        population = `2,794,356`;
    } else if (cityID === "5969782") { // Hamilton, CA
        credit = `<a href="https://unsplash.com/photos/white-wooden-fence-on-white-sand-beach-during-daytime-kZiVnkTx8Mw">Photo by Ahmed Abbas on Unsplash</a>`;
        population = `569,353`;
    } else if (cityID === "6058560") { // London, CA
        credit = `<a href="https://unsplash.com/photos/high-rise-buildings-under-blue-sky-during-daytime-g4I64IzqurI">Photo by Scott Webb on Unsplash</a>`;
        population = `422,324`;
    } else if (cityID === "6094817") { // Ottawa, CA
        credit = `<a href="https://www.pexels.com/photo/building-architecture-historical-tower-7328/">Photo by Splash of Rain</a>`;
        population = `1,017,449`;
    } else if (cityID === "6077243") { // Montreal, CA
        credit = `<a href="https://unsplash.com/photos/landscape-photography-of-skyscrapers-BG9oZ15a4Xk">Photo by Marc-Olivier Jodoin on Unsplash</a>`;
        population = `1,762,949`;
    } else if (cityID === "6325494") { // Québec, CA
        credit = `<a href="https://unsplash.com/photos/a-large-castle-like-building-with-a-clock-tower-39ILOETJ0iU">Photo by Dana Andreea Gheorghe on Unsplash</a>`;
        population = `549,459`;
    } else if (cityID === "5991055") { // Kenora, CA
        credit = `<a href="https://unsplash.com/photos/a-body-of-water-with-trees-and-a-sunset-in-the-background-bwPXhjcKFHM">Photo by Kieran Whitford on Unsplash</a>`;
        population = `14,967`;
    } else if (cityID === "5888001") { // Atikokan, CA
        credit = `<a href="https://www.pexels.com/photo/scenic-photo-of-lake-during-dawn-2958547/">Photo by Justin Anderson</a>`;
        population = `2,642`;
    } else if (cityID === "6173331") { // Vancouver, CA
        credit = `<a href="https://www.pexels.com/photo/scenic-view-of-bridge-during-dawn-2777056/">Photo by James Wheeler</a>`;
        population = `662,248`;
    } else if (cityID === "5921356") { // Chilliwack, CA
        credit = `<a href="https://www.pexels.com/photo/body-of-water-2463851/">Photo by kristen munk</a>`;
        population = `93,203`;
    } else if (cityID === "5989045") { // Kamloops, CA
        credit = `<a href="https://unsplash.com/photos/green-trees-near-lake-under-blue-sky-during-daytime-oz07J1XUIVs">Photo by Louis Paulin on Unsplash</a>`;
        population = `97,902`;
    } else if (cityID === "5990579") { // Kelowna, CA
        credit = `<a href="https://unsplash.com/photos/black-asphalt-road-under-blue-sky-during-daytime-yHhfYzH_o-o">Photo by Kate Joyce</a>`;
        population = `144,576`;
    } else if (cityID === "6113365") { // Prince George, CA
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-bridge-over-a-river-q6bicFBA-UM">Photo by Harsh Singh on Unsplash</a>`;
        population = `76,708`;
    } else if (cityID === "5946768") { // Edmonton, CA
        credit = `<a href="https://www.pexels.com/photo/the-walterdale-bridge-at-night-10584080/">Photo by Jimmy Liao</a>`;
        population = `1,010,899`;
    } else if (cityID === "5913490") { // Calgary, CA
        credit = `<a href="https://unsplash.com/photos/silhouette-of-high-rise-building-during-daytime-_ZBekGTBh-c">Photo by Kyler Nixon on Unsplash</a>`;
        population = `1,306,784`;
    } else if (cityID === "5892532") { // Banff, CA
        credit = `<a href="https://unsplash.com/photos/mountain-alp-under-cloudy-sky-Y_coTG5xEsE">Photo by Priscilla Du Preez 🇨🇦 on Unsplash</a>`;
        population = `8,305`;
    } else if (cityID === "5942798") { // Drumheller, CA
        credit = `<a href="https://unsplash.com/photos/a-scenic-view-of-the-badlands-of-the-badlands-7hAoRXIviX0">Photo by Cece Concepts on Unsplash</a>`;
        population = `7,909`;
    } else if (cityID === "6141256") { // Saskatoon, CA
        credit = `<a href="https://www.pexels.com/photo/building-photography-2609257/">Photo by Sarath SunilDutt from Pexels</a>`;
        population = `266,141`;
    } else if (cityID === "6119109") { // Regina, CA
        credit = `<a href="https://unsplash.com/photos/bare-trees-on-snow-covered-ground-during-daytime-MoQRO-fjoVE">Photo by ILLIYEEN on Unsplash</a>`;
        population = `226,404`;
    } else if (cityID === "6160603") { // Swift Current, CA
        credit = `<a href="https://unsplash.com/photos/orange-leafed-trees-Inu37-bjO2I">Photo by Erik Mclean on Unsplash</a>`;
        population = `16,750`;
    } else if (cityID === "4180439") { // Yellowknife, CA
        credit = `<a href="https://unsplash.com/photos/silhouette-of-trees-under-green-aurora-kRB26utONtw">Photo by HyunKuk Kim on Unsplash</a>`;
        population = `20,340`;
    } else if (cityID === "3530597") { // Mexico City, MX
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-from-the-top-of-a-hill-8A4E8bGLUqY">Photo by Anton Lukin on Unsplash</a>`;
        population = `9,209,944`;
    } else if (cityID === "3521081") { // Puebla City, MX
        credit = `<a href="https://unsplash.com/photos/a-row-of-parked-cars-on-a-city-street-nIupUN8dcb0">Photo by Vibe Adventures on Unsplash</a>`;
        population = `1,692,181`;
    } else if (cityID === "4180439") { // Monterrey, MX
        credit = `<a href="https://unsplash.com/photos/birds-eye-view-of-mountain-under-cloudy-sky-vtvwNNjYBz4">Photo by Jorge G. Balleza on Unsplash</a>`;
        population = `1,142,952`;
    } else if (cityID === "3515302") { // Toluca, MX
        credit = `<a href="https://unsplash.com/photos/silhouette-of-mountain-YVSDD8ndlP8">Photo by Diego PH on Unsplash</a>`;
        population = `223,876`;
    } else if (cityID === "3582677") { // Belize City, BZ
        credit = `<a href="https://unsplash.com/photos/gray-concrete-building-near-green-grass-field-under-white-clouds-during-daytime-iQR6ciADh8s">Photo by Alisa Matthews on Unsplash</a>`;
        population = `61,461`;
    } else if (cityID === "3583361") { // San Salvador, SV
        credit = `<a href="https://unsplash.com/photos/a-sunset-view-of-a-city-with-a-mountain-in-the-background-cCXoS9uAKbc">Photo by Oswaldo Martinez on Unsplash</a>`;
        population = `525,990`;
    } else if (cityID === "3590979") { // Quetzaltenango, GT
        credit = `<a href="https://unsplash.com/photos/city-with-high-rise-buildings-under-blue-sky-during-daytime-nB9t42uAI6Y">Photo by Antonio Lopez on Unsplash</a>`;
        population = `180,706`;
    } else if (cityID === "3600949") { // Tegucigalpa, HN
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-with-mountains-in-the-background--oOvoeyUwowo">Photo by Héctor Emilio Gonzalez on Unsplash</a>`;
        population = `1,326,460`;
    } else if (cityID === "3601783") { // San Pedro Sula, HN
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-city-intersection-with-cars-kvSOLfp56uo">Photo by Oswaldo Martinez on Unsplash</a>`;
        population = `834,883`;
    } else if (cityID === "3617763") { // Managua, NI
        credit = `<a href="https://unsplash.com/photos/a-rocky-beach-with-a-mountain-range-in-the-background-6fnHYoZa7io">Photo by Gabriella Trejoss on Unsplash</a>`;
        population = `1,061,054`;
    } else if (cityID === "3621849") { // San José, CR
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-at-night-with-the-moon-in-the-sky-GA0OGHrNDHg">Photo by César Badilla Miranda on Unsplash</a>`;
        population = `352,381`;
    } else if (cityID === "3703443") { // Panama City, PA
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-large-city-with-tall-buildings-YsHVc8NlxJw">Photo by Keiron Crasktellanos on Unsplash</a>`;
        population = `1,086,990`;
    } else if (cityID === "3688689") { // Bogota, CO
        credit = `<a href="https://unsplash.com/photos/buildings-near-mountain-GkacI-_mGlg">Photo by Random Institute on Unsplash</a>`;
        population = `8,034,649`;
    } else if (cityID === "3451190") { // Rio de Janeiro, BR
        credit = `<a href="https://www.pexels.com/photo/crowd-of-tourists-on-the-arpoador-beach-in-rio-de-janeiro-24039565/">Photo by Kelly</a>`;
        population = `6,211,223`;
    } else if (cityID === "3448439") { // São Paulo, BR
        credit = `<a href="https://unsplash.com/photos/cityscape-during-daytime-uth095lCHdM">Photo by Wylkon Cardoso on Unsplash</a>`;
        population = `11,451,999`;
    } else if (cityID === "3871336") { // Santiago, CL
        credit = `<a href="https://unsplash.com/photos/a-park-with-a-lot-of-tall-buildings-in-the-background-WwBVfh1eyq8">Photo by Daniel Prado on Unsplash</a>`;
        population = `6,269,384`;
    } else if (cityID === "1609350") { // Bangkok, TH
        credit = `<a href="https://www.pexels.com/photo/an-aerial-shot-of-a-city-at-night-7702640/">Photo by Eyal Sberro</a>`;
        population = `8,305,218`;
    } else if (cityID === "1791247") { // Wuhan, CN
        credit = `<a href="https://unsplash.com/photos/city-during-night-XVaZU6DNOJ0">Photo by Benjamin Chris on Unsplash</a>`;
        population = `13,739,000`;
    } else if (cityID === "1850147") { // Tokyo, JP
        credit = `<a href="https://www.pexels.com/photo/people-walking-on-street-near-buildings-2339009/">Photo by Aleksandar Pasaric</a>`;
        population = `14,094,034`;
    } else if (cityID === "1668341") { // Taipei, TW
        credit = `<a href="https://www.pexels.com/photo/panoramic-view-of-taipei-taiwan-15586112/">Photo by Jimmy Liao</a>`;
        population = `2,494,813`;
    } else if (cityID === "2147714") { // Sydney, AU
        credit = `<a href="https://www.pexels.com/photo/white-sydney-opera-house-2193300/">Photo by Rijan Hamidovic</a>`;
        population = `5,450,496`;
    } else if (cityID === "2158177") { // Melbourne, AU
        credit = `<a href="https://www.pexels.com/photo/lighted-bridge-over-river-in-the-city-during-night-time-3809777/">Photo by Mitchell Luo</a>`;
        population = `5,207,145`;
    } else if (cityID === "2179537") { // Wellington, NZ
        credit = `<a href="https://www.pexels.com/photo/wellington-cityscape-at-dusk-4350631/">Photo by Lucas W</a>`;
        population = `215,200`;
    } else if (cityID === "1791247") { // Oslo, NO
        credit = `<a href="https://www.pexels.com/photo/bridge-over-aker-river-near-buildings-5683079/">Photo by Boris K.</a>`;
        population = `709,037`;
    } else if (cityID === "3161733") { // Bergen, NO
        credit = `<a href="https://www.pexels.com/photo/harbor-of-bergen-13110085/">Photo by Nørsky Nørdwind</a>`;
        population = `291,940`;
    } else if (cityID === "2673730") { // Stockholm, SE
        credit = `<a href="https://unsplash.com/photos/scenery-of-a-body-of-water-beside-a-city-jxfe3orC4G8">Photo by Jon Flobrant on Unsplash</a>`;
        population = `984,748`;
    } else if (cityID === "2666199") { // Uppsala, SE
        credit = `<a href="https://unsplash.com/photos/black-and-white-concrete-building-2PxpNkO-DtU">Photo by Shubhesh Aggarwal on Unsplash</a>`;
        population = `177,074`;
    } else if (cityID === "2711537") { // Göteborg (Gothenburg), SE
        credit = `<a href="https://unsplash.com/photos/river-surrounded-by-concrete-buildings-during-daytime-20qv9cTILhU">Photo by Jonas Jacobsson on Unsplash</a>`;
        population = `604,616`;
    } else if (cityID === "643492") { // Oulu, FI
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-city-4KvkBzx0Ba8">Photo by Janne Leimola on Unsplash</a>`;
        population = `214,633`;
    } else if (cityID === "658225") { // Helsinki, FI
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-street-at-night-covered-with-snow-w6KSwwnQyaE">Photo by Alexandr Bormotin on Unsplash</a>`;
        population = `674,500`;
    } else if (cityID === "660158") { // Espoo, FI
        credit = `<a href="https://unsplash.com/photos/super-highway-during-golden-hour-jmvzOHl_w7g">Photo by Julius Jansson on Unsplash</a>`;
        population = `314,024`;
    } else if (cityID === "633679") { // Turku, FI
        credit = `<a href="https://unsplash.com/photos/a-river-running-through-a-city-with-a-clock-tower-in-the-background-OjRlFFuynik">Photo by Jamo Images on Unsplash</a>`;
        population = `201,863`;
    } else if (cityID === "634963") { // Tampere, FI
        credit = `<a href="https://unsplash.com/photos/white-and-red-boat-on-water-near-building-during-daytime-oXEfEJ-hE7Q">Photo by Sini Tiainen on Unsplash</a>`;
        population = `255,050`;
    } else if (cityID === "646005") { // Mikkeli, FI
        credit = `<a href="https://unsplash.com/photos/green-trees-near-body-of-water-rGiL6cLnK8I">Photo by Lauri Sievinen on Unsplash</a>`;
        population = `51,919`;
    } else if (cityID === "588409") { // Tallinn, EE
        credit = `<a href="https://unsplash.com/photos/brown-and-white-concrete-houses-under-gray-sky-gCTXpJCP3yI">Photo by Andres Garcia on Unsplash</a>`;
        population = `453,864`;
    } else if (cityID === "588335") { // Tartu, EE
        credit = `<a href="https://unsplash.com/photos/there-is-a-sign-that-says-tartuga-in-a-town-square-CDA0NYntMPM">Photo by Marek Lumi on Unsplash</a>`;
        population = `97,435`;
    } else if (cityID === "456172") { // Riga, LV
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-city-under-cloudy-sky-jFqUJacYIsw">Photo by Gilly on Unsplash</a>`;
        population = `605,273`;
    } else if (cityID === "460413") { // Daugavpils, LV
        credit = `<a href="https://unsplash.com/photos/a-sunset-view-of-a-city-with-a-mountain-in-the-background-cCXoS9uAKbc">Photo by Oswaldo Martinez on Unsplash</a>`;
        population = `77,799`;
    } else if (cityID === "2618425") { // Copenhagen, DE
        credit = `<a href="https://www.pexels.com/photo/photo-of-boats-during-daytime-3117216/">Photo by Daniel Jurin</a>`;
        population = `660,842`;
    } else if (cityID === "2950159") { // Berlin, DE
        credit = `<a href="https://unsplash.com/photos/time-lapse-photography-of-vehicle-at-the-road-in-between-the-building-at-nighttime-aerial-photography-iPOZf3tQfHA">Photo by Stephan Widua on Unsplash</a>`;
        population = `3,878,100`;
    } else if (cityID === "3413829") { // Reykjavik, IS
        credit = `<a href="https://www.pexels.com/photo/reykjavik-cityscape-with-expressionist-neo-gothic-style-hallgrimskirkja-church-20165201/">Photo by Jón T Jónsson</a>`;
        population = `139,875`;
    } else if (cityID === "2625252") { // Vik, IS
        credit = `<a href="https://unsplash.com/photos/a-mountain-range-with-a-body-of-water-in-the-foreground-Ou-KEC_yxXo">Photo by Henrique Ferreira on Unsplash</a>`;
        population = `318`;
    } else if (cityID === "3413604") { // Selfoss, IS
        credit = `<a href="https://unsplash.com/photos/a-waterfall-with-a-large-amount-of-water-coming-out-of-it-MCK9BjMCed0">Photo by Luca Florio on Unsplash</a>`;
        population = `9,683`;
    } else if (cityID === "2633274") { // Akureyri, IS
        credit = `<a href="https://unsplash.com/photos/field-and-mountain-near-body-of-water-meOFNlRbHmY">Photo by Josh Reid on Unsplash</a>`;
        population = `19,219`;
    } else if (cityID === "292223") { // Dubai, AE
        credit = `<a href="https://www.pexels.com/photo/timelapse-cityscape-photography-during-night-time-599982/">Photo by Kostiantyn Stupak</a>`;
        population = `3,604,030`;
    } else if (cityID === "3117735") { // Madrid, ES
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-vehicles-passing-between-high-rise-buildings-WBGjg0DsO_g">Photo by Florian Wehde on Unsplash</a>`;
        population = `3,223,334`;
    } else if (cityID === "2797656") { // Ghent, BE
        credit = `<a href="https://www.pexels.com/photo/traditional-tenements-in-sunlight-in-ghent-12914496/">Photo by Siena Ramsey</a>`;
        population = `265,086`;
    } else if (cityID === "2800866") { // Brussels, BE
        credit = `<a href="https://pixabay.com/photos/belgium-brussels-architecture-3599416/">Image by Dimitris Vetsikas from Pixabay</a>`;
        population = `1,249,597`;
    } else if (cityID === "2925533") { // Frankfurt am Main, DE
        credit = `<a href="https://www.pexels.com/photo/city-portrait-2106452/">Photo by juv</a>`;
        population = `773,068`;
    } else if (cityID === "2910831") { // Hanover (Hannover), DR
        credit = `<a href="https://www.pexels.com/photo/new-town-hall-in-hanover-germany-17360696/">Photo by Daniel Lengies</a>`;
        population = `545,045`;
    } else if (cityID === "2775220") { // Innsbruck, AT
        credit = `<a href="https://www.pexels.com/photo/colorful-buildings-in-innsbruck-in-austria-19059264/">Photo by Larissa Farber</a>`;
        population = `132,493`;
    } else if (cityID === "2659994") { // Lausanne, CH
        credit = `<a href="https://unsplash.com/photos/valletta-next-to-a-body-of-water-WyexUIm5IkQ">Photo by SnapSaga on Unsplash</a>`;
        population = `139,111`;
    } else if (cityID === "3172394") { // Naples, IT
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-city-buildings-jPRFJ54o6M8">Photo by Montse Monmo on Unsplash</a>`;
        population = `909,048`;
    } else if (cityID === "3165524") { // Turin, IT
        credit = `<a href="https://pixabay.com/photos/turin-italy-architecture-monuments-3668082/">Image by teojab from Pixabay</a>`;
        population = `846,916`;
    } else if (cityID === "650946") { // Kotka, FI
        credit = `<a href="https://unsplash.com/photos/gray-concrete-building-ZQL7foP1qaA">Photo by Tapio Haaja on Unsplash</a>`;
        population = `50,500`;
    } else if (cityID === "648090") { // Lieksa, FI
        credit = `<a href="https://pixabay.com/photos/lieksa-finland-summer-2366842/">Image by Lucinda from Pixabay</a>`;
        population = `10,228`;
    } else if (cityID === "756135") { // Warsaw, PL
        credit = `<a href="hhttps://unsplash.com/photos/high-rise-buildings-during-night-time-xcPw1-5OHTk">Photo by Kamil Gliwiński on Unsplash</a>`;
        population = `1,863,056`;
    } else if (cityID === "2750053") { // Nijmegen, NL
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-near-body-of-water-during-daytime-tXK33aOVJUo">Photo by Richard Brunsveld on Unsplash</a>`;
        population = `177,359`;
    } else if (cityID === "2755003") { // Haarlem, NL
        credit = `<a href="https://unsplash.com/photos/people-walking-on-sidewalk-near-building-during-daytime-GD2oZlLbR0I">Photo by Marc Kleen on Unsplash</a>`;
        population = `162,543`;
    } else if (cityID === "5604045") { // Pocatello, US
        credit = `<a href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-Hp5eU3mcxsg">Photo by Mitchell Kmetz on Unsplash</a>`;
        population = `56,320`;
    } else if (cityID === "3553478") { // Havana, CU
        credit = `<a href="https://unsplash.com/photos/top-view-of-buildings-under-cloudy-sky-ejIi27O6qlI">Photo by JF Martin on Unsplash</a>`;
        population = `1,814,207`;
    } else if (cityID === "4174757") { // Tampa, US
        credit = `<a href="https://unsplash.com/photos/buildings-near-body-of-water-VHFBDTwiIy4">Photo by Kody Cheyne on Unsplash</a>`;
        population = `384,959`;
    } else if (cityID === "5959974") { // Gatineau, CA
        credit = `<a href="https://pixabay.com/photos/bench-bridge-structure-metal-steel-5709659/">Image by Gabriel Macias from Pixabay</a>`;
        population = `291,041`;
    } else if (cityID === "2641455") { // Norfolk, GB
        credit = `<a href="https://www.pexels.com/photo/cityscape-of-norwich-with-view-of-the-cathedral-norfolk-england-26609585/">Photo by Manousos Kampanellis from Pexels</a>`;
        population = `925,299`;
    } else if (cityID === "5947866") { // Elliot Lake, CA
        credit = `<a href="https://unsplash.com/photos/a-bridge-over-a-body-of-water-next-to-a-forest--Zg0B6JnVBg">Photo by David Fimio on Unsplash</a>`;
        population = `11,372`;
    } else {
        credit = "Error: Image credit not found";
        population = "Error: Population not found";
    }

    document.getElementById("credit").innerHTML = credit;
    document.getElementById("population").innerHTML = population;
}
