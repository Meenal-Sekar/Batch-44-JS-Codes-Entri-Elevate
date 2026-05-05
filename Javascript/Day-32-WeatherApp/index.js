
function getWeather()
{
    const city=document.getElementById('city').value;
      const result = document.getElementById("result");

    if (city === "") 
    {
    result.textContent = "Please enter a city name";
    return;
    }
      // Step 1: Get latitude & longitude

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)

    .then(res => res.json())
    .then(data => {
      
      const lat = data.results[0].latitude;
      const lon = data.results[0].longitude;

      // Step 2: Get weather using lat & lon
      return fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
    })
    .then(res => res.json())
    .then(weatherData => {
      const temp = weatherData.current_weather.temperature;
      result.textContent = `Temperature: ${temp}°C`;
    })
    .catch(() => {
      result.textContent = "City not found";
    });
}

