import "./QuoteDisplay.css";

function QuoteDisplay({ data}) {
  // take in data from fetch
  return (
    <div className="quote-display">
      <h2>{data.quote}</h2>
      <h3>{data.artist}</h3>
    </div>
  );
}

export default QuoteDisplay;
