import React from "react";

export default function ActualTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <div>
      <p>
        {day} {hour}:{minutes}
      </p>
    </div>
  );
}
