import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  function changeCity(event) {
    setCity(event.target.value);
  }

  function displayConditions(response) {
    console.log(response);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="search-form">
        <form>
          <input
            type="text"
            placeholder="Enter a city"
            onChange={changeCity}
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
        <div class="container text-center">
          <div class="row">
            <div class="col-3">
              <h1>{props.cityDefault}</h1>
              <p>Wednesday</p>
            </div>{" "}
            <div class="col-3">
              <ul>
                <li>
                  <span className="temperature">{Math.round(temperature)}</span>{" "}
                  <span className="unit-celsius">°C</span>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul>
                <li>{description}</li>
                <li>Humidity: {humidity} %</li>
                <li>Wind: {wind} m/s</li>
              </ul>
            </div>
            <div class="col-3">
              <img src={weatherIcon} alt="weather icon" />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  } else {
    const apiKey = "c3a56d4fcded4e52316bb9963de765f8";
    let city = "Kyiv";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityDefault}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayConditions);
    return "Loading...";
  }
}
