import React from 'react'
import '../styles/home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'

const Home = ({theme}) => {
  return (
    <div id={theme}>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
               {/* profile picture */}

            <div className="home__img">
              <img
                src="/assets/toni/profile_picture.png"
                alt="about__img"
                className="home__img"
              />
            </div>
            
            <Data />
          </div>
          <img src="https://raw.githubusercontent.com/ToniRajamaki/ToniRajamaki/main/waves.svg" width="100%" height="150"></img>
          {/* <ScrollDown /> */}
        </div>
      </section>
    </div>
  );
}

export default Home