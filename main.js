const api = "30f300f272a3eb8f72d03e9238797d23";
const base = "https://api.openweathermap.org/data/2.5/";


function getWeather (query) {
    fetch(`${base}weather?q=${query}&units=imperial&APPID=${api}`)
    .then(weather => {
        weather.json();
    }).then(displayResults);
}

function displayWeather (weather) {
    console.log(weather);
    let forecastZip = document.querySelector('.location .forecastZip');
}
