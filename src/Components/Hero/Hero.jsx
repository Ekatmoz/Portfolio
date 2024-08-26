import React from 'react'
import './Hero.css'
import profile_img from '../../assets/IMG_5508.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" width={220}/>
      <h1><span>I'm Katerina Szén,</span> frontend developer based in Hungary.</h1>
      <p>I am a frontend developer from Siófok, Hungary with 4 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero;