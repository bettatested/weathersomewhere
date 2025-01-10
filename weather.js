// AI Disclosure: I used ChatGPT to help troubleshoot some syntax errors.

let cityID;
let credit;
let population;
let cityName;
let latitude;
let longitude;

document.addEventListener('DOMContentLoaded', () => {
    getCityID();
    getLocationData();
    getData();
    
});

async function getCityID() { // Here I am adding location IDs
    const cities = [
        "1", // London, GB
        "2", // Dublin, IE
        "3", // Paris, FR
        "4", // Toulouse, FR
        "5", // Lyon, FR
        "6", // Laon, FR
        "7", // Bern, CH
        "8", // Geneva, CH
        "9", // Rome, IT
        "10", // Milan, IT
        "11", // Genoa, IT
        "12", // Alessandria, IT
        "13", // Vienna, AT
        "14", // Doha, QA
        "15", // Budapest, HU
        "16", // Lagos, NG
        "17", // Mumbai, IN
        "18", // New York, US
        "19", // Anchorage, US
        "20", // Fairbanks, US
        "21", // Las Vegas, US
        "22", // Albuquerque, US
        "23", // Denver, US
        "24", // San Francisco, US
        "25", // Chicago, US
        "26", // Milwaukee, US
        "27", // Detroit, US
        "28", // Minneapolis, US
        "29", // Grand Marais, US
        "30", // Silver Bay, US
        "31", // Two Harbors, US
        "32", // Superior, US
        "33", // Houghton, US
        "34", // Kansas City, US
        "35", // Oklahoma City, US
        "36", // St. Louis, US
        "37", // Indianapolis, US
        "38", // Cincinnati, US
        "39", // Columbus, US
        "40", // Pittsburgh, US
        "41", // Philadelphia, US
        "42", // Boston, US
        "43", // Hartford, US
        "44", // Richmond, US
        "45", // Charlotte, US
        "46", // Charleston, US
        "47", // Jacksonville, US
        "48", // Seattle, US
        "49", // Portland, US
        "50", // Atlanta, US
        "51", // Dallas, US
        "52", // Winnipeg, CA
        "53", // Toronto, CA
        "54", // Hamilton, CA
        "55", // London, CA
        "56", // Ottawa, CA
        "57", // Montreal, CA
        "58", // Québec, CA
        "59", // Kenora, CA
        "60", // Atikokan, CA
        "61", // Vancouver, CA
        "62", // Chilliwack, CA
        "63", // Kamloops, CA
        "64", // Kelowna, CA
        "65", // Prince George, CA
        "66", // Edmonton, CA
        "67", // Calgary, CA
        "68", // Banff, CA
        "69", // Drumheller, CA
        "70", // Saskatoon, CA
        "71", // Regina, CA
        "72", // Swift Current, CA
        "73", // Yellowknife, CA
        "74", // Mexico City, MX
        "75", // Puebla City, MX
        "76", // Monterrey, MX
        "77", // Toluca, MX
        "78", // Belize City, BZ
        "79", // San Salvador, SV
        "80", // Quetzaltenango, GT
        "81", // Tegucigalpa, HN
        "82", // San Pedro Sula, HN
        "83", // Managua, NI
        "84", // San José, CR
        "85", // Panama City, PA
        "86", // Bogota, CO
        "87", // Rio de Janeiro, BR
        "88", // São Paulo, BR
        "89", // Santiago, CL
        "90", // Bangkok, TH
        "91", // Wuhan, CN
        "92", // Tokyo, JP
        "93", // Taipei, TW
        "94", // Sydney, AU
        "95", // Melbourne, AU
        "96", // Wellington, NZ
        "97", // Auckland, NZ
        "98", // Oslo, NO
        "99", // Bergen, NO
        "100", // Stockholm, SE
        "101", // Uppsala, SE
        "102", // Göteborg (Gothenburg), SE
        "103", // Oulu, FI
        "104", // Helsinki, FI
        "105", // Espoo, FI
        "106", // Turku, FI
        "107", // Tampere, FI
        "108", // Mikkeli, FI
        "109", // Tallinn, EE
        "110", // Tartu, EE
        "111", // Riga, LV
        "112", // Daugavpils, LV
        "113", // Copenhagen, DK
        "114", // Berlin, DE
        "115", // Reykjavik, IS
        "116", // Vik, IS
        "117", // Selfoss, IS
        "118", // Akureyri, IS
        "119", // Dubai, AE
        "120", // Madrid, ES
        "121", // Ghent, BE
        "122", // Brussels, BE
        "123", // Frankfurt am Main, DE
        "124", // Hanover (Hannover), DE
        "125", // Innsbruck, AT
        "126", // Lausanne, CH
        "127", // Naples, IT
        "128", // Turin, IT
        "129", // Kotka, FI
        "130", // Lieksa, FI
        "131", // Warsaw, PL
        "132", // Nijmegen, NL
        "133", // Haarlem, NL
        "134", // Pocatello, US
        "135", // Havana, CU
        "136", // Tampa, US
        "137", // Gatineau, CA
        "138", // Norfolk, GB
        "139", // Elliot Lake, CA

    ];
    cityID = cities[Math.floor(Math.random() * cities.length)]; // This generates a random location from the list
};
async function getData() {

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1`);
        document.body.style.backgroundImage = `url('./images/${cityID}.jpeg')`; // This sets the background image based on the location
        if (!response.ok) {
            throw new Error('Location not found or request limit reached');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `Error: ${error.message}`;

    }
};

async function getLocationData() { // Loads name, image credit, population, latitude and longitude. Not the most efficient, but it works
    console.log("cityID:", cityID); // for debugging
    if (cityID === "1") { // London, GB
        cityName = `London, United Kingdom`;
        credit = `<a href="https://www.pexels.com/photo/city-view-at-london-672532/">Photo by Dominika Gregušová</a>`;
        population = `8,866,180`;
        latitude = `51.50`;
        longitude = `-0.12`;
    } else if (cityID === "2") { // Dublin, IE
        cityName = `Dublin, Ireland`;
        credit = `<a href="https://unsplash.com/photos/a-path-in-a-park-with-lots-of-trees-aNa2d96Jf_k">Photo by Valerie on Unsplash</a>`;
        population = `592,713`;
        latitude = `53.349`;
        longitude = `-6.260`;
    } else if (cityID === "3") { // Paris, FR
        cityName = `Paris, France`;
        credit = `<a href="https://unsplash.com/photos/eiffel-tower-paris-france-nnzkZNYWHaU">Photo by Chris Karidis on Unsplash</a>`;
        population = `2,102,650`;
        latitude = `48.857`;
        longitude = `2.351`;
    } else if (cityID === "4") { // Toulouse, FR
        cityName = `Toulouse, France`;
        credit = `<a href="https://unsplash.com/photos/brown-concrete-statue-UUZ7Ft7Ssj4">Photo by DAT VO on Unsplash</a>`;
        population = `504,078`;
        latitude = `43.604`;
        longitude = `1.442`;
    } else if (cityID === "5") { // Lyon, FR
        cityName = `Lyon, France`;
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-city-9YR74pUJxnc">Photo by Julien Rocheblave on Unsplash</a>`;
        population = `522,250`;
        latitude = `45.764`;
        longitude = `4.835`;
    } else if (cityID === "6") { // Laon, FR
        cityName = `Laon, France`;
        credit = `<a href="https://unsplash.com/photos/white-and-brown-concrete-structure-during-day-hCh_PHIhoLI">Photo by Adrien Tutin on Unsplash</a>`;
        population = `24,021`;
        latitude = `49.564`;
        longitude = `3.619`;
    } else if (cityID === "7") { // Bern, CH
        cityName = `Bern, Switzerland`;
        credit = `<a href="https://www.pexels.com/photo/silver-vehicle-on-concrete-arch-bridge-1291766/">Photo by Matheus Guimarães</a>`;
        population = `133,883`;
        latitude = `46.947`
        longitude = `7.447`;
    } else if (cityID === "8") { // Geneva, CH
        cityName = `Geneva, Switzerland`;
        credit = `<a href="https://unsplash.com/photos/boat-on-water-AWjVCFcUIbY">Photo by visualsoflukas on Unsplash</a>`;
        population = `201,741`;
        latitude = `46.204`;
        longitude = `6.143`;
    } else if (cityID === "9") { // Rome, IT
        cityName = `Rome, Italy`;
        credit = `<a href="https://www.pexels.com/photo/colosseum-rome-italy-2064827/">Photo by Davi Pimentel</a>`;
        population = `4,342,212`;
        latitude = `41.921`;
        longitude = `12.713`;
    } else if (cityID === "10") { // Milan, IT
        cityName = `Milan, Italy`;
        credit = `<a href="https://unsplash.com/photos/a-river-running-through-a-city-next-to-tall-buildings-LUbSoMLJGyI">Photo by mathieu gauzy on Unsplash</a>`;
        population = `4,336,121`;
        latitude = `45.458`;
        longitude = `9.181`;
    } else if (cityID === "11") { // Genoa, IT
        cityName = `Genoa, Italy`;
        credit = `<a href="https://unsplash.com/photos/white-and-pink-concrete-buildings-during-daytime-FEzvd2O3C2Y">Photo by Jessie Brown on Unsplash</a>`;
        population = `580,097`;
        latitude = `44.407`;
        longitude = `8.934`;
    } else if (cityID === "12") { // Alessandria, IT
        cityName = `Alessandria, Italy`;
        credit = `<a href="https://unsplash.com/photos/a-bridge-over-a-river-lnw2lsj2GB0">Photo by Aho on Unsplash</a>`;
        population = `92,104`;
        latitude = `44.90`;
        longitude = `8.704`;
    } else if (cityID === "13") { // Vienna, AT
        cityName = `Vienna, Austria`;
        credit = `<a href="https://www.pexels.com/photo/skyline-of-donau-city-vienna-austria-19140965/">Photo by Maximilian Jähnichen</a>`;
        population = `2,890,577`;
        latitude = `48.20`;
        longitude = `16.371`;
    } else if (cityID === "14") { // Doha, QA
        cityName = `Doha, Qatar`;
        credit = `<a href="https://unsplash.com/photos/a-city-skyline-at-night-5jvAmqV4W-c">Photo by Hongbin on Unsplash</a>`;
        population = `1,186,023`;
        latitude = `25.28`;
        longitude = `51.531`;
    } else if (cityID === "15") { // Budapest, HU
        cityName = `Budapest, Hungary`;
        credit = `<a href="https://www.pexels.com/photo/town-near-river-during-night-time-774856/">Photo by Amir H. Bakhtiari</a>`;
        population = `1,685,342`;
        latitude = `47.497`;
        longitude = `19.040`;
    } else if (cityID === "16") { // Lagos, NG
        cityName = `Lagos, Nigeria`;
        credit = `<a href="https://www.pexels.com/photo/aerial-view-of-the-carter-bridge-connecting-lagos-island-to-the-mainland-22681398/">Photo by Ben Iwara</a>`;
        population = `8,048,430`;
        latitude = `6.524`;
        longitude = `3.379`;
    } else if (cityID === "17") { // Mumbai, IN
        cityName = `Mumbai, India`;
        credit = `<a href="https://www.pexels.com/photo/low-angle-shot-of-the-gateway-of-india-10587328/">Photo by Thé Aditya Jadhav</a>`;
        population = `12,442,373`;
        latitude = `19.075`;
        longitude = `72.877`;
    } else if (cityID === "18") { // New York, US
        cityName = `New York, United States`;
        credit = `<a href="https://www.pexels.com/photo/the-world-trade-center-new-york-1058278/">Photo by Marcus Herzberg</a>`;
        population = `8,804,190`;
        latitude = `40.712`;
        longitude = `-74.005`;
    } else if (cityID === "19") { // Anchorage, US
        cityName = `Anchorage, United States`;
        credit = `<a href="https://www.pexels.com/photo/green-trees-near-lake-4027720/">Photo by Sara Loeffler</a>`;
        population = `32,515`;
        latitude = `61.217`;
        longitude = `-149.899`;
    } else if (cityID === "20") { // Fairbanks, US
        cityName = `Fairbanks, United States`;
        credit = `<a href="https://unsplash.com/photos/green-trees-beside-lake-under-blue-sky-during-daytime-F3vX4TL4qYo">Photo by James Pack on Unsplash</a>`;
        population = `1,234,567`;
        latitude = `60.840`;
        longitude = `-147.719`;
    } else if (cityID === "21") { // Las Vegas, US
        cityName = `Las Vegas, United States`;
        credit = `<a href="https://www.pexels.com/photo/view-of-metropolitan-area-at-night-2540653/">Photo by Dave Morgan</a>`;
        population = `641,903`;
        latitude = `36.171`;
        longitude = `-115.139`;
    } else if (cityID === "22") { // Albuquerque, US
        cityName = `Albuquerque, United States`;
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-during-daytime-a1Mrycbix-w">Photo by Gabriel Griego on Unsplash</a>`;
        population = `564,559`;
        latitude = `35.084`;
        longitude = `-106.650`;
    } else if (cityID === "23") { // Denver, US
        cityName = `Denver, United States`;
        credit = `<a href="https://unsplash.com/photos/the-sun-is-setting-over-a-large-city-OVE2SA0TVJE">Photo by Nils Huenerfuerst on Unsplash</a>`;
        population = `715,522`;
        latitude = `39.379`;
        longitude = `-104.990`;
    } else if (cityID === "24") { // San Francisco, US
        cityName = `San Francisco, United States`;
        credit = `<a href="https://unsplash.com/photos/golden-gate-bridge-san-francisco-california-NrrwM3GMDcM">Photo by Peter Emery on Unsplash</a>`;
        population = `873,965`;
        latitude = `37.774`;
        longitude = `-122.419`;
    } else if (cityID === "25") { // Chicago, US
        cityName = `Chicago, United States`;
        credit = `<a href="https://www.pexels.com/photo/city-with-river-in-middle-during-cloudy-day-167200/">Photo by Grzegorz Zdanowski</a>`;
        population = `2,746,388`;
        latitude = `41.878`;
        longitude = `-87.629`;
    } else if (cityID === "26") { // Milwaukee, US
        cityName = `Milwaukee, United States`;
        credit = `<a href="https://www.pexels.com/photo/city-landscape-290144/">Photo by Pixabay</a>`;
        population = `577,222`;
        latitude = `43.038`;
        longitude = `-87.906`;
    } else if (cityID === "27") { // Detroit, US
        cityName = `Detroit, United States`;
        credit = `<a href="https://www.pexels.com/photo/cityscape-of-detroit-at-dusk-15020901/">Photo by Shan Nir</a>`;
        population = `639,111`;
        latitude = `42.331`;
        longitude = `-83.045`;
    } else if (cityID === "28") { // Minneapolis, US
        cityName = `Minneapolis, United States`;
        credit = `<a href="https://www.pexels.com/photo/aerial-photography-of-moving-cars-on-the-bridge-over-river-4320303/">Photo by Josh Hild</a>`;
        population = `429,954`;
        latitude = `47.977`;
        longitude = `-93.265`;
    } else if (cityID === "29") { // Grand Marais, US
        cityName = `Grand Marais, United States`;
        credit = `<a href="https://unsplash.com/photos/body-of-water-under-brown-sky-at-golden-hour-8ddNUbiWs8c">Photo by Andrew Ling on Unsplash</a>`;
        population = `1,337`;
        latitude = `47.750`;
        longitude = `-90.334`;
    } else if (cityID === "30") { // Silver Bay, US
        cityName = `Silver Bay, United States`;
        credit = `<a href="https://unsplash.com/photos/green-and-brown-mountain-beside-sea-during-daytime-brBsveD19cg">Photo by Brandon Cormier on Unsplash</a>`;
        population = `1,857`;
        latitude = `47.294`;
        longitude = `-90.334`;
    } else if (cityID === "31") { // Two Harbors, US
        cityName = `Two Harbors, United States`;
        credit = `<a href="https://unsplash.com/photos/waterfalls-near-green-trees-under-white-sky-during-daytime-ANJ2-RFYZFI">Photo by Cody Otto on Unsplash</a>`;
        population = `3,633`;
        latitude = `47.022`;
        longitude = `-91.670`;
    } else if (cityID === "32") { // Superior, US
        cityName = `Superior, United States`;
        credit = `<a href="https://www.pexels.com/photo/drone-shot-of-the-wisconsin-point-light-in-superior-on-wisconsin-point-in-douglas-county-wisconsin-19784150/">Photo by Bl∡ke</a>`;
        population = `26,751`;
        latitude = `46.720`;
        longitude = `-92.104`;
    } else if (cityID === "33") { // Houghton, US
        cityName = `Houghton, United States`;
        credit = `<a href="https://unsplash.com/photos/white-bridge-over-river-under-white-sky-during-daytime-wjyHa3GqOTI">Photo by Elijah Cobb on Unsplash</a>`;
        population = `8,386`;
        latitude = `47.121`;
        longitude = `-88.569`;
    } else if (cityID === "34") { // Kansas City, US
        cityName = `Kansas City, United States`;
        credit = `<a href="https://www.pexels.com/photo/city-skyline-under-blue-sky-5660080/">Photo by Giancarlo Rojas</a>`;
        population = `508,090`;
        latitude = `39.099`;
        longitude = `-94.578`;
    } else if (cityID === "35") { // Oklahoma City, US
        cityName = `Oklahoma City, United States`;
        credit = `<a href="https://unsplash.com/photos/eagle-eye-view-time-lapse-city-and-streets-OSNZjXCF5VE">Photo by Gerson Repreza on Unsplash</a>`;
        population = `681,054`;
        latitude = `35.067`;
        longitude = `-97.516`;
    } else if (cityID === "36") { // St. Louis, US
        cityName = `St. Louis, United States`;
        credit = `<a href="https://unsplash.com/photos/a-view-of-the-st-louis-skyline-from-across-the-st-louis-river-JSBFK4DR7qU">Photo by Kenny Nguyễn on Unsplash</a>`;
        population = `301,578`;
        latitude = `38.627`;
        longitude = `-90.199`;
    } else if (cityID === "37") { // Indianapolis, US
        cityName = `Indianapolis, United States`;
        credit = `<a href="https://www.pexels.com/photo/bird-s-eye-view-photography-of-lighted-city-3573383/">Photo by Josh Hild</a>`;
        population = `887,642`;
        latitude = `39.769`;
        longitude = `-86.158`;
    } else if (cityID === "38") { // Cincinnati, US
        cityName = `Cincinnati, United States`;
        credit = `<a href="https://www.pexels.com/photo/photo-of-lighted-buildings-near-river-2570704/">Photo by Dave Morgan</a>`;
        population = `309,317`;
        latitude = `39.103`;
        longitude = `-84.512`;
    } else if (cityID === "39") { // Columbus, US
        cityName = `Columbus, United States`;
        credit = `<a href="https://unsplash.com/photos/aerial-view-photo-of-city-buildings-during-nighttime-EEenrxFJDHE">Photo by Ellie Brown on Unsplash</a>`;
        population = `905,748`;
        latitude = `39.961`;
        longitude = `-82.998`;
    } else if (cityID === "40") { // Pittsburgh, US
        cityName = `Pittsburgh, United States`;
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-bridge-and-buildings-under-blue-sky-9HGqJq3vglc">Photo by Vidar Nordli-Mathisen on Unsplash</a>`;
        population = `302,971`;
        latitude = `40.440`;
        longitude = `-79.995`;
    } else if (cityID === "41") { // Philadelphia, US
        cityName = `Philadelphia, United States`;
        credit = `<a href="https://www.pexels.com/photo/contemporary-architecture-of-megapolis-with-skyscrapers-4642403/">Photo by Kelly</a>`;
        population = `1,603,797`;
        latitude = `39.952`;
        longitude = `-75.165`;
    } else if (cityID === "42") { // Boston, US
        cityName = `Boston, United States`;
        credit = `<a href="https://www.pexels.com/photo/aerial-view-of-city-buildings-5627116/">Photo by Andrés García</a>`;
        population = `675,647`;
        latitude = `42.360`;
        longitude = `-71.058`;
    } else if (cityID === "43") { // Hartford, US
        cityName = `Hartford, United States`;
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime-jeJWWrldemw">Photo by Balazs Busznyak on Unsplash</a>`;
        population = `121,054`;
        latitude = `41.765`;
        longitude = `-72.673`;
    } else if (cityID === "44") { // Richmond, US
        cityName = `Richmond, United States`;
        credit = `<a href="https://unsplash.com/photos/high-rise-building-during-sunset-WGXHrJ6DSEQ">Photo by Alexander Jawfox on Unsplash</a>`;
        population = `226,610`;
        latitude = `37.540`;
        longitude = `-77.436`;
    } else if (cityID === "45") { // Charlotte, US
        cityName = `Charlotte, United States`;
        credit = `<a href="https://unsplash.com/photos/a-train-yard-with-many-trains-on-the-tracks-cJp16tjKAWk">Photo by Ryan M on Unsplash</a>`;
        population = `874,579`;
        latitude = `35.227`;
        longitude = `-80.843`;
    } else if (cityID === "46") { // Charleston, US
        cityName = `Charleston, United States`;
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-bridge-during-daytime-p9vBVq_-nXY">Photo by David Martin</a>`;
        population = `150,227`;
        latitude = `32.783`;
        longitude = `-79.931`;
    } else if (cityID === "47") { // Jacksonville, US
        cityName = `Jacksonville, United States`;
        credit = `<a href="https://www.pexels.com/photo/elevated-road-in-jacksonville-20708697/">Photo by Kelly</a>`;
        population = `949,611`;
        latitude = `30.332`;
        longitude = `-81.655`;
    } else if (cityID === "48") { // Seattle, US
        cityName = `Seattle, United States`;
        credit = `<a href="https://www.pexels.com/photo/photo-of-seattle-skyline-2539374/">Photo by Sergei A</a>`;
        population = `737,015`;
        latitude = `47.606`;
        longitude = `-122.332`;
    } else if (cityID === "49") { // Portland, US
        cityName = `Portland, United States`;
        credit = `<a href="https://unsplash.com/photos/city-skyline-near-body-of-water-during-daytime-UVG1K4ejdB8">Photo by Meggyn Pomerleau</a>`;
        population = `652,503`;
        latitude = `45.515`;
        longitude = `-122.678`;
    } else if (cityID === "50") { // Atlanta, US
        cityName = `Atlanta, United States`;
        credit = `<a href="https://unsplash.com/photos/grey-high-rise-building-during-daytime-sR1Kz2auNJE">Photo by Brad Huchteman on Unsplash</a>`;
        population = `498,715`;
        latitude = `33.748`;
        longitude = `-84.387`;
    } else if (cityID === "51") { // Dallas, US
        cityName = `Dallas, United States`;
        credit = `<a href="https://www.pexels.com/photo/aerial-photo-of-city-under-white-clouds-280193/">Photo by Pixabay</a>`;
        population = `1,304,379`;
        latitude = `32.776`;
        longitude = `-96.796`;
    } else if (cityID === "52") { // Winnipeg, CA
        cityName = `Winnipeg, Canada`;
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-night-time-sM0q8DxTkWQ">Photo by Josh Lavallee on Unsplash</a>`;
        population = `749,607`;
        latitude = `49.895`;
        longitude = `-97.138`;
    } else if (cityID === "53") { // Toronto, CA
        cityName = `Toronto, Canada`;
        credit = `<a href="https://www.pexels.com/photo/panoramic-photography-of-cn-tower-614224/">Photo by Scott Webb</a>`;
        population = `2,794,356`;
        latitude = `43.653`;
        longitude = `-79.383`;
    } else if (cityID === "54") { // Hamilton, CA
        cityName = `Hamilton, Canada`;
        credit = `<a href="https://unsplash.com/photos/white-wooden-fence-on-white-sand-beach-during-daytime-kZiVnkTx8Mw">Photo by Ahmed Abbas on Unsplash</a>`;
        population = `569,353`;
        latitude = `43.255`;
        longitude = `-79.871`;
    } else if (cityID === "55") { // London, CA
        cityName = `London, Canada`;
        credit = `<a href="https://unsplash.com/photos/high-rise-buildings-under-blue-sky-during-daytime-g4I64IzqurI">Photo by Scott Webb on Unsplash</a>`;
        population = `422,324`;
        latitude = `42.984`;
        longitude = `-81.245`;
    } else if (cityID === "56") { // Ottawa, CA
        cityName = `Ottawa, Canada`;
        credit = `<a href="https://www.pexels.com/photo/building-architecture-historical-tower-7328/">Photo by Splash of Rain</a>`;
        population = `1,017,449`;
        latitude = `45.420`;
        longitude = `-75.701`;
    } else if (cityID === "57") { // Montreal, CA
        cityName = `Montreal, Canada`;
        credit = `<a href="https://unsplash.com/photos/landscape-photography-of-skyscrapers-BG9oZ15a4Xk">Photo by Marc-Olivier Jodoin on Unsplash</a>`;
        population = `1,762,949`;
        latitude = `45.501`;
        longitude = `-73.567`;
    } else if (cityID === "58") { // Québec, CA
        cityName = `Québec, Canada`;
        credit = `<a href="https://unsplash.com/photos/a-large-castle-like-building-with-a-clock-tower-39ILOETJ0iU">Photo by Dana Andreea Gheorghe on Unsplash</a>`;
        population = `549,459`;
        latitude = `46.813`;
        longitude = `-71.207`;
    } else if (cityID === "59") { // Kenora, CA
        cityName = `Kenora, Canada`;
        credit = `<a href="https://unsplash.com/photos/a-body-of-water-with-trees-and-a-sunset-in-the-background-bwPXhjcKFHM">Photo by Kieran Whitford on Unsplash</a>`;
        population = `14,967`;
        latitude = `49.767`;
        longitude = `-94.489`;
    } else if (cityID === "60") { // Atikokan, CA
        cityName = `Atikokan, Canada`;
        credit = `<a href="https://www.pexels.com/photo/scenic-photo-of-lake-during-dawn-2958547/">Photo by Justin Anderson</a>`;
        population = `2,642`;
        latitude = `48.757`;
        longitude = `-91.621`;
    } else if (cityID === "61") { // Vancouver, CA
        cityName = `Vancouver, Canada`;
        credit = `<a href="https://www.pexels.com/photo/scenic-view-of-bridge-during-dawn-2777056/">Photo by James Wheeler</a>`;
        population = `662,248`;
        latitude = `49.282`;
        longitude = `-123.120`;
    } else if (cityID === "62") { // Chilliwack, CA
        cityName = `Chilliwack, Canada`;
        credit = `<a href="https://www.pexels.com/photo/body-of-water-2463851/">Photo by kristen munk</a>`;
        population = `93,203`;
        latitude = `49.157`;
        longitude = `-121.951`;
    } else if (cityID === "63") { // Kamloops, CA
        cityName = `Kamloops, Canada`;
        credit = `<a href="https://unsplash.com/photos/green-trees-near-lake-under-blue-sky-during-daytime-oz07J1XUIVs">Photo by Louis Paulin on Unsplash</a>`;
        population = `97,902`;
        latitude = `50.674`;
        longitude = `-120.327`;
    } else if (cityID === "64") { // Kelowna, CA
        cityName = `Kelowna, Canada`;
        credit = `<a href="https://unsplash.com/photos/black-asphalt-road-under-blue-sky-during-daytime-yHhfYzH_o-o">Photo by Kate Joyce</a>`;
        population = `144,576`;
        latitude = `49.886`;
        longitude = `-119.496`;
    } else if (cityID === "65") { // Prince George, CA
        cityName = `Prince George, Canada`;
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-bridge-over-a-river-q6bicFBA-UM">Photo by Harsh Singh on Unsplash</a>`;
        population = `76,708`;
        latitude = `53.917`;
        longitude = `-122.749`;
    } else if (cityID === "66") { // Edmonton, CA
        cityName = `Edmonton, Canada`;
        credit = `<a href="https://www.pexels.com/photo/the-walterdale-bridge-at-night-10584080/">Photo by Jimmy Liao</a>`;
        population = `1,010,899`;
        latitude = `53.546`;
        longitude = `-113.493`;
    } else if (cityID === "67") { // Calgary, CA
        cityName = `Calgary, Canada`;
        credit = `<a href="https://unsplash.com/photos/silhouette-of-high-rise-building-during-daytime-_ZBekGTBh-c">Photo by Kyler Nixon on Unsplash</a>`;
        population = `1,306,784`;
        latitude = `51.044`;
        longitude = `-114.071`;
    } else if (cityID === "68") { // Banff, CA
        cityName = `Banff, Canada`;
        credit = `<a href="https://unsplash.com/photos/mountain-alp-under-cloudy-sky-Y_coTG5xEsE">Photo by Priscilla Du Preez 🇨🇦 on Unsplash</a>`;
        population = `8,305`;
        latitude = `51.178`;
        longitude = `-115.570`;
    } else if (cityID === "69") { // Drumheller, CA
        cityName = `Drumheller, Canada`;
        credit = `<a href="https://unsplash.com/photos/a-scenic-view-of-the-badlands-of-the-badlands-7hAoRXIviX0">Photo by Cece Concepts on Unsplash</a>`;
        population = `7,909`;
        latitude = `51.461`;
        longitude = `-112.710`;
    } else if (cityID === "70") { // Saskatoon, CA
        cityName = `Saskatoon, Canada`;
        credit = `<a href="https://www.pexels.com/photo/building-photography-2609257/">Photo by Sarath SunilDutt from Pexels</a>`;
        population = `266,141`;
        latitude = `52.157`;
        longitude = `-106.670`;
    } else if (cityID === "71") { // Regina, CA
        cityName = `Regina, Canada`;
        credit = `<a href="https://unsplash.com/photos/bare-trees-on-snow-covered-ground-during-daytime-MoQRO-fjoVE">Photo by ILLIYEEN on Unsplash</a>`;
        population = `226,404`;
        latitude = `50.445`;
        longitude = `-104.618`;
    } else if (cityID === "72") { // Swift Current, CA
        cityName = `Swift Current, Canada`;
        credit = `<a href="https://unsplash.com/photos/orange-leafed-trees-Inu37-bjO2I">Photo by Erik Mclean on Unsplash</a>`;
        population = `16,750`;
        latitude = `50.285`;
        longitude = `-107.797`;
    } else if (cityID === "73") { // Yellowknife, CA
        cityName = `Yellowknife, Canada`;
        credit = `<a href="https://unsplash.com/photos/silhouette-of-trees-under-green-aurora-kRB26utONtw">Photo by HyunKuk Kim on Unsplash</a>`;
        population = `20,340`;
        latitude = `62.453`;
        longitude = `-114.371`;
    } else if (cityID === "74") { // Mexico City, MX
        cityName = `Mexico City, Mexico`;
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-from-the-top-of-a-hill-8A4E8bGLUqY">Photo by Anton Lukin on Unsplash</a>`;
        population = `9,209,944`;
        latitude = `19.246`;
        longitude = `-99.101`;
    } else if (cityID === "75") { // Puebla City, MX
        cityName = `Puebla, Mexico`;
        credit = `<a href="https://unsplash.com/photos/a-row-of-parked-cars-on-a-city-street-nIupUN8dcb0">Photo by Vibe Adventures on Unsplash</a>`;
        population = `1,692,181`;
        latitude = `19.041`;
        longitude = `-98.206`;
    } else if (cityID === "76") { // Monterrey, MX
        cityName = `Monterrey, Mexico`;
        credit = `<a href="https://unsplash.com/photos/birds-eye-view-of-mountain-under-cloudy-sky-vtvwNNjYBz4">Photo by Jorge G. Balleza on Unsplash</a>`;
        population = `1,142,952`;
        latitude = `25.686`;
        longitude = `-100.316`;
    } else if (cityID === "77") { // Toluca, MX
        cityName = `Toluca, Mexico`;
        credit = `<a href="https://unsplash.com/photos/silhouette-of-mountain-YVSDD8ndlP8">Photo by Diego PH on Unsplash</a>`;
        population = `223,876`;
        latitude = `19.282`;
        longitude = `-99.655`;
    } else if (cityID === "78") { // Belize City, BZ
        cityName = `Belize City, Belize`;
        credit = `<a href="https://unsplash.com/photos/gray-concrete-building-near-green-grass-field-under-white-clouds-during-daytime-iQR6ciADh8s">Photo by Alisa Matthews on Unsplash</a>`;
        population = `61,461`;
        latitude = `17.504`;
        longitude = `-88.196`;
    } else if (cityID === "79") { // San Salvador, SV
        cityName = `San Salvador, El Salvador`;
        credit = `<a href="https://unsplash.com/photos/a-sunset-view-of-a-city-with-a-mountain-in-the-background-cCXoS9uAKbc">Photo by Oswaldo Martinez on Unsplash</a>`;
        population = `525,990`;
        latitude = `13.692`;
        longitude = `-89.218`;
    } else if (cityID === "80") { // Quetzaltenango, GT
        cityName = `Quetzaltenango, Guatemala`;
        credit = `<a href="https://unsplash.com/photos/city-with-high-rise-buildings-under-blue-sky-during-daytime-nB9t42uAI6Y">Photo by Antonio Lopez on Unsplash</a>`;
        population = `180,706`;
        latitude = `14.844`;
        longitude = `-91.523`;
    } else if (cityID === "81") { // Tegucigalpa, HN
        cityName = `Tegucigalpa, Honduras`;
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-with-mountains-in-the-background--oOvoeyUwowo">Photo by Héctor Emilio Gonzalez on Unsplash</a>`;
        population = `1,326,460`;
        latitude = `14.065`;
        longitude = `-87.171`;
    } else if (cityID === "82") { // San Pedro Sula, HN
        cityName = `San Pedro Sula, Honduras`;
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-city-intersection-with-cars-kvSOLfp56uo">Photo by Oswaldo Martinez on Unsplash</a>`;
        population = `834,883`;
        latitude = `15.503`;
        longitude = `-88.013`;
    } else if (cityID === "83") { // Managua, NI
        cityName = `Managua, Nicaragua`;
        credit = `<a href="https://unsplash.com/photos/a-rocky-beach-with-a-mountain-range-in-the-background-6fnHYoZa7io">Photo by Gabriella Trejoss on Unsplash</a>`;
        population = `1,061,054`;
        latitude = `12.114`;
        longitude = `-86.236`;
    } else if (cityID === "84") { // San José, CR
        cityName = `San José, Costa Rica`;
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-city-at-night-with-the-moon-in-the-sky-GA0OGHrNDHg">Photo by César Badilla Miranda on Unsplash</a>`;
        population = `352,381`;
        latitude = `9.928`;
        longitude = `-84.090`;
    } else if (cityID === "85") { // Panama City, PA
        cityName = `Panama City, Panama`;
        credit = `<a href="https://unsplash.com/photos/a-view-of-a-large-city-with-tall-buildings-YsHVc8NlxJw">Photo by Keiron Crasktellanos on Unsplash</a>`;
        population = `1,086,990`;
        latitude = `8.982`;
        longitude = `-79.519`;
    } else if (cityID === "86") { // Bogotá, CO
        cityName = `Bogotá, Columbia`;
        credit = `<a href="https://unsplash.com/photos/buildings-near-mountain-GkacI-_mGlg">Photo by Random Institute on Unsplash</a>`;
        population = `8,034,649`;
        latitude = `4.648`;
        longitude = `-74.104`;
    } else if (cityID === "87") { // Rio de Janeiro, BR
        cityName = `Rio de Janeiro, Brazil`;
        credit = `<a href="https://www.pexels.com/photo/crowd-of-tourists-on-the-arpoador-beach-in-rio-de-janeiro-24039565/">Photo by Kelly</a>`;
        population = `6,211,223`;
        latitude = `-22.906`;
        longitude = `-43.172`;
    } else if (cityID === "88") { // São Paulo, BR
        cityName = `São Paulo, Brazil`;
        credit = `<a href="https://unsplash.com/photos/cityscape-during-daytime-uth095lCHdM">Photo by Wylkon Cardoso on Unsplash</a>`;
        population = `11,451,999`;
        latitude = `-23.555`;
        longitude = `-46.639`;
    } else if (cityID === "89") { // Santiago, CL
        cityName = `Santiago, Chile`;
        credit = `<a href="https://unsplash.com/photos/a-park-with-a-lot-of-tall-buildings-in-the-background-WwBVfh1eyq8">Photo by Daniel Prado on Unsplash</a>`;
        population = `6,269,384`;
        latitude = `-33.448`;
        longitude = `-70.669`;
    } else if (cityID === "90") { // Bangkok, TH
        cityName = `Bangkok, Thailand`;
        credit = `<a href="https://www.pexels.com/photo/an-aerial-shot-of-a-city-at-night-7702640/">Photo by Eyal Sberro</a>`;
        population = `8,305,218`;
        latitude = `13.756`;
        longitude = `100.501`;
    } else if (cityID === "91") { // Wuhan, CN
        cityName = `Wuhan, China`;
        credit = `<a href="https://unsplash.com/photos/city-during-night-XVaZU6DNOJ0">Photo by Benjamin Chris on Unsplash</a>`;
        population = `13,739,000`;
        latitude = `30.592`;
        longitude = `114.305`;
    } else if (cityID === "92") { // Tokyo, JP
        cityName = `Tokyo, Japan`;
        credit = `<a href="https://www.pexels.com/photo/people-walking-on-street-near-buildings-2339009/">Photo by Aleksandar Pasaric</a>`;
        population = `14,094,034`;
        latitude = `35.676`;
        longitude = `139.650`;
    } else if (cityID === "93") { // Taipei, TW
        cityName = `Taipei, Taiwan`;
        credit = `<a href="https://www.pexels.com/photo/panoramic-view-of-taipei-taiwan-15586112/">Photo by Jimmy Liao</a>`;
        population = `2,494,813`;
        latitude = `25.032`;
        longitude = `121.565`;
    } else if (cityID === "94") { // Sydney, AU
        cityName = `Sydney, Australia`;
        credit = `<a href="https://www.pexels.com/photo/white-sydney-opera-house-2193300/">Photo by Rijan Hamidovic</a>`;
        population = `5,450,496`;
        latitude = `-33.868`;
        longitude = `151.209`;
    } else if (cityID === "95") { // Melbourne, AU
        cityName = `Melbourne, Australia`;
        credit = `<a href="https://www.pexels.com/photo/lighted-bridge-over-river-in-the-city-during-night-time-3809777/">Photo by Mitchell Luo</a>`;
        population = `5,207,145`;
        latitude = `-37.813`;
        longitude = `144.963`;
    } else if (cityID === "96") { // Wellington, NZ
        cityName = `Wellington, New Zealand`;
        credit = `<a href="https://www.pexels.com/photo/wellington-cityscape-at-dusk-4350631/">Photo by Lucas W</a>`;
        population = `215,200`;
        latitude = `-41.292`;
        longitude = `174.778`;
    } else if (cityID === "97") { // Auckland, NZ
        cityName = `Auckland, New Zealand`;
        credit = `<a href="https://www.pexels.com/photo/the-lightpath-in-the-middle-of-the-freeway-in-auckland-5342974/">Photo by Liam Spicer`
        population = `1,531,000`;
        latitude = `-36.850`;
        longitude = `174.764`;
 } else if (cityID === "98") { // Oslo, NO
        cityName = `Oslo, Norway`;
        credit = `<a href="https://www.pexels.com/photo/bridge-over-aker-river-near-buildings-5683079/">Photo by Boris K.</a>`;
        population = `709,037`;
        latitude = `59.913`;
        longitude = `10.752`;
    } else if (cityID === "99") { // Bergen, NO
        cityName = `Bergen, Norway`;
        credit = `<a href="https://www.pexels.com/photo/harbor-of-bergen-13110085/">Photo by Nørsky Nørdwind</a>`;
        population = `291,940`;
        latitude = `60.391`;
        longitude = `10.752`;
    } else if (cityID === "100") { // Stockholm, SE
        cityName = `Stockholm, Sweden`;
        credit = `<a href="https://unsplash.com/photos/scenery-of-a-body-of-water-beside-a-city-jxfe3orC4G8">Photo by Jon Flobrant on Unsplash</a>`;
        population = `984,748`;
        latitude = `59.329`;
        longitude = `18.068`;
    } else if (cityID === "101") { // Uppsala, SE
        cityName = `Uppsala, Sweden`;
        credit = `<a href="https://unsplash.com/photos/black-and-white-concrete-building-2PxpNkO-DtU">Photo by Shubhesh Aggarwal on Unsplash</a>`;
        population = `177,074`;
        latitude = `59.858`;
        longitude = `17.638`;
    } else if (cityID === "102") { // Göteborg (Gothenburg), SE
        cityName = `Göteborg, Sweden`;
        credit = `<a href="https://unsplash.com/photos/river-surrounded-by-concrete-buildings-during-daytime-20qv9cTILhU">Photo by Jonas Jacobsson on Unsplash</a>`;
        population = `604,616`;
        latitude = `57.708`;
        longitude = `11.974`;
    } else if (cityID === "103") { // Oulu, FI
        cityName = `Oulu, Finland`;
        credit = `<a href="https://unsplash.com/photos/an-aerial-view-of-a-city-4KvkBzx0Ba8">Photo by Janne Leimola on Unsplash</a>`;
        population = `214,633`;
        latitude = `65.012`;
        longitude = `25.465`;
    } else if (cityID === "104") { // Helsinki, FI
        cityName = `Helsinki, Finland`;
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-street-at-night-covered-with-snow-w6KSwwnQyaE">Photo by Alexandr Bormotin on Unsplash</a>`;
        population = `674,500`;
        latitude = `60.169`;
        longitude = `24.938`;
    } else if (cityID === "105") { // Espoo, FI
        cityName = `Espoo, Finland`;
        credit = `<a href="https://unsplash.com/photos/super-highway-during-golden-hour-jmvzOHl_w7g">Photo by Julius Jansson on Unsplash</a>`;
        population = `314,024`;
        latitude = `60.205`;
        longitude = `24.655`;
    } else if (cityID === "106") { // Turku, FI
        cityName = `Turku, Finland`;
        credit = `<a href="https://unsplash.com/photos/a-river-running-through-a-city-with-a-clock-tower-in-the-background-OjRlFFuynik">Photo by Jamo Images on Unsplash</a>`;
        population = `201,863`;
        latitude = `60.451`;
        longitude = `22.248`;
    } else if (cityID === "107") { // Tampere, FI
        cityName = `Tampere, Finland`;
        credit = `<a href="https://unsplash.com/photos/white-and-red-boat-on-water-near-building-during-daytime-oXEfEJ-hE7Q">Photo by Sini Tiainen on Unsplash</a>`;
        population = `255,050`;
        latitude = `61.497`;
        longitude = `23.752`;
    } else if (cityID === "108") { // Mikkeli, FI
        cityName = `Mikkeli, Finland`;
        credit = `<a href="https://unsplash.com/photos/green-trees-near-body-of-water-rGiL6cLnK8I">Photo by Lauri Sievinen on Unsplash</a>`;
        population = `51,919`;
        latitude = `61.688`;
        longitude = `27.272`;
    } else if (cityID === "109") { // Tallinn, EE
        cityName = `Tallinn, Estonia`;
        credit = `<a href="https://unsplash.com/photos/brown-and-white-concrete-houses-under-gray-sky-gCTXpJCP3yI">Photo by Andres Garcia on Unsplash</a>`;
        population = `453,864`;
        latitude = `59.436`;
        longitude = `24.753`;
    } else if (cityID === "110") { // Tartu, EE
        cityName = `Tartu, Estonia`;
        credit = `<a href="https://unsplash.com/photos/there-is-a-sign-that-says-tartuga-in-a-town-square-CDA0NYntMPM">Photo by Marek Lumi on Unsplash</a>`;
        population = `97,435`;
        latitude = `58.377`;
        longitude = `26.729`;
    } else if (cityID === "111") { // Riga, LV
        cityName = `Riga, Latvia`;
        credit = `<a href="https://unsplash.com/photos/aerial-photo-of-city-under-cloudy-sky-jFqUJacYIsw">Photo by Gilly on Unsplash</a>`;
        population = `605,273`;
        latitude = `56.967`;
        longitude = `24.105`;
    } else if (cityID === "112") { // Daugavpils, LV
        cityName = `Daugavpils, Latvia`;
        credit = `<a href="https://unsplash.com/photos/a-sunset-view-of-a-city-with-a-mountain-in-the-background-cCXoS9uAKbc">Photo by Oswaldo Martinez on Unsplash</a>`;
        population = `77,799`;
        latitude = `55.882`;
        longitude = `26.546`;
    } else if (cityID === "113") { // Copenhagen, DE
        cityName = `Copenhagen, Denmark`
        credit = `<a href="https://www.pexels.com/photo/photo-of-boats-during-daytime-3117216/">Photo by Daniel Jurin</a>`;
        population = `660,842`;
        latitude = `55.676`;
        longitude = `12.568`;
    } else if (cityID === "114") { // Berlin, DE
        cityName = `Berlin, Denmark`;
        credit = `<a href="https://unsplash.com/photos/time-lapse-photography-of-vehicle-at-the-road-in-between-the-building-at-nighttime-aerial-photography-iPOZf3tQfHA">Photo by Stephan Widua on Unsplash</a>`;
        population = `3,878,100`;
        latitude = `52.52`;
        longitude = `13.404`;
    } else if (cityID === "115") { // Reykjavik, IS
        cityName = `Reykjavik, Iceland`;
        credit = `<a href="https://www.pexels.com/photo/reykjavik-cityscape-with-expressionist-neo-gothic-style-hallgrimskirkja-church-20165201/">Photo by Jón T Jónsson</a>`;
        population = `139,875`;
        latitude = `64.146`;
        longitude = `-21.940`;
    } else if (cityID === "116") { // Vik, IS
        cityName = `Vik, Iceland`;
        credit = `<a href="https://unsplash.com/photos/a-mountain-range-with-a-body-of-water-in-the-foreground-Ou-KEC_yxXo">Photo by Henrique Ferreira on Unsplash</a>`;
        population = `318`;
        latitude = `63.417`;
        longitude = `-18.997`;
    } else if (cityID === "117") { // Selfoss, IS
        cityName = `Selfoss, Iceland`;
        credit = `<a href="https://unsplash.com/photos/a-waterfall-with-a-large-amount-of-water-coming-out-of-it-MCK9BjMCed0">Photo by Luca Florio on Unsplash</a>`;
        population = `9,683`;
        latitude = `63.931`;
        longitude = `-20.999`;
    } else if (cityID === "118") { // Akureyri, IS
        cityName = `Akureyri, Iceland`;
        credit = `<a href="https://unsplash.com/photos/field-and-mountain-near-body-of-water-meOFNlRbHmY">Photo by Josh Reid on Unsplash</a>`;
        population = `19,219`;
        latitude = `65.682`;
        longitude = `-18.090`;
    } else if (cityID === "119") { // Dubai, AE
        cityName = `Dubai, United Arab Emirates`;
        credit = `<a href="https://www.pexels.com/photo/timelapse-cityscape-photography-during-night-time-599982/">Photo by Kostiantyn Stupak</a>`;
        population = `3,604,030`;
        latitude = `25.204`;
        longitude = `55.270`;
    } else if (cityID === "120") { // Madrid, ES
        cityName = ` Madrid, Spain`;
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-vehicles-passing-between-high-rise-buildings-WBGjg0DsO_g">Photo by Florian Wehde on Unsplash</a>`;
        population = `3,223,334`;
        latitude = `40.416`;
        longitude = `-3.703`;
    } else if (cityID === "121") { // Ghent, BE
        cityName = `Ghent, Belgium`;
        credit = `<a href="https://www.pexels.com/photo/traditional-tenements-in-sunlight-in-ghent-12914496/">Photo by Siena Ramsey</a>`;
        population = `265,086`;
        latitude = `51.050`;
        longitude = `3.730`;
    } else if (cityID === "122") { // Brussels, BE
        cityName = `Brussels, Belgium`;
        credit = `<a href="https://pixabay.com/photos/belgium-brussels-architecture-3599416/">Image by Dimitris Vetsikas from Pixabay</a>`;
        population = `1,249,597`;
        latitude = `50.847`;
        longitude = `3.730`;
    } else if (cityID === "123") { // Frankfurt am Main, DE
        cityName = `Frankfurt am Main, Germany`;
        credit = `<a href="https://www.pexels.com/photo/city-portrait-2106452/">Photo by juv</a>`;
        population = `773,068`;
        latitude = `50.110`;
        longitude = `8.682`;
    } else if (cityID === "124") { // Hanover (Hannover), DE
        cityName = `Hannover, Germany`;
        credit = `<a href="https://www.pexels.com/photo/new-town-hall-in-hanover-germany-17360696/">Photo by Daniel Lengies</a>`;
        population = `545,045`;
        latitude = `52.375`;
        longitude = `9.732`;
    } else if (cityID === "125") { // Innsbruck, AT
        cityName = `Innsbruck, Austria`;
        credit = `<a href="https://www.pexels.com/photo/colorful-buildings-in-innsbruck-in-austria-19059264/">Photo by Larissa Farber</a>`;
        population = `132,493`;
        latitude = `47.267`;
        longitude = `11.391`;
    } else if (cityID === "126") { // Lausanne, CH
        cityName = `Lausanne, Switzerland`;
        credit = `<a href="https://unsplash.com/photos/valletta-next-to-a-body-of-water-WyexUIm5IkQ">Photo by SnapSaga on Unsplash</a>`;
        population = `139,111`;
        latitude = `46.519`;
        longitude = `6.632`;
    } else if (cityID === "127") { // Naples, IT
        cityName = `Naples, Italy`;
        credit = `<a href="https://unsplash.com/photos/aerial-photography-of-city-buildings-jPRFJ54o6M8">Photo by Montse Monmo on Unsplash</a>`;
        population = `909,048`;
        latitude = `40.901`;
        longitude = `14.332`;
    } else if (cityID === "128") { // Turin, IT
        cityName = `Turin, Italy`;
        credit = `<a href="https://pixabay.com/photos/turin-italy-architecture-monuments-3668082/">Image by teojab from Pixabay</a>`;
        population = `846,916`;
        latitude = `45.211`;
        longitude = `7.379`;
    } else if (cityID === "129") { // Kotka, FI
        cityName = `Kotka, Finland`;
        credit = `<a href="https://unsplash.com/photos/gray-concrete-building-ZQL7foP1qaA">Photo by Tapio Haaja on Unsplash</a>`;
        population = `50,500`;
        latitude = `60.466`;
        longitude = `26.945`;
    } else if (cityID === "130") { // Lieksa, FI
        cityName = `Lieksa, Finland`;
        credit = `<a href="https://pixabay.com/photos/lieksa-finland-summer-2366842/">Image by Lucinda from Pixabay</a>`;
        population = `10,228`;
        latitude = `63.318`;
        longitude = `30.026`;
    } else if (cityID === "131") { // Warsaw, PL
        cityName = `Warsaw, Poland`;
        credit = `<a href="https://unsplash.com/photos/high-rise-buildings-during-night-time-xcPw1-5OHTk">Photo by Kamil Gliwiński on Unsplash</a>`;
        population = `1,863,056`;
        latitude = `52.229`;
        longitude = `21.012`;
    } else if (cityID === "132") { // Nijmegen, NL
        cityName = `Nijmegen, Netherlands`;
        credit = `<a href="https://unsplash.com/photos/aerial-view-of-city-buildings-near-body-of-water-during-daytime-tXK33aOVJUo">Photo by Richard Brunsveld on Unsplash</a>`;
        population = `177,359`;
        latitude = `51.843`;
        longitude = `5.860`;
    } else if (cityID === "133") { // Haarlem, NL
        cityName = `Haarlem, Netherlands`;
        credit = `<a href="https://unsplash.com/photos/people-walking-on-sidewalk-near-building-during-daytime-GD2oZlLbR0I">Photo by Marc Kleen on Unsplash</a>`;
        population = `162,543`;
        latitude = `52.387`;
        longitude = `4.646`;
    } else if (cityID === "134") { // Pocatello, US
        cityName = `Pocatello, United States`;
        credit = `<a href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-Hp5eU3mcxsg">Photo by Mitchell Kmetz on Unsplash</a>`;
        population = `56,320`;
        latitude = `42.862`;
        longitude = `-112.450`;
    } else if (cityID === "135") { // Havana, CU
        cityName = `Havana, Cuba`;
        credit = `<a href="https://unsplash.com/photos/top-view-of-buildings-under-cloudy-sky-ejIi27O6qlI">Photo by JF Martin on Unsplash</a>`;
        population = `1,814,207`;
        latitude = `23.113`;
        longitude = `-82.366`;
    } else if (cityID === "136") { // Tampa, US
        cityName = `Tampa, United States`;
        credit = `<a href="https://unsplash.com/photos/buildings-near-body-of-water-VHFBDTwiIy4">Photo by Kody Cheyne on Unsplash</a>`;
        population = `384,959`;
        latitude = `27.951`;
        longitude = `-82.458`;
    } else if (cityID === "137") { // Gatineau, CA
        cityName = `Gatineau, Canada`;
        credit = `<a href="https://pixabay.com/photos/bench-bridge-structure-metal-steel-5709659/">Image by Gabriel Macias from Pixabay</a>`;
        population = `291,041`;
        latitude = `45.476`;
        longitude = `-75.700`;
    } else if (cityID === "138") { // Norfolk, GB
        cityName = `Norfolk, United Kingdom`;
        credit = `<a href="https://www.pexels.com/photo/cityscape-of-norwich-with-view-of-the-cathedral-norfolk-england-26609585/">Photo by Manousos Kampanellis from Pexels</a>`;
        population = `925,299`;
        latitude = `52.613`;
        longitude = `0.886`;
    } else if (cityID === "139") { // Elliot Lake, CA
        cityName = `Elliot Lake, Canada`;
        credit = `<a href="https://unsplash.com/photos/a-bridge-over-a-body-of-water-next-to-a-forest--Zg0B6JnVBg">Photo by David Fimio on Unsplash</a>`;
        population = `11,372`;
        latitude = `46.386`;
        longitude = `82.650`;
    } else {
        credit = "Error: Image credit not found";
        population = "Error: Population not found";
    }

    document.getElementById("credit").innerHTML = credit;
    console.log(cityName);
    console.log(population);
}

function displayWeather(data) {
    const currentTempC = data.current.temperature_2m;
    const feelsLike = data.current.apparent_temperature;
    const highTempC = data.daily.temperature_2m_max[0];
    const lowTempC = data.daily.temperature_2m_min[0];
    const currentTempF = Math.round(currentTempC * 9/5) + 32;
    const highTempF = Math.round(highTempC * 9/5) + 32;
    const lowTempF = Math.round(lowTempC * 9/5) + 32;
    const feelsLikeF = Math.round(feelsLike * 9/5) + 32;

    // Major weather codes
    if (data.daily.weather_code == `0`) {
        weather = `Clear`
    } else if (data.daily.weather_code == `1`) {
        weather = `Mostly Clear`
    } else if (data.daily.weather_code == `2`) {
        weather = `Partly Cloudy`
    } else if (data.daily.weather_code == `3`) {
        weather = `Cloudy`
    } else if (data.daily.weather_code == `45`) {
        weather = `Fog`
    } else if (data.daily.weather_code == `48`) {
        weather = `Freezing Fog`
    } else if (data.daily.weather_code == `51`) {
        weather = `Light Drizzle`
    } else if (data.daily.weather_code == `53`) {
        weather = `Drizzle`
    } else if (data.daily.weather_code == `55`) {
        weather = `Heavy Drizzle`
    } else if (data.daily.weather_code == `56`) {
        weather = `Light Freezing Drizzle`
    } else if (data.daily.weather_code == `57`) {
        weather = `Freezing Drizzle`
    } else if (data.daily.weather_code == `61`) {
        weather = `Light Rain`
    } else if (data.daily.weather_code == `63`) {
        weather = `Rain`
    } else if (data.daily.weather_code == `65`) {
        weather = `Heavy Rain`
    } else if (data.daily.weather_code == `66`) {
        weather = `Light Freezing Rain`
    } else if (data.daily.weather_code == `67`) {
        weather = `Freezing Rain`
    } else if (data.daily.weather_code == `71`) {
        weather = `Light Snow`
    } else if (data.daily.weather_code == `73`) {
        weather = `Snow`
    } else if (data.daily.weather_code == `75`) {
        weather = `Heavy Snow`
    } else if (data.daily.weather_code == `77`) {
        weather = `Snow Grains`
    } else if (data.daily.weather_code == `80`) {
        weather = `Light Rain Showers`
    } else if (data.daily.weather_code == `81`) {
        weather = `Rain Showers`
    } else if (data.daily.weather_code == `82`) {
        weather = `Heavy Rain Showers`
    } else if (data.daily.weather_code == `85`) {
        weather = `Light Snow Showers`
    } else if (data.daily.weather_code == `86`) {
        weather = `Snow Showers`
    } else if (data.daily.weather_code == `95`) {
        weather = `Thunderstorm`
    } else if (data.daily.weather_code == `96`) {
        weather = `Thunderstorm with Hail`
    } else if (data.daily.weather_code == `97`) {
        weather = `Heavy Thunderstorm`
    } else if (data.daily.weather_code == `99`) {
        weather = `Heavy Thunderstorm with Hail`
    }
document.title = `Weather in ${cityName}`; // This changes the title to include the location
    const weatherInfo = `
        <h2><a href="https://nominatim.openstreetmap.org/ui/reverse.html?format=html&lat=${latitude}&lon=${longitude}">${cityName}</a></h2>
        <h3 class="population">Population ${population}</h3>
        <h3 class="weather">${weather}</h3>
        <br>
        <h3 class="weather">Currently: ${currentTempC.toFixed(1)}°C / ${currentTempF.toFixed(1)}°F</h3>
        <h3>Feels like: ${feelsLike}°C / ${feelsLikeF}°F</h3>
        <h3>High: ${highTempC.toFixed(1)}°C / ${highTempF.toFixed(1)}°F</h3>
        <h3>Low: ${lowTempC.toFixed(1)}°C / ${lowTempF.toFixed(1)}°F</h3>
        <br>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
    const dataCredit = `<a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>`;
    document.getElementById("data-credit").innerHTML = dataCredit;
    

}


