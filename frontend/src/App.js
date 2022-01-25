import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-top: 16px;
`

function App() {
  const [listOfQuotes] = useState(["one", "two", "three"])
  const [activeQuote, setActiveQuote] = useState([])

  const buttonSetActiveQuote = () => {
     setActiveQuote([listOfQuotes[Math.floor(Math.random()*listOfQuotes.length)]])
  }
  return (
    <div className="App">
      <StyledButton onClick={buttonSetActiveQuote}>
        Generate quote
      </StyledButton>
      {activeQuote.map((arrayElement, i) => 
        {
          return <h1 key={i}>{arrayElement}</h1>    
        }
      )}
    </div>
  );
}

export default App;
