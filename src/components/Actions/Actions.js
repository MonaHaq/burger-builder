import React, { useState } from "react";

import Action from "./Action";

import "./Actions.style.css";

const initialPrice = 3;
const IngredientPrices = {
  meat: 1.3,
  cheese: 0.4,
  bacon: 0.7,
  lettuce: 0.5,
};

function Actions(props) {
  const { baconProps, cheeseProps, lettuceProps, meatProps } = props;
  const { bacon, meat, cheese, lettuce } = IngredientPrices;
  const totalPrice =
    initialPrice +
    baconProps.baconCount * bacon +
    cheeseProps.cheeseCount * cheese +
    lettuceProps.lettuceCount * lettuce +
    meatProps.meatCount * meat;

  return (
    <div className="ActionsContainer">
      <p>
        Current price: <strong>${totalPrice.toFixed(2)}</strong>
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
