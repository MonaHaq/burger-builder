
import { useState, useId } from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
//import Burger from './components/Burger/Burger';
//import Actions from './components/Actions/Actions';
import './styles.css';
import './Burger.style.css';
import './Action.style.css';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [lettuceCount, setLettuceCount] = useState(0);
  const [baconCount, setBaconCount] = useState(0);
  const [cheeseCount, setCheeseCount] = useState(0);
  const [meatCount, setMeatCount] = useState(0);

  const hasIngredients =
    lettuceCount > 0 || baconCount > 0 || cheeseCount > 0 || meatCount > 0;

  const handleLoginClick = () => {
    // showLogin = true;
    setShowLogin(true);
    console.log('log in clicked');
  };

  const handleCheeseIncrement = () => {
    setCheeseCount(cheeseCount + 1);
  };

  const handleCheeseDecrement = () => {
    setCheeseCount(cheeseCount - 1);
  };

  const handleLettuceIncrement = () => {
    setLettuceCount(lettuceCount + 1);
  };

  const handleLettuceDecrement = () => {
    setLettuceCount(lettuceCount - 1);
  };

  const handleBaconIncrement = () => {
    setBaconCount(baconCount + 1);
  };

  const handleBaconDecrement = () => {
    setBaconCount(baconCount - 1);
  };

  const handleMeatIncrement = () => {
    setMeatCount(meatCount + 1);
  };

  const handleMeatDecrement = () => {
    setMeatCount(meatCount - 1);
  };

  return (
    <div className='App'>
      <Header onLoginClick={handleLoginClick} />
      {showLogin && <LoginForm />}
      <div className='Container'>
        <div className='TopBread'>
          <div className='Seeds'></div>
          <div className='Seeds2'></div>
        </div>
        {hasIngredients ? (
          <>
            {Array(cheeseCount)
              .fill(null)
              .map(() => (
                <div className='Cheese'></div>
              ))}

            {Array(lettuceCount)
              .fill(null)
              .map(() => (
                <div className='Lettuce'></div>
              ))}

            {Array(baconCount)
              .fill(null)
              .map(() => (
                <div className='Bacon'></div>
              ))}

            {Array(meatCount)
              .fill(null)
              .map(() => (
                <div className='Meat'></div>
              ))}
          </>
        ) : (
          <p>No Ingredients Added </p>
        )}
        <div className='BottomBread'></div>
      </div>
      <div className='ActionsContainer'>
        <p>
          Current price: <strong>$7.30</strong>
        </p>
        <div className='ActionItems'>
          <div className='Label'>Lettuce</div>
          <button
            className='ButtonLess'
            disabled={!lettuceCount}
            onClick={handleLettuceDecrement}
          >
            Less
          </button>
          <button className='ButtonMore' onClick={handleLettuceIncrement}>
            More
          </button>
        </div>
        <div className='ActionItems'>
          <div className='Label'>Bacon</div>
          <button
            className='ButtonLess'
            disabled={!baconCount}
            onClick={handleBaconDecrement}
          >
            Less
          </button>
          <button className='ButtonMore' onClick={handleBaconIncrement}>
            More
          </button>
        </div>
        <div className='ActionItems'>
          <div className='Label'>Cheese</div>
          <button
            className='ButtonLess'
            disabled={!cheeseCount}
            onClick={handleCheeseDecrement}
          >
            Less
          </button>
          <button className='ButtonMore' onClick={handleCheeseIncrement}>
            More
          </button>
        </div>
        <div className='ActionItems'>
          <div className='Label'>Meat</div>
          <button
            className='ButtonLess'
            disabled={!meatCount}
            onClick={handleMeatDecrement}
          >
            Less
          </button>
          <button className='ButtonMore' onClick={handleMeatIncrement}>
            More
          </button>
        </div>
        <button className='SignUpButton'>SIGN UP TO ORDER</button>
      </div>
    </div>
  );
}
