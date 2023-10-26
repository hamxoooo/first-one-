let subcontainer = document.querySelector(".sub-container");
let searchbox = document.querySelector(".search-box");
let weatherinfo = document.querySelector(".weather-info");
let weather = document.querySelector(".weather-box ");
searchbox.addEventListener("click", () => {
  const APIkey = "1fc6a7e736fe23ce683694ca1c84e489";
  let city = document.querySelector(".search-box input").value;
  if (city == "") 
    return;
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}"
    )
      .then(response => response.json())
      .then(json => {
        let image = document.querySelector(".weather-box img");
        let temperature = document.querySelector(".weather-box .temperature");
        let discription = document.querySelector("weather-box .discription");
        let humidity = document.querySelector(".weather-info .humidity");
        let wind = document.querySelector(".weather-info .wind");
        switch (json.weather[0].main) {
          case "Clear":
            image.src = "sun (1).png";
            break;
          case "Rain":
            image.src = "rainy-day.png";
            break;
          case "Snow":
            image.src = "snow.png";
            break;
          case "Clouds":
            image.src = "cloud.png";
            break;

          case "Mist":
            image.src = "sun.png";
            break;
          case "Haze ":
            image.src = "sun.png";
            break;

          default:
            image.src = "rainy-day.png";
        }
      });
  
});
