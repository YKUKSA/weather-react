import React from "react";
import ActualTime from "./ActualTime";
export default function WeatherInfo(props) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-3">
          <h1>{props.data.city}</h1>
          <ActualTime date={props.data.date} />
        </div>{" "}
        <div className="col-3">
          <ul>
            <li>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="unit-celsius">°C</span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
        <div className="col-3">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
      </div>
    </div>
  );
}
