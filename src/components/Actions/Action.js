import React from "react";
import "./Actions.style.css";

function Action(props) {
  const { name, isDisabled,  handleIncrement, handleDecrement} = props;

  return (
    <div className="ActionItems">
      <div className="Label">{name}</div>
      <button
        className="ButtonLess"
        disabled={isDisabled}
        onClick={handleDecrement}
      >
        Less
      </button>
      <button
        className="ButtonMore"
        onClick={handleIncrement}
      >
        More
      </button>
    </div>
  );
}

export default Action;
