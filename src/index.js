import React from 'react';
import ReactDOM from 'react-dom';
import logo from './reactmedellin.png';

function App() {
  return (
    <div>
      <h1>You're set and ready to start coding!</h1>
      <img src={logo} />s
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
