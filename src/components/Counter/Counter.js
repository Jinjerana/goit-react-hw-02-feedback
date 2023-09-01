import React from "react"

const Counter = ({ good, neutral, bad }) => {
    
    return (
        <div> 
            <div className="Counter">
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