import React from 'react';
import './App.css';
import ClickCounter2 from './components/ClickCounter2';
import CounterRender from './components/CounterRender';
import HoverCounter2 from './components/HoverCounter2';

function App() {
  return (
    <div className="App">
      <CounterRender>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </CounterRender>

      <CounterRender>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </CounterRender>
    </div>
  );
}

export default App;
