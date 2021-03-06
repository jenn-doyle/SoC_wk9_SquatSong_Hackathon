import "./QuoteDisplay.css";

function QuoteDisplay({ data }) {
  // take in data from fetch
  return (
    <div className="quote-display">
      <h2 className="quote-title">Motivational Quote:</h2>
      <h3>"{data.quote}"</h3>
    </div>
  );
}

export default QuoteDisplay;
