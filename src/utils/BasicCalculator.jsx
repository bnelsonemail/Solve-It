import React from 'react'
import { useState } from 'react'

export default function useBasicCalculator() {
    // Define State for the calculator
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);

    // Handle number input
    const handleNumberClick = (number) => {
        setCurrentValue((prev) => {
            if (number === '.' && prev.includes('.')) return prev; // Prevent multiple decimals
            if (prev === '0' && number === '0') return '0'; // Prevent multiple leading zeros
            if (prev.length >= 10) return prev; // Limit number length
            return prev === '0' ? number : prev + number;
        });
    };

    // Handle operator input
    const handleOperatorClick = (op) => {
        if (operator) basicCalculation(); // Perform pending operation
        setOperator(op);
        setPreviousValue(currentValue);
        setCurrentValue('0');
    };

    // Perform calculation
    const performCalculation =() => {
        if (!previousValue || !operator) return;

        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        if (isNaN(prev) || isNaN(current)) return;

        let result;
        switch (operator) {
            case '+':
                result = prev + current;
                break
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        };
        setCurrentValue(result.toString());
        setPreviousValue(null);
        setOperator(null);
    };

    // Handle equals click
    const handleEqualsClick = () => {
        if (previousValue && operator) {
          const result = performCalculation(previousValue, currentValue, operator);
          setCurrentValue(result.toString());
          setPreviousValue(null);
          setOperator(null);
        }
    };

    // Clear state
    const handleClearClick = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
    };
    
    return {
        currentValue,
        handleNumberClick,
        handleOperatorClick,
        handleEqualsClick,
        handleClearClick,
    }
}

