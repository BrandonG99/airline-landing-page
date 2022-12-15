import React from 'react'
import './searchFlights.scss'

const SearchFlights = () => {
  return (
    <div className="searchFlights__div">
      <div className="searchFlights">
        {/* Buttons */}
        <div className="searchFlightsButtonsContainer">
            <div className="searchFlightsMainButtons">
              <button style={{paddingLeft:"1.5rem", paddingRight:"1.5rem", marginRight:"0.5rem"}}>Return</button>
              <button style={{backgroundColor: "white", border: "0.0625rem solid #e1e8ee", color: "#666", paddingLeft: "1rem", paddingRight:"1rem", marginRight:"0.5rem"}}>One way</button>
              <button style={{backgroundColor: "white", border: "0.0625rem solid #e1e8ee", color: "#666", paddingLeft: "1rem", paddingRight:"1rem"}}>Multi-city</button>
            </div>
          </div>
        <div className="searchFlightsContainer"style={{display: "flex", alignItem: "center", flexDirection:"row", justifyContent: "center", width:"100%"}}>
          
          {/* Where from? */}
          <div className="searchFlightsCard1 searchFlightsToAndFrom" style={{backgroundColor: "white", border: "0.0625rem solid #e1e8ee", color: "#666", marginRight:"0.5rem", width:"100%"}}>
            <div className="banner__main__div searchFlightsFrom">
              <div className="searchFlights__header">
                <h4 className="">Where from?</h4>
              </div>
              <div>
                <div className="searchFlights__bof">
                  <h2 className="searchFlightsDestination" style={{marginRight: "0rem", padding:"0rem"}}>London (LON)</h2>
                </div>
              </div>
            </div>
            {/* Where to? */}
            <div className="banner__main__div searchFlightsToAndFrom">
              <div className="searchFlights__header">
                <h4 className="to">Where to?</h4>
              </div>
              <div>
                <div className="searchFlights__bof">
                    <h2 className="" style={{marginRight: "0rem"}}>Sydney (SYD)</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="searchFlightsCard1" style={{backgroundColor: "white", border: "0.0625rem solid #e1e8ee", color: "#666", marginRight:"0.5rem"}}>
            <div className="banner__main__div">
              <div className="searchFlights__header">
                <h4 className="">Dates</h4>
                {/* <h4>14 Nights</h4> */}
              </div>
              <div>
                <div className="searchFlights__bof">
                  <h2 className="searchFlightsDates" style={{fontSize:"1rem", fontWeight:"300"}}>Sat 11 Jun - Sat 25 Jun</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Passengers */}
          <div className="searchFlightsCard1" style={{backgroundColor: "white", border: "0.0625rem solid #e1e8ee", color: "#666"}}>
            <div className="banner__main__div">
              <div className="searchFlights__header">
                <h4 className="">Passengers</h4>
              </div>
              <div>
                <div className="searchFlights__bof">
                  <h2 className="searchFlightsPassengers" style={{fontSize:"1rem", fontWeight:"300"}}>2 Adults, Any class</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__main__div">
            <div className="searchFlightsButton">
              <button>Search flights</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SearchFlights
