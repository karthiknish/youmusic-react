import React from "react";
import { GlobalState } from "./GlobalState";
import AppContainer from "./AppContainer";
import "./App.css";

function App() {
  return (
    <GlobalState>
      <AppContainer />
    </GlobalState>
  );
}

export default App;
