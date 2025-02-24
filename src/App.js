import "./App.css";
import { useState, useEffect } from "react";
import BmiRangeGroup from "./components/BmiRangeGroup";
import ButtonGroup from "./components/ButtonGroup";
import InputGroup from "./components/InputGroup";
import ResultBox from "./components/ResultBox";

function App() {
  const [resultScore, setResultScore] = useState("0");
  const [resultCategory, setResultCategory] = useState("N/A");
  const [resultColor, setResultColor] = useState("#808080");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function weightHandler(weightInput) {
    setWeight(weightInput);
  }
  function heightHandler(heightInput) {
    setHeight(heightInput);
  }

  const calculateBmi = (weight, height) => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;
    if (
      isNaN(weightNum) ||
      isNaN(heightNum) ||
      weightNum <= 0 ||
      heightNum <= 0
    )
      return null;
    return parseFloat((weightNum / (heightNum * heightNum)).toFixed(1));
  };

  const getBmiCategory = (bmiScore) => {
    if (bmiScore < 18.5) return "Underweight";
    if (bmiScore <= 24.9) return "Normal";
    if (bmiScore <= 29.9) return "Overweight";
    return "Obese";
  };

  const getResultColor = (category) => {
    switch (category) {
      case "Underweight":
        setResultColor("#0000ff");
        break;
      case "Normal":
        setResultColor("#269a06");
        break;
      case "Overweight":
        setResultColor("#ff9900");
        break;
      case "Obese":
        setResultColor("#ff0000");
        break;
      default:
        setResultColor("#808080");
    }
  };

  useEffect(() => {
    if (weight === "" || height === "") {
      setResultScore("0");
      setResultCategory("N/A");
      setResultColor("#808080");
    } else {
      const bmiScore = calculateBmi(weight, height);
      if (bmiScore === null) {
        setResultScore("0");
        setResultCategory("N/A");
        setResultColor("#808080");
      } else {
        setResultScore(bmiScore);
        const category = getBmiCategory(bmiScore);
        setResultCategory(category);
        getResultColor(category);
      }
    }
  }, [weight, height]);

  function resetHandler() {
    setResultScore("0");
    setResultCategory("N/A");
    setResultColor("#808080");
    setWeight("");
    setHeight("");
  }

  return (
    <div className="App">
      <h1 className="title">BMI Calculator</h1>
      <InputGroup
        weight={weight}
        height={height}
        weightHandler={weightHandler}
        heightHandler={heightHandler}
      />
      <ResultBox
        score={resultScore}
        category={resultCategory}
        color={resultColor}
      />
      <BmiRangeGroup bmiScore={resultScore} color={resultColor} />
      <ButtonGroup resetHandler={resetHandler} />
    </div>
  );
}

export default App;
