import React, {useState, useRef, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './australiaSlider.scss';
import sydney from '../../assets/images/destinations/sydney.jpg'; 
import melbourne from '../../assets/images/destinations/melbourne.jpg';
import brisbane from '../../assets/images/destinations/brisbane.jpg'
import goldCoast from '../../assets/images/destinations/gold-coast.jpg';
import cairns from '../../assets/images/destinations/cairns.jpg';
import uluru from '../../assets/images/destinations/uluru.jpg';

const australiaData = [
  {
    id: 1,
    imgSrc: sydney,
    destination: 'Sydney',
    destinationSubtitle: 'Australia',
  },
  {
    id: 2,
    imgSrc: melbourne,
    destination: 'Melbourne',
    destinationSubtitle: 'Australia',
  },
  {
    id: 3,
    imgSrc: brisbane,
    destination: 'Brisbane',
    destinationSubtitle: 'Australia',
  },
  {
    id: 4,
    imgSrc: goldCoast,
    destination: 'Gold Coast',
    destinationSubtitle: 'Australia',
  },
  {
    id: 5,
    imgSrc: cairns,
    destination: 'Cairns',
    destinationSubtitle: 'Australia',
  },
  {
    id: 6,
    imgSrc: uluru,
    destination: 'Uluru',
    destinationSubtitle: 'Australia',
  }
]

const AustraliaSlider = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: false,     
    speed: 500, 
    slidesToShow: 3,
    slidesToScroll: 2,    
    initialSlide: 0,
    draggable: false,                  
    responsive: [              
      {
        breakpoint: 1024,    
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleErrorImage = (australiaData) => {
    setDefaultImage((prev) => ({
      ...prev,
      [australiaData.target.alt]: australiaData.target.alt,
      linkDefault: sydney,
    }));
  };

  return (
    <div className="australiaSlider">
      <div className="australiaSliderTitle">
        <h1>Exploring Australia</h1>
      </div>
      <Slider {...settings} className="">
        {australiaData.map((item) => (
          <div className="card-container">
          <div className="card">
            <div className="card-top">
              <div className="card-top-img">
              <img 
                src={defaultImage[item.destination] === item.destination 
                ? defaultImage.linkDefault
                : item.imgSrc
                } 
                className="card-img"
                alt={item.title} 
                onError={handleErrorImage}
              />
              </div>
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.destination}</h3>
              <span>{item.destinationSubtitle}</span>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default AustraliaSlider
