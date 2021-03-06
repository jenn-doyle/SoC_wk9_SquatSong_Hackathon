import { useState } from "react";
import "./SquatInput.css";

//takes in function to send squats back up to app.

function SquatInput({ onClick }) {
  const [input, setInput] = useState(5);
  //let difficulty = 3;
  return (
    <form className="squat-input-form">
      <input
        className="squat-input-number"
        type="number"
        min="0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="squat-input-btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onClick(input);
                  }}
        >
        Get Songs
      </button>
    </form>
  );
}

export default SquatInput;

//Moved Calc to fetch function to monitor the change of 1 squat, not the SLC//
//calc in here???
// let squatResult = input  ;

// > 1 ? Math.floor(input/60) : 1;
// console.log(squatResult)
// if (squatResult <= 1){
//   squatResult = 1;
//   console.log(squatResult)

// }
// else 
// {
//   squatResult = Math.floor(squatResult);
//   console.log(squatResult)
// }
//send data up