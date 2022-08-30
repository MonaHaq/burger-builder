import React, { useState } from "react";

import Action from "./Action";

import "./Actions.style.css";

function Actions(props) {
  const { baconProps, cheeseProps, lettuceProps, meatProps } = props;

  return (
    <div className="ActionsContainer">
      <p>
        Current price: <strong>$7.30</strong>
      </p>

      <Action
        name="Lettuce"
        isDisabled={!lettuceProps.lettuceCount}
        handleIncrement={lettuceProps.handleLettuceIncrement}
        handleDecrement={lettuceProps.handleLettuceDecrement}
      />

      <Action
        name="Bacon"
        isDisabled={!baconProps.baconCount}
        handleIncrement={baconProps.handleBaconIncrement}
        handleDecrement={baconProps.handleBaconDecrement}
      />

      <Action
        name="Cheese"
        isDisabled={!cheeseProps.cheeseCount}
        handleIncrement={cheeseProps.handleCheeseIncrement}
        handleDecrement={cheeseProps.handleCheeseDecrement}
      />

      
      <Action
        name="Meat"
        isDisabled={!meatProps.meatCount}
        handleIncrement={meatProps.handleMeatIncrement}
        handleDecrement={meatProps.handleMeatDecrement}
      />

      <button className="SignUpButton">SIGN UP TO ORDER</button>
    </div>
  );
}

export default Actions;
