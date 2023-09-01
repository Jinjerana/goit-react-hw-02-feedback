import React from "react";
 

const Controls = ({good, neutral, bad}) => {{
return (
    <div className="Controls">
         <button type="button" onClick={good}>
        Goog</button>
        <button type="button" onClick={neutral}>
        Neutral</button>
        <button type="button" onClick={bad}>
        Bad</button>
</div>
)
}}
// <div>
//     {options.map(option => {
//         return (
//           <li key={option}>
//             <button
//               key={option}
//               type="button"
//               value={option}
//               children={option}
//               onClick={() => onLeaveFeedback(option)}
//             >
//               {option}
//             </button>
//           </li>
//         );
//       })}
//       </div>



export default Controls