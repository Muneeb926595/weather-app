import React from 'react';
import './App.css';
import { useStateValue } from './StateProvider';
import Weather from './Weather';

function App() {
  let [state] = useStateValue();
  return (
    <div className="app__container"
      style={{ backgroundImage: `url(${state.backgroundImage})`, backgroundAttachment: 'fixed' }}>
      <div className="app__leftpanel">
        <div className="app__temperatureDetails">{state.temperature}<span className="app__degreeSign">&#8728;</span></div>
        <div className="app__locationDetails">
          <div className="app__locationName">
            {state.city}
          </div>
          <div className="app__date">
            {state.day}
          </div>
        </div>
      </div>

      <div className="app__rightpanel">
        <Weather />
      </div>
    </div>
  );
}

export default App;
