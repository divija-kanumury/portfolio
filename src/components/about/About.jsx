import React from 'react'
import './about.css'
import ME from '../../assets/reading7.jpg'
import {FaAward} from 'react-icons/fa'
import {PiCertificateBold} from 'react-icons/pi'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About img"/>
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ year as a Software Engineer</small>
            </article>
            <article className='about_card'>
              <PiCertificateBold className='about_icon'/>
              <h5>Masters</h5>
              <small>University of Florida</small>
            </article>
            <article className='about_card'>
              <PiCertificateBold className='about_icon'/>
              <h5>Bachelors</h5>
              <small>JNTU Hyderabad</small>
            </article>
          </div>
          <p>
            Hi! My name is Divija Kanumury. I am a current masters student at 
            University of Florida with 12+ months experience as a Software Engineer.
            I previously worked at Honeywell and interned at Honeywell and OSI Digital.
            I am open to roles that will help me leverage my skills into practice.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
