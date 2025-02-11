import React, { useState } from "react";
import "../../input.css"; // Import CSS yang udah kita buat

export const TodoItem = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="calculator glow p-6 rounded-2xl shadow-2xl bg-gray-800">
        <input type="text" value={input} readOnly className="input-field" />
        <div className="grid-buttons">
          {["7", "8", "9", "/"].map((btn) => (
            <button key={btn} className="calc-btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button key={btn} className="calc-btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button key={btn} className="calc-btn" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["0", "C", "=", "+"].map((btn) => (
            <button
              key={btn}
              className="calc-btn"
              onClick={() => (btn === "C" ? handleClear() : btn === "=" ? handleCalculate() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

