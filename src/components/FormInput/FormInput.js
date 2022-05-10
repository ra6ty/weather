import React from 'react';
import "./FormInput.scss"

const FormInput = ({findWeather,setInputVal,inputVal}) => {
    return (
        <form className="form">
            <input placeholder="" type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
            <button className='button' onClick={findWeather} type="button">Знайти</button>
        </form>
    );
};

export default FormInput;
