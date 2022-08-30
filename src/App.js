import { useState, useId } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Burger from "./components/Burger/Burger";
import Actions from "./components/Actions/Actions";

import "./styles.css";
import { getByDisplayValue } from "@testing-library/react";



export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [lettuceCount, setLettuceCount] = useState(0);
  const [baconCount, setBaconCount] = useState(0);
  const [cheeseCount, setCheeseCount] = useState(0);
  const [meatCount, setMeatCount] = useState(0);

  const handleLoginClick = () => {
    // showLogin = true;
    setShowLogin(true);
    console.log("log in clicked");

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

  const lettuceProps = {lettuceCount, handleLettuceIncrement, handleLettuceDecrement};
  const cheeseProps = {cheeseCount, handleCheeseIncrement, handleCheeseDecrement};
  const baconProps = {baconCount, handleBaconIncrement, handleBaconDecrement};
  const meatProps = {meatCount, handleMeatIncrement, handleMeatDecrement};


  return (
    <div className="App">
      <Header onLoginClick={handleLoginClick} />
      {showLogin && <LoginForm />}

      <Burger
        lettuceCount={lettuceCount}
        baconCount={baconCount}
        cheeseCount={cheeseCount}
        meatCount={meatCount}
      />

      <Actions
        lettuceProps={lettuceProps}
        meatProps={meatProps}
        baconProps={baconProps}
        cheeseProps={cheeseProps}
       />
    </div>
  );
}
