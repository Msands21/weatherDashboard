//Global Variables
const searchHistory = [];
// const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "7ed2fa3c55bb5a9d8cb79cb7ce9d1e4b";

// DOM element references
// #search form, #search-input, #today, #forecast, #history
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let todayBox = document.querySelector("#today-box");
let forecastBox = document.querySelector("#forecast-box");
let searchDisplayBox = document.querySelector("#searchDisplay-box");

// Add Timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);



var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`;
console.log(weatherApiUrl);

function weatherData(weatherApi) {
    fetch(weatherApi)
    .then(function(res) {
        res.json()
    })
    .then(function(data) {
        console.log(data);
    })
}

weatherData(weatherApiUrl);