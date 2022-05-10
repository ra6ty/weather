import React, {useState, useEffect} from 'react';
import "./FormInput.scss"
import axios from "axios";

const FormInput = ({findWeather,setInputVal,inputVal}) => {

    return (
        <form className="form">
            <input placeholder="" type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
            <button className='button' onClick={findWeather} type="button">Знайти</button>
        </form>
    );
};

export default FormInput;