import React from 'react';
import './App.css';
import Component from './components/component/Component';

function App() {
   return (
      <div className="App">
         <Component url={`${process.env.REACT_APP_URL}data`} />
         <Component url={`${process.env.REACT_APP_URL}loading`} />
         <Component url={`${process.env.REACT_APP_URL}error`} />
      </div>
   );
}

export default App;
