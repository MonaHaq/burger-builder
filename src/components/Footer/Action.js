import React from "react";
import "./Footer.style.css";

function Action(props) {
  const {name, isDisabled, handleChange} = props;

  return (
    <div className="ActionItems">
      <div className="Label">{name}</div>
      <button
        className="ButtonLess"
        disabled={isDisabled}
        onClick={() => handleChange(name, false)}
      >
        Less
      </button>
      <button
        className="ButtonMore"
        onClick={() => handleChange(name, true)}
      >
        More
      </button>
    </div>
  );
}

export default Action;
