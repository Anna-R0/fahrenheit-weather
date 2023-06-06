import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
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
      <h1> Los Angeles</h1>
      <ul>
        <li>Wednesday: 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAcZJREFUaN7tmdFtgzAQhhmBEToCI7BApYzACB7BIyB1ARaoxAZlgD64T5XfGMEbuHZ1tMYBbPAZEumQfkGic3zf+Xy+JIXWunhmFQRAAARAAARAACmXlJIbjUbaUW9UF5kuFADjYGk0eI77ah4ZoA04P6kG+xf7bO+XA4AzOlLjQoqNKSmGAdDsAEBPMQwAjgSgj6RUEsBK1UlRdwoAVB2B6PjffjgLoM/g/K+yA0D505k1xO6HIwBtYOJmmhxK7C2wYgLGCed1BeKOKiyApRNXwcqUANCDnb0zeL/2Nrzw6z/YlRtBajEAGojI4DhfQaTVysQKxpUAIeCZeWOGiLLMMPZA7URrSpOow8pJD4ZRqaIBIDJ+hDsAUJGTK2d/KIxKFQUQ0WnqHQDVzv5pq69iQYCEpV6qNtNmxmw/2hAA1olbITZ+d5+9BYAS/dS8D4jnBuicQpBD9QwAlhuz3+GnfSfeWRbReh9MAH6W4+Jb6vev7S709UOWRrc9AN1ZAG+fUhvnQgDc2mT9VeLoFXLuKQFsuti0ibV5RACbVjzWhgAIgACuBbg7pBYANm0uBViBmgGEbAggA8DsIAvZ0J98BEAA//oBqG5a70gUjuIAAAAASUVORK5CYII="
              alt="Mostly Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
