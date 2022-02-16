import { Carousel } from 'bootstrap';
import React from 'react'
import Component1 from '../images/Component1.png';
import footer from '../images/footer.png';
import "../styles/home.css"

const Home = () => {
  return (
    <div><body className='App-body'>
    <img className='banner' src={Component1} alt='this is the logo'/> 
    </body>
   
    <footer className='App-footer'>
    <img className='footer' src={footer} alt='this is the footer'/> 
    </footer></div>
  )
}

export  {Home}