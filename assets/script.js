const apiKey = "8bf039e4e649d291e56dce63139febd4";

//localStorage.setItem("data",JSON.stringify(response))

//geolocate http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//weather https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

let inputCity = document.querySelector(".inputCity");
let button = document.querySelector(".btn");

button.addEventListener("click", () => locate());

async function locate() {
  let city = inputCity.value;
  try {
    //Get the country's location
    let response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&appid=" +
        apiKey
    );
    let data = await response.json();
    //Get the lat and the long
    console.log(data);
    localStorage.setItem(data, JSON.stringify(response));
    let lat = data[0].lat;
    let lon = data[0].lon;
    console.log(lon);
    console.log(lat);
    weatherApp(lat, lon);
  } catch (error) {
    console.error(error);
  }
}

async function weatherApp(lat, lon) {
  try {
    //Call the api with your lat and lon
    let response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        apiKey
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
