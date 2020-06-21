import React from 'react';
import './App.css';
import Tax from './components/Tax';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Podatek dochdowy
        </p>
      </header>
      <div>
        <Tax></Tax>
      </div>
    </div>
  );
}

export default App;
