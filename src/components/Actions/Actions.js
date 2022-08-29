import React, { useState } from "react";
import "./Actions.style.css";

function Actions() {
  return (
    <div className="ActionsContainer">
      <p>
        Current price: <strong>$3.00</strong>
      </p>
      <div className="ActionItems">
        <div className="Label">Lettuce</div>
        <button className="ButtonLess">Less</button>
        <button className="ButtonMore">More</button>
      </div>
      <div className="ActionItems">
        <div className="Label">Bacon</div>
        <button className="ButtonLess">Less</button>
        <button className="ButtonMore">More</button>
      </div>
      <div className="ActionItems">
        <div className="Label">Cheese</div>
        <button className="ButtonLess">Less</button>
        <button className="ButtonMore">More</button>
      </div>
      <div className="ActionItems">
        <div className="Label">Meat</div>
        <button className="ButtonLess">Less</button>
        <button className="ButtonMore">More</button>
      </div>
      <button className="SignUpButton">SIGN UP TO ORDER</button>
    </div>
  );
}

export default Actions;
