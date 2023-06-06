import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAcZJREFUaN7tmdFtgzAQhhmBEToCI7BApYzACB7BIyB1ARaoxAZlgD64T5XfGMEbuHZ1tMYBbPAZEumQfkGic3zf+Xy+JIXWunhmFQRAAARAAARAACmXlJIbjUbaUW9UF5kuFADjYGk0eI77ah4ZoA04P6kG+xf7bO+XA4AzOlLjQoqNKSmGAdDsAEBPMQwAjgSgj6RUEsBK1UlRdwoAVB2B6PjffjgLoM/g/K+yA0D505k1xO6HIwBtYOJmmhxK7C2wYgLGCed1BeKOKiyApRNXwcqUANCDnb0zeL/2Nrzw6z/YlRtBajEAGojI4DhfQaTVysQKxpUAIeCZeWOGiLLMMPZA7URrSpOow8pJD4ZRqaIBIDJ+hDsAUJGTK2d/KIxKFQUQ0WnqHQDVzv5pq69iQYCEpV6qNtNmxmw/2hAA1olbITZ+d5+9BYAS/dS8D4jnBuicQpBD9QwAlhuz3+GnfSfeWRbReh9MAH6W4+Jb6vev7S709UOWRrc9AN1ZAG+fUhvnQgDc2mT9VeLoFXLuKQFsuti0ibV5RACbVjzWhgAIgACuBbg7pBYANm0uBViBmgGEbAggA8DsIAvZ0J98BEAA//oBqG5a70gUjuIAAAAASUVORK5CYII=",
    });
  }
  function search() {
    const apiKey = "de376ca7acf44cedbf544451279f0971";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
