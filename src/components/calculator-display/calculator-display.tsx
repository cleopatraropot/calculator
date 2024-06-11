import React from 'react';
import './calculator-display.scss';

interface CalculatorDisplayProps {
    value: string;
    result: string;
}

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value, result }) => {
    return (
        <div className="calculator-display">
            <div className="right-content-number">
                <p className="calculate">{value}</p>
                <p className="result">{result}</p>
            </div>
        </div>
    );
};
