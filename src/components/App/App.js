import React from 'react';
import "./App.scss"
import Main from "../../pages/Main/Main";
import Weather from "../../pages/Weather/Weather";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

// добавити 2 компоненти header, footer, пофіксити коментарі, видалити імпорти, які не юзаєш

const App = () => {
    return (
        <div className="app">
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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Main/>}/>
                    <Route path="weather" element={<Weather/>}/>
                </Routes>
            </BrowserRouter>
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
    )
}

export default App;
