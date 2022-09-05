import React from "react";
import Action from "./Action";
import { useBurgerContext } from "../../contexts/BurgerContext";
import "./Footer.style.css";

const initialPrice = 3;

const IngredientPrices = {
  meatPrice: 1.3,
  cheesePrice: 0.4,
  baconPrice: 0.7,
  lettucePrice: 0.5,
};

function Actions(props) {
  const { ingredientsCount, handleIngredientsChange } = useBurgerContext();
  const {
    bacon: baconCount,
    cheese: cheeseCount,
    lettuce: lettuceCount,
    meat: meatCount,
  } = ingredientsCount;
  const { baconPrice, meatPrice, cheesePrice, lettucePrice } = IngredientPrices;
  const totalPrice =
    initialPrice +
    baconPrice * baconCount +
    cheesePrice * cheeseCount +
    lettucePrice * lettuceCount +
    meatPrice * meatCount;

  return (
    <div className="ActionsContainer">
      <p>
        Current price: <strong>${totalPrice.toFixed(2)}</strong>
      </p>

      <Action
        name="lettuce"
        isDisabled={!lettuceCount}
        handleChange={handleIngredientsChange}
      />

      <Action
        name="bacon"
        isDisabled={!baconCount}
        handleChange={handleIngredientsChange}
      />

      <Action
        name="cheese"
        isDisabled={!cheeseCount}
        handleChange={handleIngredientsChange}
      />

      <Action
        name="meat"
        isDisabled={!meatCount}
        handleChange={handleIngredientsChange}
      />

      <button className="SignUpButton">SIGN UP TO ORDER</button>
    </div>
  );
}

export default Actions;
