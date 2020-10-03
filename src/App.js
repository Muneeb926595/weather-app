import React from 'react';
import './App.css';
import Weather from './Weather';
import clear2 from './images/clear2.jpg';

function App() {
  return (
    <div className="app__container"
      style={{ backgroundImage: `url(${clear2})`, backgroundAttachment: 'fixed' }}>
      <div className="app__rightpanel">
        <Weather />
      </div>
    </div>
  );
}

export default App;
