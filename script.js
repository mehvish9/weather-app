async function getWeather() {
  const city = document.getElementById("cityInput").value;
  // API Key from OpenWeatherMap
const apiKey = '08c52ddc1550ee5697d143d24dbf81da';  // Replace with your API Key
// Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherResult = document.getElementById("weatherResult");
  const errorText = document.getElementById("error");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      weatherResult.classList.add("hidden");
      errorText.textContent = "City not found. Try again.";
      errorText.classList.remove("hidden");
      return;
    }

    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `🌡️ ${data.main.temp} °C`;
    document.getElementById("description").textContent = `📋 ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `🌬️ Wind: ${data.wind.speed} m/s`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherResult.classList.remove("hidden");
    errorText.classList.add("hidden");
  } catch (error) {
    weatherResult.classList.add("hidden");
    errorText.textContent = "Error fetching data. Please try again.";
    errorText.classList.remove("hidden");
  }
}
