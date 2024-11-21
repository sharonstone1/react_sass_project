import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "../src/sassStyles/abstracts/_index.scss";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //If I put the StrictMode outside the Router, the components does not render.
  //If I put it inside the Router, the components renders as expected.
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
