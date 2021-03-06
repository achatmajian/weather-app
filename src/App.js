import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>App created by Arek Chatmajian</footer>
    </div>
  );
}

export default App;
