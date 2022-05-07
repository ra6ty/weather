import React from 'react';
import ForecastItem from "../ForecastItem/ForecastItem";
import "./Forecast.scss"
const Forecast = () => {
    return (
        <div className="forecast-container">
            <ForecastItem/>
        </div>
    );
};

export default Forecast;