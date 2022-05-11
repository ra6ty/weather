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
            <Header to="weather" value={t("find the weather")}/>
            <div className="mainContent">
                <div className="forecast">
                    <h2>{t("weather in the world")}</h2>
                    <div className="forecast-container">
                        <h3>
                            {t("extreme weather conditions")}
                        </h3>
                        <div><img src="./images/weather1.jpg" className="img1" alt="rain"/>
                            <img src="./images/weth2.jpg" className="img2" alt="rain"/>
                        </div>
                    </div>
                    <div className="forecast-container2">
                        <p> {t("powerful hurricanes")}</p>
                        <img src="./images/weth3.jpg" alt="clouds"/>
                        <p>{t("about the weather")}</p>
                    </div>
                    <div>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-50"
                                    src="./images/weth3.jpg"
                                    alt="First slide clouds"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-50"
                                    src="./images/weth2.jpg"
                                    alt="Second slide clouds"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-50"
                                    src="./images/weth3.jpg"
                                    alt="Third slide rain"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="forecast-container3">
                        <p>{t("change сlimate")}</p>
                        <img src="./images/temp.jpg" alt="glaciers"/>
                        <img src="./images/graf.jpg" alt="graphics"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
