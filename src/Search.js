import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.cityDefault);
  function displayConditions(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      cities: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "c3a56d4fcded4e52316bb9963de765f8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayConditions);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city"
            id="label"
            autoFocus="on"
            onChange={handleCitySearch}
          />{" "}
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary"
            id="form-submit"
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
    search();
    return "Loading...";
  }
}
