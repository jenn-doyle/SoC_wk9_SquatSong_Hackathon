import "./QuoteDisplay.css";

function QuoteDisplay({ quote, person }) {
  // take in data from fetch
  return (
    <div className="quote-display">
      <h2>{quote}</h2>
      <h3>{person}</h3>
    </div>
  );
}

export default QuoteDisplay;
