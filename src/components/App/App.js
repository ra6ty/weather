import React from 'react';
import "./App.scss"
import Main from "../../pages/Main/Main";
import Weather from "../../pages/Weather/Weather";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// добавити 2 компоненти header, footer, пофіксити коментарі, видалити імпорти, які не юзаєш

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Main/>}/>
                    <Route path="/weather" element={<Weather/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
