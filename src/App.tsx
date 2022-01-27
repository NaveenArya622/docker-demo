import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Naveen Arya({process.env.REACT_APP_MY_VAR})</h1>
    </div>
  );
}

export default App;
