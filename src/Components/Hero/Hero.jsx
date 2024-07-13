import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/bank.png'
import arrow_icon from '../Assets/upload.png'
import hero_img from '../Assets/unisex1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className="hero-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="" />
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow_icon} alt="" />
</div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero

// sent to Shop.jsx 
