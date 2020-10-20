import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Villain from './components/Villain';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Villain villainName="Joker" />
        <Villain villainName="Riddler" />
        <Villain villainName="Batman" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
