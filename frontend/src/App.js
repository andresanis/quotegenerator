import { useState } from 'react';
import './App.css';

function App() {
  const [listOfQuotes] = useState(["one", "two", "three"])
  const [activeQuote, setActiveQuote] = useState([])

  const buttonSetActiveQuote = () => {
     setActiveQuote([listOfQuotes[Math.floor(Math.random()*listOfQuotes.length)]])
  }
  return (
    <div className="App">
      <button onClick={buttonSetActiveQuote}>
        Generate quote
      </button>
      {activeQuote.map((arrayElement, i) => 
        {
          return <h1 key={i}>{arrayElement}</h1>    
        }
      )}
    </div>
  );
}

export default App;
