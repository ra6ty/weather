import React from 'react';
import "./Weather.scss"
import ForecastItem from "../../components/ForecastItem/ForecastItem";

const Weather = () => {
    const style = {
       backgroundImage: "url(./images/bg.jpg)"
    };

    // Видалити обгортку <div className="Weather"> і пофіксити стилі

    return (
        <div className="Weather">
            <main style={style}>
                <div className="forecast-container">
                    <ForecastItem/>
                </div>
            </main>

        </div>
    );
};

export default Weather;
