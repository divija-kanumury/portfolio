import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Divija</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Experience</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#books'>Books</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/divija-kanumury/" target='_blank'><BsLinkedin className='footer_logo'/></a>
        <a href="https://github.com/divija-kanumury" target='_blank'><FaGithub className='footer_logo'/></a>
        <a href="https://leetcode.com/divi22/" target='_blank'><SiLeetcode className='footer_logo'/></a>
      </div>

      <div className="footer_container">
        <small>&copy; Divija Kanumury. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
