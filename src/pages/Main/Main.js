import React from 'react';
import "./main.scss"
import {Carousel} from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header to="weather" value="Дізнатись погоду"/>
            <div className="mainContent">
                <div className="forecast">
                    <h2>Про погоду у світі</h2>
                    <div className="forecast-container">
                        <h3>
                            Екстремальні погодні умови, такі як торнадо, урагани та циклони, в останні роки охопили
                            всю
                            планету. Вони завдають значних збитків і призводять до людських жертв.
                        </h3>
                        <div><img src="./images/weather1.jpg" className="img1" alt="#"/>
                            <img src="./images/weth2.jpg" className="img2" alt="#"/>
                        </div>
                    </div>
                    <div className="forecast-container2">
                        <p>Потужні урагани нещодавно накрили Британію. Минулого місяця Іспанія і Франція потерпали
                            від
                            сильних штормів, а Австралія від екстремальної спеки, що призвела до масових лісових
                            пожеж.</p>
                        <img src="./images/weth3.jpg" alt="#"/>
                        <p>Приборкати погоду неможливо, але можна передбачити і пом'якшити її екстремальні прояви. І
                            саме тут на допомогу приходить прогноз погоди. <br/>
                            Як його складають? І чому він не завжди точний?</p>
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
                        <p>Зміна клімату та глобальне потепління роблять можливим пляжний відпочинок навіть в
                            Алясці.</p>
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
