/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const temp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");
/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = async (city) => {
  // const URL = "https://api.openweathermap.org/data/2.5/weather";

  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c480cc1a07msh889a5604e516b76p18587ejsn7d428b0d6aea",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    showWeatherData(data);
  } catch (error) {
    console.error(error);
  }
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  getWeatherData(city);
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  cityName.textContent = weatherData.name;
  weatherType.textContent = weatherData.weather[0].main;
  temp.textContent = weatherData.main.temp;
  minTemp.textContent = weatherData.main.temp_min;
  maxTemp.textContent = weatherData.main.temp_max;
};
