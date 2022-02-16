import React from 'react'
import logo from '../images/logo.png';
import Star from '../images/Star.png';
import Menu from '../images/Menu.png';
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div> <header className="App-header">
    <img className='Logo' src={logo} alt='this is the logo'/> 
    <img className='star' src={Star} alt='this is the fav'/> 
    <img className='menu' src={Menu} alt='this is the menu'/> 
    </header></div>
  )
}

export  {Navbar}