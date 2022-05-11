import React from 'react';
import * as Icon from "react-bootstrap-icons";
import "./Footer.scss"
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation()

    return (
        <div>
            <footer className="footerContent">
                <p>{t("social media")}</p>
                <div className="social-links">
                    <a target="_blank" href="https://uk-ua.facebook.com/">
                        <Icon.Facebook size={22}/>
                    </a>
                    <a target="_blank" href="https://www.pinterest.ru/">
                        <Icon.Pinterest size={22}/>
                    </a>
                    <a target="_blank" href="https://www.messenger.com/">
                        <Icon.Messenger size={22}/>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/">
                        <Icon.Youtube size={22}/>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
