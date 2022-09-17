import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [message, setMessage] = useState("");
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
  }
  function showMessage(event) {
    event.preventDefault();
    if (city) {
      setMessage(
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h1>{city}</h1>
              <h2>{Math.round(temperature)}°C</h2>
            </div>
            <div class="col">
              <ul>
                <li>Description: {description}</li>
                <li>Humidity: {humidity} %</li>
                <li>Wind: {wind} m/s</li>
              </ul>
            </div>
            <div class="col">
              <img src={weatherIcon} alt="weather icon" />
            </div>
          </div>
        </div>
      );
    } else {
      alert("Please, enter a city");
    }
    let apiKey = "c3a56d4fcded4e52316bb9963de765f8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayConditions);
  }

  return (
    <div className="search-form">
      <form onSubmit={showMessage}>
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
      {message}
      <div class="container text-center mt-4">
        <div class="row">
          <div class="col-2">
            <p>Tue</p>
            <p>23°C</p>
          </div>
          <div class="col-2">
            <p>Wed</p>
            <p>23°C</p>
          </div>
          <div class="col-2">
            <p>Tue</p>
            <p>23°C</p>
          </div>
          <div class="col-2">
            <p>Fri</p>
            <p>23°C</p>
          </div>
          <div class="col-2">
            <p>Sat</p>
            <p>23°C</p>
          </div>
          <div class="col-2">
            <p>Sun</p>
            <p>23°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
