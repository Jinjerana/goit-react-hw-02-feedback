import React from "react"

import { Button } from "./Counter.styled"

const Counter = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => {
                return (
                    <span key={option}>
                        <Button
                        key={option}
                        typr="button"
                        value={option}
                        children={option}
                        onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </Button>
                    </span>
                )
            })}
        </div>
    )
}

// const Counter = ({ good, neutral, bad }) => {
    
//     return (
//         <div> 
//             <div className="Counter">
//                 <Button type="button" onClick={good}>
//                     Good</Button>
//                 <Button type="button" onClick={neutral}>
//                     Neutral</Button>
//                 <Button type="button" onClick={bad}>
//                     Bad</Button>
//             </div>
//         </div>
//   );
// };

export default Counter