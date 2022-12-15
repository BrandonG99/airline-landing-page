import React from 'react'
import './cancellationGrid.scss'
import cancellationImg from '../../assets/images/cp-mobile.png' 
import illness from '../../assets/icons/illness.svg';
import weather from '../../assets/icons/weather.svg';
import emergency from '../../assets/icons/emergency.svg';   
import refundable from '../../assets/icons/refundable.svg';
import breakdown from '../../assets/icons/breakdown.svg';
import more from '../../assets/icons/more.svg'; 

const CancellationGrid = () => {
  return (
    <div className="cancellationGridContainer">
      <div className="cancellationGrid">

        <div className="cancellationBox">
          <div className="cancellationBoxContent">
            <div className="cancellationButton">
              <button className="cancellationRecommended">
                      Recommended
              </button>
            </div>
            <div className="cancellationImgDiv"> 
              <div>
                <img src={cancellationImg} className="cancellationImg" alt="{cancellationTitle}" />
              </div>
            </div>
          </div>
        </div>


        <div className="cancellationBox">
          <div className="cancellationBoxContent">
            <div className="cancellationInfo">
                    <h1 className="cancellationTitle">Cancellation protection</h1>
                    <h2 className="cancellationDescription">During these uncertain times we recommend adding Cancellation protection to your booking</h2>
            </div>
          </div>
        </div>
         
            <div className="nested cancellationBox">
              <div className="nestedImgDiv">
                <img src={illness} className="nestedIconImg nestedImgDiv1" alt="Illness Icon" />
                <p>Illness</p>
              </div>
              <div className="nestedImgDiv nestedImgDiv1">
                <img src={weather} className="nestedIconImg nestedGroup1" alt="Weather Icon" />
                <p>Weather</p>
              </div>
              <div className="nestedImgDiv nestedImgDiv1">
                <img src={emergency} className="nestedIconImg" alt="Emergency Icon" />
                <p>Emergency</p>
              </div>
              <div className="nestedImgDiv nestedImgDiv2">
                <img src={refundable} className="nestedIconImg" alt="Refundable Icon" />
                <p>Refundable Booking</p>
              </div>
              <div className="nestedImgDiv nestedImgDiv2">
                <img src={breakdown} className="nestedIconImg" alt="Breakdown Icon" />
                <p>Mechanical Breakdown</p>
              </div>
              <div className="nestedImgDiv nestedImgDiv2">
                <img src={more} className="nestedIconImg" alt="More Icon" />
                <p>Plus much much more</p>
              </div>
            </div>
          </div>  
        </div>
  )
}

export default CancellationGrid
