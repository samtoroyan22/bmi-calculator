import React from "react";
import stylesInputBox from "./InputGroup.module.css";

const InputBox = ({ value, text, id, forId, onValueChange }) => {
  const onInputHandler = (event) => {
    const value = event.target.value;
    if (!/^[0-9]\d*\.?\d*$/.test(value)) {
      event.target.value = value.replace(/[^0-9.]/g, "");
      const parts = event.target.value.split(".");
      if (parts.length > 2) {
        event.target.value = parts[0] + "." + parts.slice(1).join("");
      }
    }
    onValueChange(event.target.value);
  };

  return (
    <section className={stylesInputBox.inputBox}>
      <label htmlFor={forId}>{text}</label>
      <input
        value={value}
        type="number"
        id={id}
        min="1"
        pattern="[0-9]*\,?[0-9]*"
        onInput={onInputHandler}
      />
    </section>
  );
};

export default InputBox;
