import React, { createContext, useContext } from 'react';
import { SetTimer, Timer } from './components/index.js';

const TimerContext = createContext('setTimer');

function App() {

  const timerStatus = useContext(TimerContext);

  return (
    <div className="App">
      {`${timerStatus}`}
      <TimerContext.Provider value={timerStatus}>
        <Timer />
      </TimerContext.Provider>
    </div>
  );
}

export default App;
