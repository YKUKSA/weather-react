import axios from "axios";
import React from "react";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="col-2">
        <div>Thu</div>{" "}
        <div className="WeatherForecastTemperatures">
          <span className="WeatherForecastTemperatureMax">20°</span>{" "}
          <span className="WeatherForecastTemperatureMin">10°</span>
        </div>
      </div>
    </div>
  );
}
