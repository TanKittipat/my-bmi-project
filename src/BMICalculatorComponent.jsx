// src/BMICalculatorComponent.jsx
import React, { useState } from "react";
import BMICalculator from "./BMICalculator";

function BMICalculatorComponent() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleCalculate = () => {
    const calculator = new BMICalculator();
    const bmiValue = calculator.calculateBMI(
      parseFloat(weight),
      parseFloat(height)
    );
    const interpretationValue = calculator.interpretBMI(bmiValue);

    setBMI(bmiValue.toFixed(2));
    setInterpretation(interpretationValue);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">BMI Calculator</h1>
      <div className="mb-4 w-full max-w-xs">
        <label className="block text-sm text-left font-medium text-gray-700">
          Weight (kg):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4 w-full max-w-xs">
        <label className="block text-sm text-left font-medium text-gray-700">
          Height (m):
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <button onClick={handleCalculate} className="btn btn-primary mb-4">
        Calculate BMI
      </button>
      {bmi && <p className="text-lg font-semibold">Your BMI is: {bmi}</p>}
      {interpretation && <p className="text-lg">{interpretation}</p>}
    </div>
  );
}

export default BMICalculatorComponent;
