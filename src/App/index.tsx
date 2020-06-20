import React from 'react';
import './App.css';
import davidBust from './assets/davidBust.png';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>abefernan&apos;s site</h1>
      <img src={davidBust} alt="David Bust" />
      <h2>
        Check out my game&nbsp;
        <a href="https://abefernan.github.io/projects/wasspord/" target="_blank" rel="noopener noreferrer">
          WassPord
        </a>
      </h2>
    </div>
  );
}

export default App;
