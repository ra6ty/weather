import React, {useState} from 'react';
import "./Weather.scss"
import ForecastItem from "../../components/ForecastItem/ForecastItem";
import FormInput from "../../components/FormInput/FormInput";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import PropTypes from 'prop-types'
import {useTranslation} from "react-i18next";

const Weather = () => {
    const [inputVal, setInputVal] = useState("")
    const [errorFetch, setErrorFetch] = useState(false)
    let [responseWeather, setResponseWeather] = useState([])
    let [sityLocation, setSityLocation] = useState("")
    const [loading, setLoading] = useState(false)

    const findWeather = () => {
        setErrorFetch(false)
        setResponseWeather(responseWeather = [])
        setSityLocation("")

        if (inputVal.length < 3) {
            return
        }
        const value = inputVal.replace(/[^a-zA-Z+(?:-?-)]/, "");
        setLoading(true)
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=8a3c5cbdd404ed9f4d0fe714978162a6&units=metric`)
            .then(res => {
                setResponseWeather(responseWeather = [...responseWeather, res.data.list[0]])
                setResponseWeather(responseWeather = [...responseWeather, res.data.list[9]])
                setResponseWeather(responseWeather = [...responseWeather, res.data.list[17]])
                setResponseWeather(responseWeather = [...responseWeather, res.data.list[25]])
                setSityLocation(res.data.city.name)
                setLoading(false)
            })
            .catch(err => {
                    console.log(err)
                    if (err.response.status) {
                        setErrorFetch(true)
                        setLoading(false)
                    }
                }
            )
    }
    const style = {
        backgroundImage: "url(./images/bg.jpg)"
    };

    const {t} = useTranslation()

    return (
        <div>
            <Header to="" value={t("button2")}/>
            <div style={style} className="Weather">
                <div className="FormInput">
                    <FormInput value="Знайти" findWeather={findWeather} inputVal={inputVal} setInputVal={setInputVal}
                               setErrorFetch={setErrorFetch}/>
                    {errorFetch ? <p>{t("err text")}</p> : null}
                </div>
                <div className="forecast-container">
                    <div className="forecastContainer">
                        {loading ? <Loader/> : null}
                        {responseWeather.length ? responseWeather.map((el) => {
                            return <ForecastItem responseWeather={el} key={el.dt} sityLocation={sityLocation}/>
                        }) : null}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

Weather.propTypes = {
    responseWeather: PropTypes.arrayOf(
        PropTypes.object
    ),
    sityLocation: PropTypes.string
}

export default Weather;
