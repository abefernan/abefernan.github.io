import React from 'react';
import './App.css';
import davidBust from './assets/davidBust.png';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={davidBust} className="App-logo" alt="David Bust" />
        <p>Check out my game:</p>
        <a
          className="App-link"
          href="https://abefernan.github.io/projects/wasspord/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WassPord
        </a>
      </header>
    </div>
  );
}

export default App;
