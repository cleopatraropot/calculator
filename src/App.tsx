import React from 'react';
import './App.scss';
import { CalculatorButton } from './components';

function App() {
  return (
      <div>
        <div className="container">
          <div className="iphone-frame">
            <div className="calculator">
              <div className="right-content-number">
                <p className="calculate">42*12</p>
                <p className="result">504</p>
              </div>
              <div className="el-group">
                <CalculatorButton text="0" color="#3E4047" shape="oval"/>
                <CalculatorButton text="." color="#3E4047" shape="round"/>
                <CalculatorButton text="=" color="#EA9B3E" shape="round"/>
                <CalculatorButton text="1" color="#3E4047" shape="round"/>
                <CalculatorButton text="2" color="#3E4047" shape="round"/>
                <CalculatorButton text="3" color="#3E4047" shape="round"/>
                <CalculatorButton text="+" color="#EA9B3E" shape="round"/>
                <CalculatorButton text="4" color="#3E4047" shape="round"/>
                <CalculatorButton text="5" color="#3E4047" shape="round"/>
                <CalculatorButton text="6" color="#3E4047" shape="round"/>
                <CalculatorButton text="-" color="#EA9B3E" shape="round"/>
                <CalculatorButton text="7" color="#3E4047" shape="round"/>
                <CalculatorButton text="8" color="#3E4047" shape="round"/>
                <CalculatorButton text="9" color="#3E4047" shape="round"/>
                <CalculatorButton text="x" color="#EA9B3E" shape="round"/>
                <CalculatorButton text="C" color="#C1C1C1" shape="round"/>
                <CalculatorButton text="DEL" color="#C1C1C1" shape="round"/>
                <CalculatorButton text="%" color="#C1C1C1" shape="round"/>
                <CalculatorButton text="/" color="#EA9B3E" shape="round"/>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
}

export default App;
