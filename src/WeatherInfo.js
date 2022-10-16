import React from "react";
import ActualTime from "./ActualTime";
import ShowTemperature from "./ShowTemperature";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 mt-2">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={72}
          />
        </div>{" "}
        <div className="col-3 mt-2">
          <ul>
            <li>
              <ShowTemperature celsius={props.data.temperature} />
            </li>
          </ul>
        </div>
        <div className="col-3 mt-3">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
        <div className="col-4 text-center">
          <h1 className="text-center">{props.data.cities}</h1>
          <ActualTime date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
