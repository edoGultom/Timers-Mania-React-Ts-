import React from 'react';
import './App.css';
import Timer from './components/Timer';
function App() {

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success text-center">Timers Mania</p>
              <p className=" text-center">This Web-App allows you to create as many timers as you want. Built by edo_gultom.</p>
            </div>
          </div>
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
