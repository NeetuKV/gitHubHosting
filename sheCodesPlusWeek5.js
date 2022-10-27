let currentTime = new Date();
function formatDate(date) {
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchPage(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#search_input_text");
  let cityInput1 = document.querySelector("#search_input_text");
  cityElement.innerHTML = cityInput.value;
  cityElement.innerHTML = cityInput1.currentTime.value;
}
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchPage);
//ctof, ftoc
/*function cToF(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", cToF);

function fToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", fToC);*/

function showPosition(position) {
  let h6 = document.querySelector("h6");
  h6.innerHTML = `GPS Coordinates, <br/> latitude : ${position.coords.latitude} <br/>longitude: ${position.coords.longitude}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector("#current_location");
currentLocationButton.addEventListener("click", getCurrentPosition);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

function getCurrentPosition1() {
  navigator.geolocation.getCurrentPosition(showTemperature);
}

let currentLocationButtonq = document.querySelector("#current_location");
currentLocationButtonq.addEventListener("click", getCurrentPosition1);

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
//let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
