import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [changeColor, setChangeColor] = useState('#999111');
  const handelChange = () => {
    setCounter(counter + 1);
  };
  const handelChangeColor = () => {
   const randomColor = '#' + Math.random().toString(16).slice(2,8)
   setChangeColor(randomColor)
  };

  return (
 
    
      <div className="centerConater">
        <div className="main" style={{backgroundColor:'	#d3d3d3'}}>
          <div className="center" style={{backgroundColor:`${changeColor}` }}>
            <p className="showCounter">{counter}</p>
            <button className="counterbutton" onClick={handelChange}>
              increase counter
            </button>
          </div>
        </div>
        <button className="counterbutton" onClick={handelChangeColor}>ChangeColor</button>
      </div>
   
  );
}
