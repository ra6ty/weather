import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";

const Header = ({to, value}) => {
    return (
        <header>
            <div className="headerLogo">
                <img src="./images/logo.png" alt="logo"/>
                <h1>Погода у твоєму місті</h1>
            </div>
            <Link to={`/` + to} className='link' type="button">{value}</Link>
            <div className="changeLang">
                <p>Вибрати мову:</p>
                <button className='checked'>UA</button>
                <button>EN</button>
            </div>
        </header>
    );
};

export default Header;