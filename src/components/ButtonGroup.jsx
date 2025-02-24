import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({ resetHandler }) => {
  return (
    <div className="button-group">
      <button id="resetButton" className="reset-button" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default ButtonGroup;
