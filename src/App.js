import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/VinodPhalke/live_weather_app_react">
          Vinod Phalke
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          Vins Magic
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;