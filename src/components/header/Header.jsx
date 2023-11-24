import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/reading8.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h5>Hello I'm</h5>
        <h1>Divija Kanumury</h1>
        <h5 className='text-light'>Computer Science Graduate Student</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact'className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
