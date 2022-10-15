import React from "react";
export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>{" "}
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastTemperatureMax">
          {maxTemperature()}°
        </span>{" "}
        <span className="WeatherForecastTemperatureMin">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
