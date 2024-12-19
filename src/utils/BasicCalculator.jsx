import React from 'react'
import { useState } from 'react'

function BasicCalculator() {
    // Define State for the calculator
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);

    // Clear state
    const handleClear = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
    };

    // Handle number input
    const handleNumberClick = (number) => {
        setCurrentValue ((prev) => (prev === '0' ? number : prev + number));
    };

    // Handle operator input
    const handleOperatorClick = (op) => {
        setOperator(op);
        setPreviousValue(currentValue);
        setCurrentValue('0');
    };

    // Perform calculation
    const basicCalculation =() => {
        if (previousValue === null || operator === null) return;

        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);

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
    }
}

export default BasicCalculator