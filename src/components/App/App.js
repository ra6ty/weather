import React from 'react';
import "./App.scss"
import Main from "../../pages/Main/Main";
import Weather from "../../pages/Weather/Weather";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../../i18n"

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
