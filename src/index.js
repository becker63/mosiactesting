import React from "react";
import ReactDOM from "react-dom";
import MosaicApp from "./MosaicApp";
import "react-mosaic-component/react-mosaic-component.css";
import "./styles.css";

function App() {
  return (
    <div id="app">
      <MosaicApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
