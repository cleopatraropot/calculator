import React, {useState} from 'react';
import './App.scss';
import {CalculatorButton, CalculatorDisplay} from './components';
import { evaluate } from 'mathjs';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');


  const handleButtonClick = (text: string) => {
    if (text === '=') {
      try {
        const evaluationResult = evaluate(displayValue);
        setResult(evaluationResult.toString());
      } catch (error) {
        setDisplayValue('Error');
        setResult('');
      }
    } else if (text === 'C') {
      setDisplayValue('');
      setResult('');
    } else if (text === 'DEL') {
      setDisplayValue((prevValue) => prevValue.slice(0, -1));
    } else {
      setDisplayValue((prevValue) => prevValue + text);
    }
  };

  return (
      <div>
        <div className="container">
          <h1>This is a calculator!</h1>
          <h2>Use this :)</h2>
          <div className="iphone-frame">
            <div className="calculator">
              <CalculatorDisplay value={displayValue} result={result}/>
              <div className="el-group">
                <CalculatorButton text="0" color="#3E4047" shape="oval" onClick={handleButtonClick}/>
                <CalculatorButton text="." color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="=" color="#EA9B3E" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="1" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="2" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="3" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="+" color="#EA9B3E" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="4" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="5" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="6" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="-" color="#EA9B3E" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="7" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="8" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="9" color="#3E4047" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="*" color="#EA9B3E" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="C" color="#C1C1C1" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="DEL" color="#C1C1C1" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="%" color="#C1C1C1" shape="round" onClick={handleButtonClick}/>
                <CalculatorButton text="/" color="#EA9B3E" shape="round" onClick={handleButtonClick}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
