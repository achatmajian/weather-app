import React from "react";

const Forecast = () => {
  function getForecast() {
    // weather data fetch function goes here
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=seattle",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "54ac1aad36msh480b6dd695b91b6p1d83b3jsne70b7e53bf3c",
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>{JSON.stringify(responseObj)}</div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
};

export default Forecast;
