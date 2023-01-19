import React from 'react';
import './App.css';
import Timer from './components/Timer';
function App() {

  return (
    <React.Fragment>
      <div className="container mt-3 content">
        <div className="grid">
          <div className="row">
            <div className="col">
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
