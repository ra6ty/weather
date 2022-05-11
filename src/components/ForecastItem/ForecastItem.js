import React from 'react';
import "./ForecastItem.scss"
import PropTypes from 'prop-types'

const ForecastItem = ({responseWeather, sityLocation}) => {
    return (
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{(responseWeather.dt_txt.slice(0, 10))}</div>
                <div className="date">{(responseWeather.dt_txt.slice(10, 16))}</div>
            </div>
            <div className="forecast-content">
                <div className="location">{sityLocation}</div>
                <div className="degree">
                    <div className="num">{(responseWeather.main.temp).toFixed(0)}<sup>o</sup>C</div>
                </div>
                <span><img src="./images/icon-umberella.png" alt="#"/>{(responseWeather.pop * 100)}%</span>
                <span><img src="./images/icon-wind.png" alt="#"/>{responseWeather.wind.speed} k/m</span>
            </div>
        </div>
    );
};

ForecastItem.propTypes = {
    responseWeather: PropTypes.shape({
        dt_txt: PropTypes.string,
        main: PropTypes.shape({
            temp: PropTypes.number
        }),
        pop: PropTypes.number,
        wind: PropTypes.shape({
            speed:PropTypes.number
        })
    }),
    sityLocation: PropTypes.string
}

export default ForecastItem;
