import React from 'react';
import './Header.scss';
import calculator from '../images/calculator.svg';

const Header = () => {
  return ( 
    <header>
      <h1>Split-Up</h1>
      <img src={calculator} alt='calculator'/>
    </header>
  );
}

export default Header;