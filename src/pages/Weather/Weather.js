import React from 'react';
import "./Weather.scss"
import ForecastItem from "../../components/ForecastItem/ForecastItem";
import FormInput from "../../components/FormInput/FormInput";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Weather = () => {
    const style = {
        backgroundImage: "url(./images/bg.jpg)"
    };
    return (
        <div>
            <Header  to="" value="Повернутись"/>
            <div style={style} className="Weather">
                <div className="FormInput">
                    <FormInput placeholder="Find your location...." value="Знайти"/>
                </div>
                <div className="forecast-container">
                    <ForecastItem/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Weather;
