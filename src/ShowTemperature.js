import React from "react";
export default function ShowTemperature(props) {
  return (
    <div className="displayTemp text-center">
      <span className="temperature ">{Math.round(props.celsius)}</span>{" "}
      <span className="unit-celsius">°C</span>
    </div>
  );
}
