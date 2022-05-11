import React from 'react';
import * as Icon from "react-bootstrap-icons";
import "./Footer.scss"
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation()

    return (
        <div>
            <footer className="footerContent">
                <p>{t("social")}х</p>
                <div className="social-links">
                    <a href="#test">
                        <Icon.Facebook size={22}/>
                    </a>
                    <a href="##test2">
                        <Icon.Pinterest size={22}/>
                    </a>
                    <a href="##test3">
                        <Icon.Messenger size={22}/>
                    </a>
                    <a href="##test4">
                        <Icon.Youtube size={22}/>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
