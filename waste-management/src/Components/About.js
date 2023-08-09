import React from 'react'
import Navbar from './Navbar'
import i from './about_img.png';

function About() {
  return (
    <div className='Dashboard'>
      <Navbar/>
        <div>
        <p className='Montserrat_gold0' style={{top:-100}}>ABOUT</p>
            <img src={i} style={{position:'absolute',top:400,left:500,height:300}} alt='Image'/>
        </div>
    </div>
  )
}

export default About