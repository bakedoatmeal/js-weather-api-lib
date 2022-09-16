
  // Functions 
async function getWeather(path) {
  // Replace this with your own API key!
  //const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  try {
    const res = await fetch(path)
    const json = await res.json()
    return {
      'name': json.name, 
      'temp': json.main.temp,
      'temp_max': json.main.temp_max,
      'temp_min': json.main.temp_min, 
      'feels_like': json.main.feels_like, 
      'description': json.weather[0].description
    }
  } catch(err) {
    console.log(err.message)
  }
}

async function getWeatherByZip(apiKey, zip, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&${units}`
  return getWeather(path)
}

async function getWeatherByCity(apiKey, city, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${units}`
  return getWeather(path)
}

async function getWeatherByGeo(apiKey, lat, lon, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${units}`
  return getWeather(path)
}

export default getWeatherByZip;