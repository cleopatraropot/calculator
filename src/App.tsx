import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="iphone-frame">
        <div className="calculator">
          <div className="right-content-number">
            <p className="calculate">42*12</p>
            <p className="result">504</p>
          </div>
          <div className="el-group">
            <div className="el-l">0</div>
            <div className="el">.</div>
            <div className="el">=</div>
            <div className="el">1</div>
            <div className="el">2</div>
            <div className="el">3</div>
            <div className="el">+</div>
            <div className="el">4</div>
            <div className="el">5</div>
            <div className="el">6</div>
            <div className="el">-</div>
            <div className="el">7</div>
            <div className="el">8</div>
            <div className="el">9</div>
            <div className="el">x</div>
            <div className="el">C</div>
            <div className="el">DEL</div>
            <div className="el">%</div>
            <div className="el">/</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
