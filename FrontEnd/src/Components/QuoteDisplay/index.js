import "./QuoteDisplay.css";

function QuoteDisplay({ quote, person }) {
  // take in data from fetch
  return (
    <div>
      <h1>{quote}</h1>
      <h3>{person}</h3>
    </div>
  );
}

export default QuoteDisplay;
