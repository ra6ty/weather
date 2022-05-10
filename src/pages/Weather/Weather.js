import React, {useState} from 'react';
import "./Weather.scss"
import ForecastItem from "../../components/ForecastItem/ForecastItem";
import FormInput from "../../components/FormInput/FormInput";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const Weather = () => {

    const [inputVal, setInputVal] = useState("")
    const [errorFetch, setErrorFetch] = useState(false)
    const [responseWeather, setResponseWeather] = useState([])

    const findWeather = () => {
        setErrorFetch(false)

        if (inputVal.length < 4) {
            return
        }

        const value = inputVal.replace(/[^a-zA-Z+(?:-?-)]/, "");

        setResponseWeather([])

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=8a3c5cbdd404ed9f4d0fe714978162a6`)
            .then(res => {
                responseWeather.push(res.data.list[0])
                responseWeather.push(res.data.list[9])
                responseWeather.push(res.data.list[17])
                responseWeather.push(res.data.list[25])
            })
            .catch(err => {
                    console.log(err)
                    if (err.response.status) {
                        setErrorFetch(true)
                    }
                }
            )
    }
    const style = {
        backgroundImage: "url(./images/bg.jpg)"
    };

    return (
        <div>
            <Header to="" value="Повернутись"/>
            <div style={style} className="Weather">
                <div className="FormInput">
                    <FormInput value="Знайти" findWeather={findWeather} inputVal={inputVal} setInputVal={setInputVal}
                               setErrorFetch={setErrorFetch}/>
                    {errorFetch ? <p>Такого міста не знайдено</p> : null}
                </div>
                <div className="forecast-container">
                   <ForecastItem responseWeather={responseWeather}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Weather;
