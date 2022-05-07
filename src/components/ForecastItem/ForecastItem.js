import React from 'react';
import umberella from "../../resources/img/icon-umberella.png"
import wind from "../../resources/img/icon-wind.png"
import ucompass from "../../resources/img/icon-compass.png"
import "./ForecastItem.scss"

const ForecastItem = () => {
    return (
        <div className="forecastContainer">
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Monday</div>
                    <div className="date">6 Oct</div>
                </div>
                <div className="forecast-content">
                    <div className="location">New York</div>
                    <div className="degree">
                        <div className="num">23<sup>o</sup>C</div>
                    </div>
                    <span><img src={umberella} alt="#"/>20%</span>
                    <span><img src={wind} alt="#"/>18km/</span>
                    <span><img src={ucompass} alt="#"/>East</span>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Monday</div>
                    <div className="date">6 Oct</div>
                </div>
                <div className="forecast-content">
                    <div className="location">New York</div>
                    <div className="degree">
                        <div className="num">23<sup>o</sup>C</div>
                    </div>
                    <span><img src={umberella} alt="#"/>20%</span>
                    <span><img src={wind} alt="#"/>18km/</span>
                    <span><img src={ucompass} alt="#"/>East</span>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Monday</div>
                    <div className="date">6 Oct</div>
                </div>
                <div className="forecast-content">
                    <div className="location">New York</div>
                    <div className="degree">
                        <div className="num">23<sup>o</sup>C</div>
                    </div>
                    <span><img src={umberella} alt="#"/>20%</span>
                    <span><img src={wind} alt="#"/>18km/</span>
                    <span><img src={ucompass} alt="#"/>East</span>
                </div>
            </div>
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">Monday</div>
                    <div className="date">6 Oct</div>
                </div>
                <div className="forecast-content">
                    <div className="location">New York</div>
                    <div className="degree">
                        <div className="num">23<sup>o</sup>C</div>
                    </div>
                    <span><img src={umberella} alt="#"/>20%</span>
                    <span><img src={wind} alt="#"/>18km/</span>
                    <span><img src={ucompass} alt="#"/>East</span>
                </div>
            </div>
        </div>

    );
};

export default ForecastItem;