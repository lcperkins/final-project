const api = "30f300f272a3eb8f72d03e9238797d23";
const base = "https://api.openweathermap.org/data/2.5/";

const searchbar = document.querySelector('.search-bar');
searchbar.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbar.value);
    }
}

function getResults (query) {
    fetch(`${base}weather?q=${query}&units=imperial&APPID=${key}`)
    .then(weather => {
        weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let forecastZip = document.querySelector('.location .forecastZip');
}
