import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/divija-kanumury/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/divija-kanumury" target='_blank'><FaGithub/></a>
      <a href="https://leetcode.com/divi22/" target='_blank'><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials
