import React, { useState } from 'react'
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState (index);
    };
    
  return (
    <section className="services section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What I've Made</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-estate services__icon"></i>
                    <h3 className="services__title">Concessionaire<br /> Ope Mon System</h3>
                </div>

                <span className="services__button" onClick={() =>toggleTab(1)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Concessionaire Operations Monitoring System</h3>
                        <p className="services__modal-description">Web-based operations management</p>   

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Front-end development with HTML/CSS/JS.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Backend development with PHP</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Database management using MySQL</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-smile services__icon"></i>
                    <h3 className="services__title">Face  <br />Detection</h3>
                </div>

                <span className="services__button" onClick={() =>toggleTab(2)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Face Detection</h3>
                        <p className="services__modal-description">Python-based face detection system</p>   

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Python programming</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">OpenCV and computer vision techniques</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Image processing and manipulation</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-youtube services__icon"></i>
                    <h3 className="services__title">Youtube <br />Clone</h3>
                </div>

                <span className="services__button" onClick={() =>toggleTab(3)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Youtube Clone</h3>
                        <p className="services__modal-description">Replicated video-sharing platform</p>   

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Front-end design with HTML/CSS/JS</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Understanding of responsive web design</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Practice in UI/UX principles</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects