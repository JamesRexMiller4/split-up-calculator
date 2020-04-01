import React from 'react';
import './App.css';
import Header from './Header/Header';
import Calculator from './Calculator/Calculator';
import Background from './Background/Background';

const App = () => {
  return (
    <div className="App">
        <Header />
        <main>
          <Calculator />
          <Background />
        </main>
    </div>
  );
}

export default App;
