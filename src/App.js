import React from 'react';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>B</h1>
        <p className="lead"> React | Resume</p>
      </header>
      <Projects />
    </div>
  );
}

export default App;