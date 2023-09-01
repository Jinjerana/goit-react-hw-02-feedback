import React from "react";

const Statistics = ({
    good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
  }) => { {
        return (
        <div>
        <h1>Statistics</h1>
        <ul>
            <li>Good: <span>{good}</span> </li>
            <li>Neutral: <span>{neutral}</span></li>
            <li>Bad: <span>{bad}</span></li>
            <li>Total: <span>{total}</span></li>
            <li>Positive Feedback: <span>{positivePercentage}</span></li>
        </ul>
        </div>
        )
    }
}

export default Statistics