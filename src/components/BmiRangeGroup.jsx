import React from "react";
import BmiRange from "./BmiRange";
import "./BmiRange.css";

const BmiRangeGroup = ({ bmiScore, color }) => {
  const calculateIndicatorPosition = (bmiScore) => {
    const bmi = parseFloat(bmiScore) || 0;
    let firstScoreRange, lastScoreRange;
    let firstPercentRange, lastPercentRange;

    if (bmi < 18.5) {
      firstScoreRange = 0;
      lastScoreRange = 18.49;
      firstPercentRange = 0;
      lastPercentRange = 25;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      firstScoreRange = 18.5;
      lastScoreRange = 24.9;
      firstPercentRange = 25;
      lastPercentRange = 50;
    } else if (bmi >= 25 && bmi <= 29.9) {
      firstScoreRange = 25;
      lastScoreRange = 29.9;
      firstPercentRange = 50;
      lastPercentRange = 75;
    } else {
      firstScoreRange = 30;
      lastScoreRange = 40;
      firstPercentRange = 75;
      lastPercentRange = 100;
    }

    const slope =
      (lastPercentRange - firstPercentRange) /
      (lastScoreRange - firstScoreRange);
    const intercept = firstPercentRange - slope * firstScoreRange;
    const percentage = Math.min(slope * bmi + intercept, 100);
    return Math.max(percentage, 0);
  };

  const position = calculateIndicatorPosition(bmiScore);

  return (
    <div className="bmi-range-group">
      <BmiRange className="underweight" textH5="Underweight" textH4="< 18.5" />
      <BmiRange className="normal" textH5="Normal" textH4="18.5 - 24.9" />
      <BmiRange className="overweight" textH5="Overweight" textH4="25 - 29.9" />
      <BmiRange className="obese" textH5="Obese" textH4="> 30" />
      <div
        id="bmiIndicator"
        className="bmi-indicator"
        style={{
          left: `${position}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default BmiRangeGroup;
