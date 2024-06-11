import React from 'react';
import './calculator-button.scss';

interface CalculatorElProps {
    text: string;
    color: string;
    shape: 'round' | 'oval';
    width?: string;
    onClick: (text: string) => void;

}

export const CalculatorButton: React.FC<CalculatorElProps> = ({ text, color, shape, width, onClick }) => {
    const style = {
        backgroundColor: color,
        borderRadius: shape === 'round' ? '50%' : '40px',
        width: width || (shape === 'round' ? '82px' : '164px'),

    };

    const handleClick = () => {
        onClick(text);
    };

    return (
        <div style={style} className={`el ${shape}`} onClick={handleClick}>
            <div className="el">{text}</div>
        </div>
    );
};
