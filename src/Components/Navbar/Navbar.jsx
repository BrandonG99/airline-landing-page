import React, { useState } from 'react';
import './navbar.scss';
import { AiOutlineDown } from 'react-icons/ai';
import alternativeAirlinesLogo from '../../assets/images/logos/alternative-airlines.jpg'    
import alternativeAirlinesLogoNoBkg from '../../assets/images/logos/alternative-airlines-no-bkg.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navContainer">
        <div className="items">
         <a href="#"><img src={alternativeAirlinesLogoNoBkg} className="navLogo" alt="Alternative Airlines Logo" /></a>

          <ul className="navLeftSide" style={{marginLeft:"2.25rem"}}>
            <li className="item navItem1">  
              Book flights 
              {/* <AiOutlineDown style={{fontSize: "0.8rem", fontWeight:"0.8rem"}}/> */}
            </li> 
            <li className="item navItem2">
              Information 
              {/* <AiOutlineDown style={{fontSize:"0.8rem"}}/>  */}
            </li> 
            <li className="item navItem3">
              Help 
              {/* <AiOutlineDown style={{fontSize:"0.8rem"}}/> */}
            </li> 
            <li className="item navItem4">
              Travel Agents
            </li> 
          </ul>

            <ul className="navRightSide" style={{marginLeft:"22.25rem"}}>
              <li className="iteam navItem5">
                Manage Booking
              </li>
            </ul>
         </div>
        </nav>
      </div>

  );
};

export default Navbar;