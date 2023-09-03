import React from "react"

import { Button } from "./Counter.styled"

const Counter = ({ good, neutral, bad }) => {
    
    return (
        <div> 
            <div className="Counter">
                <Button type="button" onClick={good}>
                    Good</Button>
                <Button type="button" onClick={neutral}>
                    Neutral</Button>
                <Button type="button" onClick={bad}>
                    Bad</Button>
            </div>
        </div>
  );
};

export default Counter