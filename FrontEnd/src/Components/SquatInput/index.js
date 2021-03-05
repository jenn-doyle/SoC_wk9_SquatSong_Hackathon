import { useState } from "react";
import "./SquatInput.css";

//takes in function to send squats back up to app.
function SquatInput({ onClick }) {
  const [input, setInput] = useState(5);

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
          //send data up
          onClick(input);
        }}
      >
        Get Songs
      </button>
    </form>
  );
}

export default SquatInput;
