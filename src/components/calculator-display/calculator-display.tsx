import React from 'react';
import './calculator-display.scss';

interface CalculatorDisplayProps {
    value: string;
}

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
    return (
        <div className="calculator-display">
            {value}
        </div>
    );
};
