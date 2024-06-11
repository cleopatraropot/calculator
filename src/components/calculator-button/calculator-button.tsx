import React from 'react';
import './calculator-button.scss';

interface CalculatorElProps {
    text: string;
    color: string;
    shape: 'round' | 'oval';
    width?: string;
}

export const CalculatorButton: React.FC<CalculatorElProps> = ({ text, color, shape, width }) => {
    const style = {
        backgroundColor: color,
        borderRadius: shape === 'round' ? '50%' : '40px',
        width: width || (shape === 'round' ? '82px' : '164px'),
    };

    return (
        <div style={style} className={`el ${shape}`}>
            <div className="el">{text}</div>
        </div>
    );
};
