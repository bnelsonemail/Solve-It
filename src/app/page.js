'use client';

import Display from "@/components/Display";
import NumberButton from "@/components/NumberButton";
import OperationButton from "@/components/OperationButton";
import ScientificButton from "@/components/ScientificButton";
import { useState } from "react";
import useBasicCalculator from "@/utils/BasicCalculator";


export default function Home() {
  const {
    currentValue,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
  } = useBasicCalculator(); // Use the logic

  const numberButtons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "00",
    ".",
  ];

  const operationButtons = ["+", "-", "*", "/"];

const scientificButtons = [
  "sin",
  "ln",
  "cos",
  "log",
  "tan",
  "sqrt",
  "EXP",
  "x^2",
]

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
      <div className="flex flex-col bg-gradient-to-bl from-black via-gray-800 to-black w-[400px] h-fit rounded-xl p-6 gap-6 shadow-lg shadow-black/50">
        <Display value={currentValue}/>
        <div className="flex flex-row w-full gap-4">
          <div className="w-2/3 grid grid-cols-3 gap-2">
            {numberButtons.map((button) => (
              <NumberButton key={button} button={button} onClick = {() => handleNumberClick(button)} />
            ))}
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            {operationButtons.map((button) => (
              <OperationButton key={button} button={button} onClick = {() => handleOperatorClick(button)} />
            ))}
          </div>
          <div className="w-2/3 grid grid-cols-2 gap-2">
            {scientificButtons.map((button) => (
              <ScientificButton key={button} button={button}  />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-blue-600 rounded-lg h-12 text-white"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-gray-600 rounded-lg h-12 text-white"
            onClick={handleEqualsClick}
          >
            =
          </button>

        </div>
      </div>
    </div>
  );
}
