import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Naveen Arya({process.env.REACT_APP_MY_VAR})</h1>
        <p>{
            process.env.REACT_APP_1
        }</p>
        <p>{
            process.env.REACT_APP_2
        }</p>
        <p>{
            process.env.REACT_APP_3
        }</p>
        <p>{
            process.env.REACT_APP_4
        }</p>
    </div>
  );
}

export default App;
