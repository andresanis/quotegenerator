import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

import * as React from 'react';

import QuoteCard from './QuoteCard.js'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: auto;
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
      <QuoteCard quote={activeQuote.map((arrayElement, i) => 
          {
            return <h1 key={i}>{arrayElement}</h1>    
          }
        )}>
      </QuoteCard>
    </div>
  );
}

export default App;
