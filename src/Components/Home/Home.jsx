import React from 'react';
import './home.scss';
import '../searchFlights/searchFlights';
import airlineBackground from '../../assets/images/background-image.jpg'
import trustPilot from '../../assets/images/trustpilot.png'

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <img src={airlineBackground} alt="Alternative Airlines Background" />
      </div>

      <div className="homeContent container">
        <div className="textDiv">

          <h1 className="homeTitle">
            Search and book flights to Australia
          </h1>

          <span className="smallText">
            Buy your flights now and pay later
          </span>

          <searchFlights /> 

          <div className="trustPilotRating">
            <img src={trustPilot} className="trustPilotImg" alt="Trust - 4.5/5 Stars" />
            <h4 className="trustscore">
              Trustscore 4.5 
                <span className="divider">
                  |
                </span>
              6,500 Reviews 
            </h4>
          </div>
        </div>
        </div>

    </section>
  )
}

export default Home;