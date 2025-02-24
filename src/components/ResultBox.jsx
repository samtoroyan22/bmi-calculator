import React from "react";
import "./ResultBox.css";

const ResultBox = ({ score, category, color }) => {
  return (
    <div className="resultBox">
      <h1 id="resultBmiScore" className="bmiScore" style={{ color: color }}>
        {score}
      </h1>
      <h3
        id="resultBmiCategory"
        className="bmiCategory"
        style={{ color: color }}
      >
        {category}
      </h3>
    </div>
  );
};

export default ResultBox;
