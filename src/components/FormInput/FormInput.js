import React from 'react';
import "./FormInput.scss"
import {useTranslation} from "react-i18next";

const FormInput = ({findWeather,setInputVal,inputVal}) => {

    const {t, i18n} = useTranslation()

    return (
        <form className="form">
            <input placeholder={i18n.t("location")} type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
            <button className='button' onClick={findWeather} type="button">{i18n.t("find")}</button>
        </form>
    );
};

export default FormInput;
