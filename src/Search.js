import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  function displayConditions(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
    return (
      <div className="search-form">
        <form>
          <input
            type="text"
            placeholder="Enter a city"
            id="label"
            autoFocus="on"
          />{" "}
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary"
            id="form-submit"
          />
          <input
            type="submit"
            value="Current"
            className="btn btn-secondary"
            id="form-current"
          />
        </form>
        <ul className="cities-list">
          <li>Lisbon</li>
          <li>Paris</li>
          <li>London</li>
          <li>New York</li>
          <li>Berlin</li>
          <li>Kyiv</li>
        </ul>
        <WeatherInfo data={weather} />{" "}
      </div>
    );
  } else {
    const apiKey = "c3a56d4fcded4e52316bb9963de765f8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityDefault}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayConditions);
    return "Loading...";
  }
}
