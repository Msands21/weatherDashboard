//Global Variables
const searchHistory = [];
// const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "7ed2fa3c55bb5a9d8cb79cb7ce9d1e4b";

// DOM element references
// #search form, #search-input, #today, #forecast, #history
let searchBtn = document.querySelector("#search-btn");
let searchInput = document.querySelector("#city-input");
let currentForecast = document.querySelector(".currentForecast");
let fiveDay = document.querySelector(".fiveDay");
let recentSearches = document.querySelector(".cityList");

// Add Timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// 




// Fetch weather data from geolocation API
var weatherApi = `http://api.openweathermap.org/geo/1.0/direct?appid=7ed2fa3c55bb5a9d8cb79cb7ce9d1e4b&q=Orlando`;
async function weatherData() {
    const response = await fetch(weatherApi);
    const data = await response.json();
    console.log(data);
    let lat = data.lat;
    let lon = data.lon;
}

weatherData ();


// // Function for current weather --> set up temp/humidity/wind etc variables


// // Day.js to go in current forecast function
// cardTitle.textContent = dayjs.unix(unixTs).tz(timezone).format('M/D/YYYY');
// // For loop after fetch data (loop wihthin a function)

//     for(let i=1; i < 6; i++){

//     }
// // history array for search history (loop through it)

// // Function for weather forecast (5-day) --> set up temp/humidity/wind etc variables
// cardTitle.textContent = dayjs.unix(unixTs).tz(timezone).format('M/D/YYYY');