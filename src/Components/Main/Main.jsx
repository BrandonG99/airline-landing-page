import React from 'react';
import './main.scss';
import '../../../src/animations.scss';
import search from '../../assets/icons/search.svg'
import choice from '../../assets/icons/choice.svg'
import service from '../../assets/icons/service.svg'
import payment from '../../assets/images/bnpl-mobile.png' 
import { AiFillCheckCircle } from 'react-icons/ai';
import laybuy from '../../assets/images/logos/laybuy.png' 
import klarna from '../../assets/images/logos/klarna.png' 
import afterpay from '../../assets/images/logos/afterpay.png' 
import affirm from '../../assets/images//logos/affirm.png'        
               
const Data = [        
  {    
    id: 1,
    imgSrc: search,
    cardTitle: 'Simple search',
    cardDescription: 'Easily search and book flights from anywhere in the world'
  },

  {
    id: 2,
    imgSrc: choice,
    cardTitle: 'Unlimited choice',
    cardDescription: 'Find the flight you were looking for and pay on your terms'
  },
        
  {
    id: 3,
    imgSrc: service,
    cardTitle: 'Expert customer service',
    cardDescription: 'Dedication customer support team once you have booked'
  }
]

const paymentData = [
  {
    id: 4, 
    paymentImg: payment,
    paymentTitle: 'Buy now, pay Later',
    paymentDescription: 'Book your flights today and spread the cost overtime with one of our instalment options.',
    paymentBulletPoint1: 'Make payments weekly or monthly',
    paymentBulletPoint2: 'Interest free options',
    paymentBulletPoint3: 'Fast approval',
    paymentMethodsButton: 'Browse payment methods'

  }
]

const Main = () => {
  return (
    <section className="main container section">        
      <div className="sectionTitle">
      </div>

      <div className="sectionContent grid">

        {      
          Data.map(({id, imgSrc, cardTitle, cardDescription}) => {
            return(
              <div key={id} className="singleCard"> 
   
                <div className="imageDiv">
                  <img src={imgSrc} className="cardImg" alt={cardTitle} />
                </div> 

                <div className="cardInfo">
                  <h3 className="cardTitle">{cardTitle}</h3>
                  <span className="cardDescription">{cardDescription}</span>    
                </div>              
              </div>
            ) 
          })
        }
      </div>

      <div className="paymentContent paymentCard grid">    

        {      
          paymentData.map(({id, paymentImg, paymentTitle, paymentDescription, paymentBulletPoint1, paymentBulletPoint2, paymentBulletPoint3, paymentMethodsButton}) => {
            return(
              <div key={id} className="paymentCard"> 

                    <div className="paymentLogos laybuyLogo">
                      <img src={laybuy} className="laybuyLogo" alt="Laybuy Logo" />
                    </div>

                    <div className="paymentLogos klarnaLogo">
                      <img src={klarna} className="klarnaLogo" alt="Klarna Logo" />
                    </div>

                    <div className="paymentLogos afterpayLogo">
                      <img src={afterpay} className="afterpayLogo" alt="Afterpay Logo" />
                    </div>

                    <div className="paymentLogos affirmLogo">
                      <img src={affirm} className="affirmLogo" alt="Affirm Logo" />
                    </div>

                    <div>
                      <img src={paymentImg} className="paymentImg" alt="{paymentTitle}" />
                    </div>

                <div className="paymentInfo">
                  <h3 className="paymentTitle">{paymentTitle}</h3>
                  <span className="paymentDescription">{paymentDescription}</span>

                  <span className="paymentBulletPoint1">
                    <AiFillCheckCircle className="greenTickIcon" />
                    {paymentBulletPoint1}
                  </span>

                  <span className="paymentBulletPoint2">           
                    <AiFillCheckCircle className="greenTickIcon" />{paymentBulletPoint2}
                  </span>

                  <span className="paymentBulletPoint3">
                    <AiFillCheckCircle className="greenTickIcon" />
                    {paymentBulletPoint3}
                  </span>

                  <button className="paymentMethodsButton" style={{fontSize: "0.85rem"}}>
                    {paymentMethodsButton}
                  </button>
                </div>
              </div>
            ) 
          })
        }
      </div>
    </section>
  )
}

export default Main