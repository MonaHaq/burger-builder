import React from 'react';
import './Burger.style.css';

function Burger() {
  return (
    <div className='Container'>
      <div className='TopBread'>
        <div className='Seeds'></div>
        <div className='Seeds2'></div>
      </div>
      <div className='Lettuce'></div>
      <div className='Bacon'></div>
      <div className='Cheese'></div>
      <div className='Meat'></div>
      <div className='BottomBread'></div>
    </div>
  );
}

export default Burger;
