import React from 'react'
import Logo1 from '../images/Logo1.png';
import Star from '../images/Star.png';
import Menu from '../images/Menu.png';
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div> <header className="App-header">
      <img className='Logo1' src={Logo1} alt='this is the logo' />
      <img className='star' src={Star} alt='this is the fav' />
      <input type="checkbox" id='menu-button' />
      <label htmlFor="menu-button" className='menu-btn'>
        <img className='menu' src={Menu} alt='this is the menu' />
      </label>
      <ul className='menu-content'>
         <li className='active'> <a href="#">Usados</a></li>
         <li> <a href="#">Nuevos</a></li>
      </ul>
    </header></div>
  )
}

export { Navbar }