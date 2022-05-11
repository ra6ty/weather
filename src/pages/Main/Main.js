import React from 'react';
import "./main.scss"
import {Carousel} from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useTranslation} from "react-i18next";

const Main = () => {

    const {t} = useTranslation()

    return (
        <div>
            <Header to="weather" value={t("button")}/>
            <div className="mainContent">
                <div className="forecast">
                    <h2>{t("h2")}</h2>
                    <div className="forecast-container">
                        <h3>
                            {t("h3")}
                        </h3>
                        <div><img src="./images/weather1.jpg" className="img1" alt="#"/>
                            <img src="./images/weth2.jpg" className="img2" alt="#"/>
                        </div>
                    </div>
                    <div className="forecast-container2">
                        <p> {t("text1")}</p>
                        <img src="./images/weth3.jpg" alt="#"/>
                        <p>{t("text2")}</p>
                    </div>
                    <div>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-50"
                                    src="./images/weth3.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-50"
                                    src="./images/weth2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-50"
                                    src="./images/weth3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="forecast-container3">
                        <p>{t("description")}</p>
                        <img src="./images/temp.jpg" alt="#"/>
                        <img src="./images/graf.jpg" alt="#"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
