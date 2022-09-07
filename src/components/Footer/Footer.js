import React from "react";
import Action from "./Action";
import { useBurgerContext } from "../../contexts/BurgerContext";
import "./Footer.style.css";

function Actions() {
  const { basePrice, ingredients, handleIngredientsChange } =
    useBurgerContext();

  const totalPrice = ingredients.reduce(
    (acc, curr) => acc + curr.count * curr.price,
    basePrice
  );

  return (
    <div className="ActionsContainer">
      <p>
        Current price: <strong>${totalPrice.toFixed(2)}</strong>
      </p>

      {ingredients.map((ing) => {
        return (
          <Action
            key={ing.name}
            name={ing.name}
            isDisabled={!ing.count}
            handleChange={handleIngredientsChange}
          />
        );
      })}

      <button className="SignUpButton">SIGN UP TO ORDER</button>
    </div>
  );
}

export default Actions;
