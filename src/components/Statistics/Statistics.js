import React from "react";
import Notification from "../Notification"

import { Title, Li,  } from "./Statistics.styled"

const Statistics = ({
    currentGood = 0,
  currentNeutral = 0,
  currentBad = 0,
  total = 0,
  positivePercentage = 0,
  
  }) => { 
        return total ? (
        <div>
        <Title>Statistics</Title>
        <ul>
            <Li>Good: <span>{currentGood}</span> </Li>
            <Li>Neutral: <span>{currentNeutral}</span></Li>
            <Li>Bad: <span>{currentBad}</span></Li>
            <Li>Total: <span>{total}</span></Li>
            <Li>Positive Feedback: <span>{positivePercentage}</span><span> % </span></Li>
        </ul>
        </div>
        ) : (
            <Notification msg="There is no feedback" />
        ) 
    }

export default Statistics