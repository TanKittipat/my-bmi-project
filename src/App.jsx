import React from "react";
import "./App.css";
import BMICalculatorComponent from "./BMICalculatorComponent";

function App() {
  return (
    <div className="App p-4 bg-gray-100 min-h-[65vh] flex items-center justify-center">
      <BMICalculatorComponent />
    </div>
  );
}

export default App;
