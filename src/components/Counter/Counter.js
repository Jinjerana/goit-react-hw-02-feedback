import React from "react"

import Controls from "./Controls";


const Counter = ({ good, neutral, bad }) => {
    
    return (
        <div>
            
            <div className="Controls">
         <button type="button" onClick={good}>
        Goog</button>
        <button type="button" onClick={neutral}>
        Neutral</button>
        <button type="button" onClick={bad}>
        Bad</button>
            </div>
      
    </div>
  );
};

export default Counter