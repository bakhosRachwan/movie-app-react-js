import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from './State'
import App from "./App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
    <App />
    </StateProvider>
  </React.StrictMode>,
  rootElement
);
