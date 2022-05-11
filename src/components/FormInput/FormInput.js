import React from 'react';
import "./FormInput.scss"
import {useTranslation} from "react-i18next";

const FormInput = ({findWeather,setInputVal,inputVal}) => {

    const {t} = useTranslation()

    return (
        <form className="form">
            <input placeholder={t("your location")} type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
            <button className='button' onClick={findWeather} type="button">{t("find weather")}</button>
        </form>
    );
};

export default FormInput;
