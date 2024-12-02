import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@ionic/react/css/core.css";
import { IonTextarea, setupIonicReact } from "@ionic/react";

setupIonicReact();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IonTextarea
          style={{
            backgroundColor: "white",
            marginInline: "2rem",
            color: "black",
          }}
          placeholder="Use voice-to-speech here"
        />
      </header>
    </div>
  );
}

export default App;
