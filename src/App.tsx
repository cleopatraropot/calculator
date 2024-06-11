import React from 'react';
import './App.scss';
import CalculatorEl from "./components/calculator-el";

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
                <CalculatorEl text="0" color="#3E4047" shape="oval"/>
                <CalculatorEl text="." color="#3E4047" shape="round"/>
                <CalculatorEl text="=" color="#EA9B3E" shape="round"/>
                <CalculatorEl text="1" color="#3E4047" shape="round"/>
                <CalculatorEl text="2" color="#3E4047" shape="round"/>
                <CalculatorEl text="3" color="#3E4047" shape="round"/>
                <CalculatorEl text="+" color="#EA9B3E" shape="round"/>
                <CalculatorEl text="4" color="#3E4047" shape="round"/>
                <CalculatorEl text="5" color="#3E4047" shape="round"/>
                <CalculatorEl text="6" color="#3E4047" shape="round"/>
                <CalculatorEl text="-" color="#EA9B3E" shape="round"/>
                <CalculatorEl text="7" color="#3E4047" shape="round"/>
                <CalculatorEl text="8" color="#3E4047" shape="round"/>
                <CalculatorEl text="9" color="#3E4047" shape="round"/>
                <CalculatorEl text="x" color="#EA9B3E" shape="round"/>
                <CalculatorEl text="C" color="#C1C1C1" shape="round"/>
                <CalculatorEl text="DEL" color="#C1C1C1" shape="round"/>
                <CalculatorEl text="%" color="#C1C1C1" shape="round"/>
                <CalculatorEl text="/" color="#EA9B3E" shape="round"/>

              </div>
            </div>
          </div>
        </div>

      </div>
  );
}

export default App;
