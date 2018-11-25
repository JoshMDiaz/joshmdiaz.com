import React from 'react'
import logo from '../../images/logo.svg'
import NavButton from '../Nav/NavButton';

const Header = () => (
  <header>
    <img src={logo} alt="logo"/>
    <NavButton />
  </header>
)

export default Header
