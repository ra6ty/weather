import React from 'react';
import "./main.scss"
import {Carousel} from "react-bootstrap";
import logo from "../../images/logo.png"
import FormInput from "../../components/FormInput/FormInput";
import * as Icon from 'react-bootstrap-icons';
import weth from "../../images/weather1.jpg"
import weth2 from "../../images/weth2.jpg"
import weth3 from "../../images/weth3.jpg"
import temper from "../../images/temp.jpg"
import graf from "../../images/graf.jpg"

const Main = () => {
    return (
        <div className="mainPage">
            <header>
                <div className="headerLogo">
                    <img src={logo} alt="logo"/>
                    <h1>Погода у твоєму місті</h1>
                </div>
                <div className="changeLang">
                    <p>Вибрати мову:</p>
                    <button className='checked'>UA</button>
                    <button>EN</button>
                </div>
            </header>
            <main>
                <div className="FormInput">
                    <FormInput placeholder="Find your location...." value="Знайти"/>
                </div>
                <div className="mainContent">
                    <div className="forecast">
                        <h2>Про погоду у світі</h2>
                        <div className="forecast-container">
                            <h3>
                                Екстремальні погодні умови, такі як торнадо, урагани та циклони, в останні роки охопили
                                всю
                                планету. Вони завдають значних збитків і призводять до людських жертв.
                            </h3>
                            <div><img src={weth} className="img1" alt="#"/>
                                <img src={weth2} className="img2" alt="#"/>
                            </div>
                        </div>
                        <div className="forecast-container2">
                            <p>Потужні урагани нещодавно накрили Британію. Минулого місяця Іспанія і Франція потерпали
                                від
                                сильних штормів, а Австралія від екстремальної спеки, що призвела до масових лісових
                                пожеж.</p>
                            <img src={weth3} alt="#"/>
                            <p>Приборкати погоду неможливо, але можна передбачити і пом'якшити її екстремальні прояви. І
                                саме тут на допомогу приходить прогноз погоди. <br/>
                                Як його складають? І чому він не завжди точний?</p>
                        </div>
                        <div>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 h-50"
                                        src={weth3}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 h-50"
                                        src={weth2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 h-50"
                                        src={weth3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="forecast-container3">
                            <p>Зміна клімату та глобальне потепління роблять можливим пляжний відпочинок навіть в
                                Алясці.</p>
                            <img src={temper} alt="#"/>
                            <img src={graf} alt="#"/>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footerContent">
                <p>Ми в соціальних мережах</p>
                <div className="social-links">
                    <a href="#">
                        <Icon.Facebook size={22}/>
                    </a>
                    <a href="#">
                        <Icon.Pinterest size={22}/>
                    </a>
                    <a href="#">
                        <Icon.Messenger size={22}/>
                    </a>
                    <a href="#">
                        <Icon.Youtube size={22}/>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Main;