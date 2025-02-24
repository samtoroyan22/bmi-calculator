import React from "react";
import "./BmiRange.css";

const BmiRange = ({ className, textH4, textH5 }) => {
  return (
    <>
      <section className={className}>
        <div className="bmi-line"></div>
        <h5 className="bmi-label">{textH5}</h5>
        <h4 className="bmi-number">{textH4}</h4>
      </section>
    </>
  );
};

export default BmiRange;
