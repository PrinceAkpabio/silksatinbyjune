import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/base.scss";
import { BrowserRouter as Router } from "react-router-dom";
import {
  bannerReducer,
  initialBannerState,
} from "../src/data_&_async requests/bannerReducer";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./data_&_async requests/store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
