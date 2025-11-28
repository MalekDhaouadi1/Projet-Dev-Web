const apiKey = "9eacdf87d820a9392b1a99c59d0956f7";
const cityInput = document.getElementById("city-input");
const getWeatherBtn = document.getElementById("get-weather");
const weatherContainer = document.getElementById("weather-container");

function createWeatherCard(data) {
  const div = document.createElement("div");
  div.classList.add("weather-result");
  div.querySelector = div.querySelector.bind(div);
  
  div.innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>Température : ${data.main.temp}°C</p>
    <p>Conditions : ${data.weather[0].description}</p>
    <p>Humidité : ${data.main.humidity}%</p>
    <button class="remove-btn">Supprimer</button>
  `;
  
  const removeBtn = div.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    div.remove();
  });

  weatherContainer.appendChild(div);
}

function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
  .then(response => {
    if (!response.ok) throw new Error("Ville introuvable");
    return response.json();
  })
  .then(data => {
    createWeatherCard(data);
  })
  .catch(err => {
    const div = document.createElement("div");
    div.classList.add("weather-result");
    div.innerHTML = `<p class='error'>Erreur : ${err.message}</p>`;
    weatherContainer.appendChild(div);
  });
}

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return;
  fetchWeather(city);
  cityInput.value = "";
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeatherBtn.click();
  }
});