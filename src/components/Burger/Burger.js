import React from "react";
import "./Burger.style.css";

function Burger(props) {
  const { cheeseCount, lettuceCount, baconCount, meatCount } = props;
  
  const hasIngredients =
    lettuceCount > 0 || baconCount > 0 || cheeseCount > 0 || meatCount > 0;

  return (
    <div className="Container">
      <div className="TopBread">
        <div className="Seeds"></div>
        <div className="Seeds2"></div>
      </div>
      {hasIngredients ? (
        <>
          {Array(cheeseCount)
            .fill(null)
            .map(() => (
              <div className="Cheese"></div>
            ))}

          {Array(lettuceCount)
            .fill(null)
            .map(() => (
              <div className="Lettuce"></div>
            ))}

          {Array(baconCount)
            .fill(null)
            .map(() => (
              <div className="Bacon"></div>
            ))}

          {Array(meatCount)
            .fill(null)
            .map(() => (
              <div className="Meat"></div>
            ))}
        </>
      ) : (
        <p>No Ingredients Added </p>
      )}
      <div className="BottomBread"></div>
    </div>
  );
}

export default Burger;
