import React from "react";
import "./Burger.style.css";
import "./Ingredients.js";
import { useBurgerContext } from "../../contexts/BurgerContext";
import Ingredients from "./Ingredients.js";

function Burger(props) {
  const { ingredients } = useBurgerContext();
  
  const hasIngredients = ingredients.some((ing) => ing.count > 0);

  return (
    <div className="Container">
      <div className="TopBread">
        <div className="Seeds"></div>
        <div className="Seeds2"></div>
      </div>
      {hasIngredients ? (
        <>
          {ingredients.map((ing) => {
            return (
              <Ingredients key={ing.name} name={ing.name} count={ing.count} />
            );
          })}
        </>
      ) : (
        <p>No Ingredients Added </p>
      )}
      <div className="BottomBread"></div>
    </div>
  );
}

export default Burger;
