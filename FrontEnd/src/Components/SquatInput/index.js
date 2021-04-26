import { useState } from "react";
import "./SquatInput.css";

//takes in function to send squats back up to app.

function SquatInput({ onClick }) {
  const [input, setInput] = useState(5);

  return (
    <form className="squat-input-form">
      <p className="squat-text">Enter How Many Squats You Gotta Do:</p>
      <input
        className="squat-input-number"
        type="number"
        min="0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        data-testid="click-test"
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
