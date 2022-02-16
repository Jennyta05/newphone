import logo from './images/logo.png';
import Star from './images/Star.png';
import Menu from './images/Menu.png';
import Component1 from './images/Component1.png';
import footer from './images/footer.png';
import './App.css';

function App() {
  return (
   <>
   <div className="App">
      <header className="App-header">
      <img className='Logo' src={logo} alt='this is the logo'/> 
      <img className='star' src={Star} alt='this is the fav'/> 
      <img className='menu' src={Menu} alt='this is the menu'/> 
      </header>
      <body className='App-body'>
      <img className='banner' src={Component1} alt='this is the logo'/> 
      </body>
      <footer className='App-footer'>
      <img className='footer' src={footer} alt='this is the footer'/> 
      </footer>
    </div>
    </>
  );
}

export default App;
