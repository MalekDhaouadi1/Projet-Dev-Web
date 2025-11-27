const apiKey = "9eacdf87d820a9392b1a99c59d0956f7";
const cityInput = document.getElementById("city-input");
const getWeatherBtn = document.getElementById("get-weather");
const weatherResult = document.getElementById("weather-result");

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherResult.innerHTML = "<p class='error'>Veuillez entrer une ville.</p>";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
  .then(response => {
    if (!response.ok) throw new Error("Ville introuvable");
    return response.json();
  })
  .then(data => {
    weatherResult.innerHTML =
      "<h3>Météo à " + data.name + ", " + data.sys.country + "</h3>" +
      "<p>Température : " + data.main.temp + "°C</p>" +
      "<p>Conditions : " + data.weather[0].description + "</p>" +
      "<p>Humidité : " + data.main.humidity + "%</p>";
  })
  .catch(err => {
    weatherResult.innerHTML = "<p class='error'>Erreur : " + err.message + "</p>";
  });
});