import React from "react";
import "./Burger.style.css";
import "./Ingredients.js";
import { useBurgerContext } from "../../contexts/BurgerContext";
import Ingredients from "./Ingredients.js";

function Burger(props) {
  const { ingredientsCount } = useBurgerContext();
  const { cheese, lettuce, bacon, meat } = ingredientsCount;

  const hasIngredients = lettuce > 0 || bacon > 0 || cheese > 0 || meat > 0;

  return (
    <div className="Container">
      <div className="TopBread">
        <div className="Seeds"></div>
        <div className="Seeds2"></div>
      </div>
      {hasIngredients ? (
        <>
          <Ingredients name="cheese" count={cheese} />
          <Ingredients name="lettuce" count={lettuce} />
          <Ingredients name="bacon" count={bacon} />
          <Ingredients name="meat" count={meat} />
        </>
      ) : (
        <p>No Ingredients Added </p>
      )}
      <div className="BottomBread"></div>
    </div>
  );
}

export default Burger;
