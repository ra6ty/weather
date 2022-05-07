import React from 'react';
import "./App.scss"
import Main from "../../pages/Main/Main";
import Weather from "../../pages/Weather/Weather";

const app = () => {
    return (
        <div className="app">
            <Main/>
            <Weather/>
        </div>
    )
}

export default app;