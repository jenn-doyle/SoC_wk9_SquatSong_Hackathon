import "./QuoteDisplay.css";

function QuoteDisplay({ data}) {
  // take in data from fetch
  return (
    <div className="quote-display">
      <h2 className ="quote-title">Motivational Quote</h2>
      <h2>{data.quote}</h2>
      
    </div>
  );
}

export default QuoteDisplay;
