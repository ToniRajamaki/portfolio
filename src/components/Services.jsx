import React, { useState } from "react";
import "../styles/services.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Services = ({ theme }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (i) => {
    setToggleState(i);
  };
useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);
  return (
    <div id={theme}>
      <section className="services section" id="services" data-aos="fade-up">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Web <br />
                Design
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Web Design</h3>
                {/* <p className="services__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p> */}

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info"> Site purpose.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">Site objectives.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">Fresh content.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">Accessibility.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                {" "}
                web <br />
                Front-end
              </h3>
            </div>
            <span onClick={() => toggleTab(2)} className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title"> Front-end</h3>
                <p className="services__modal-description">
                  Front-end developers create the user interface (UI) that
                  determines what each part of a site or application does and
                  how it will look.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      build a website with React js library.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">build a website.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ui element interactions.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">Fast performance.</p>
                  </li>
                  {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                Web <br />
                Back-End
              </h3>
            </div>
            <span onClick={() => toggleTab(3)} className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title"> Back-end </h3>
                <p className="services__modal-description">
                  Le Back-End, c’est la partie du code qui est exécutée par le
                  serveur, il s’agît du travail qu’il réalise sur les pages Web
                  des sites dynamiques avant de les envoyer au client.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I'm using Mongo DB AS database.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      Express JS to manage servers and routes.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      Using mongoose for manages relationships between data,
                      provides schema validation..
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
