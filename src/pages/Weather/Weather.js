import React from 'react';
import "./Weather.scss"
import Forecast from "../../components/Forecast/Forecast";

import * as Icon from "react-bootstrap-icons";
import * as url from "url";

const Weather = () => {


    const style = {
       backgroundImage: "url(./images/bg.jpg)"
    };

    return (
        <div className="Weather">
            <header>
                <div className="headerLogo">
                    <img src="./images/logo.png" alt="logo"/>
                    <h1>Погода у твоєму місті</h1>
                </div>
                <div className="changeLang">
                    <p>Вибрати мову:</p>
                    <button className='checked'>UA</button>
                    <button>EN</button>
                </div>
            </header>
            <main style={style}><Forecast/></main>

            <footer className="footerContent">
                <p>Ми в соціальних мережах</p>
                <div className="social-links">
                    <a href="#">
                        <Icon.Facebook size={22}/>
                    </a>
                    <a href="#">
                        <Icon.Pinterest size={22}/>
                    </a>
                    <a href="#">
                        <Icon.Messenger size={22}/>
                    </a>
                    <a href="#">
                        <Icon.Youtube size={22}/>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Weather;