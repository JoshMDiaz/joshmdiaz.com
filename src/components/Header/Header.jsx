import React from 'react'
import logo from '../../images/logo.svg'
import NavButton from '../Nav/NavButton'
import Slide from 'react-reveal/Slide'

const Header = () => (
  <header>
    <Slide left>
      <img src={logo} alt="logo" />
    </Slide>
    <Slide right>
      <NavButton />
    </Slide>
  </header>
)

export default Header
