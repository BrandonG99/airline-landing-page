import React from 'react'
import {data} from '../../mockData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function BlogSlider() {
  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };


  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="blogSliderDiv relative flex items-center">
        {/* <MdChevronLeft className="leftArrow opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40} /> */}
        {/* <h2 style={{zIndex:"100"}}>Australia</h2> */}
        <div  
        id="slider"
        className="slider w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <img
            className="w-[880px] inline-block m-4 p-2" style={{borderRadius:"30px", marginRight:"0.5rem"}} src={item.img}
            alt=""
            />
          ))}
          <h2 style={{color:"white", zIndex:"100", marginTop:"-27.5rem", marginBottom:"26rem", marginLeft:"5rem", fontSize:"0.85rem", fontWeight:"300",}}>Travel advice</h2>
          <p style={{color:"white", zIndex:"100", marginTop:"-25.25rem", marginBottom:"25rem", marginLeft:"5rem", fontSize: "1.25rem"}}>Popular destinations with no travel
          </p>
          <p style={{color:"white", zIndex:"100", marginTop:"-25.25rem", marginBottom:"14rem", marginLeft:"5rem",fontSize: "1.25rem"}}>
          restrictions or quarantine
          <button style={{color:"white", display:"flex", flexDirection:"column", position:"relative", backgroundColor: "transparent", border:"1.5px solid white", borderRadius:"12.5px", padding:"1rem", paddingLeft:"1.5rem", paddingRight:"1.5rem", marginTop:"12.5rem"}}>Read blog article</button>
          </p>
        </div>

        {/* <MdChevronRight className="rightArrow opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40} /> */}
      </div>
    </>
  );
}

export default BlogSlider


