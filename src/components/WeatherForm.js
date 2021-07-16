import React from "react";

import "./style/WeatherForm.css"


const WeatherForm = (props) => (
    <div className="weatherForm">
        <form onSubmit={props.getWeather}>
            <div className="">
                <input 
                type="text" 
                name="city" 
                placeholder="  Your City Name" 
                className="city_input"
                autoFocus
                />
            </div>
            <div className="form-group">
                <input 
                type="text" 
                name="country" 
                placeholder="  Your Country Name"
                className="country_input"
                />
            </div>

            <button className="weatherForm_button">
                Get Weather
            </button>
        </form>

    </div>
);

export default WeatherForm;