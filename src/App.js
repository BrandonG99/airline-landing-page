import React from 'react';
import './app.css';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SearchFlights from './Components/searchFlights/searchFlights';
import Main from './Components/Main/Main';
import AustraliaSlider from './Components/AustraliaSlider/AustraliaSlider';
import CancellationGrid from './Components/CancellationGrid/CancellationGrid';
import BlogSlider from './Components/BlogSlider/BlogSlider';
    
const App = () => {  
  return ( 
    <>          
    <Navbar />
    <Home />  
    <SearchFlights />
    <Main />  
    <AustraliaSlider />
    <CancellationGrid />
    <BlogSlider />
    </>
  )
}

export default App
