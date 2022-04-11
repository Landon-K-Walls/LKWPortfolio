const xhttp = new XMLHttpRequest();
const weatherCards = document.querySelectorAll('.weather-card')
const imgStrings = {storm: 'images/cloud-rain-lightning.svg', 
                    rain: 'images/day-cloud-rain.svg',
                    cloudy: 'images/day-cloudy.svg',
                    sunny: 'images/day-sunny.svg'}

function getWeatherData(location){
    let requestURL = "http://api.weatherapi.com/v1/forecast.json?key=54119b38b5cd4ac6a3204128220801&q=" + location + "&days=7&aqi=no&alerts=no";
    fetch(requestURL).then(response => response.json()).then(data => {
        updateWeather(data);
    })
}

function updateWeather(w){
    $('.weather-container h1').html('Weather for: ' + w.location.name);
    for(let i = 0; i < weatherCards.length; i++){
        weatherCards[i].children[2].innerHTML = 'avg: ' + w.forecast.forecastday[i].day.avgtemp_f + '°';
        weatherCards[i].children[0].innerHTML = w.forecast.forecastday[i].date;
        weatherCards[i].children[3].innerHTML = 'high: ' + w.forecast.forecastday[i].day.maxtemp_f + '°';
        weatherCards[i].children[4].innerHTML = 'low: ' + w.forecast.forecastday[i].day.mintemp_f + '°';
        let code = w.forecast.forecastday[i].day.condition.code;
        if(code >= 1273 || code == 1087){
            weatherCards[i].children[1].src = imgStrings.storm;
        } else if(code >= 1114 && code < 1273){
            weatherCards[i].children[1].src = imgStrings.rain;
        } else if(code >= 1003 && code <= 1030){
            weatherCards[i].children[1].src = imgStrings.cloudy;
        } else{
            weatherCards[i].children[1].src = imgStrings.sunny;
        }
    }
}

function toggleWeatherCards(){
    if ($('.weather-container').hasClass('active')){
        $('.weather-container').removeClass('active');
        $('.in-form').addClass('active');
    } else {
        $('.in-form').removeClass('active');
        $('.weather-container').addClass('active');
    }
}

$('#submit').click(() =>{
    let location = document.querySelector('#location-text').value;
    getWeatherData(location);
    toggleWeatherCards();
})