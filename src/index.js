import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Providercart from "./context/Providercart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providercart>
      <App />
    </Providercart>
  </React.StrictMode>
);
