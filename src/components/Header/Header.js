import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';

const Header = ({to, value}) => {

    const {t, i18n} = useTranslation()

    const changeLangUA = () => {
        i18n.changeLanguage("uk")
    }
    const changeLangEN = () => {
        i18n.changeLanguage("en")
    }

    let style = {
        color: "white"
    }

    return (
        <header>
            <div className="headerLogo">
                <img src="./images/logo.png" alt="logo"/>
                <h1>{t("h1")}</h1>
            </div>
            <Link to={`/` + to} className='link' type="button">{value}</Link>
            <div className="changeLang">
                <p>{t("Choose language")}</p>
                {i18n.language === "uk" ? <button onClick={changeLangUA} style={style}>UA</button> :
                    <button onClick={changeLangUA}>UA</button>}
                {i18n.language === "en" ? <button onClick={changeLangEN} style={style}>EN</button> :
                    <button onClick={changeLangEN}>EN</button>}
            </div>
        </header>
    );
};

export default Header;
