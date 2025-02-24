import React from "react";
import InputBox from "./InputBox";
import stylesInputBox from "./InputGroup.module.css";

const InputGroup = ({ weight, height, weightHandler, heightHandler }) => {
  return (
    <div className={stylesInputBox.inputGroup}>
      <InputBox
        value={weight}
        onValueChange={weightHandler}
        text="Weight (kg)"
        id="weightInput"
        forId="weightInput"
      />
      <InputBox
        value={height}
        onValueChange={heightHandler}
        text="Height (cm)"
        id="heightInput"
        forId="heightInput"
      />
    </div>
  );
};

export default InputGroup;
