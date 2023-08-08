import '../styles/skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Skills = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    return (
      <div id={theme}>
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>

          <div className="skills__container container grid" data-aos="fade-up">
            <Frontend />
            <Backend />
          </div>
        </section>
      </div>
    );
}

export default Skills