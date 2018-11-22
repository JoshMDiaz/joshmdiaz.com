import React from 'react'
import logo from '../../images/logo.svg'
import NavButton from '../NavButton/NavButton';

const Header = () => (
  <header>
    <img src={logo} alt="logo"/>
    <NavButton />
  </header>
)

export default Header
