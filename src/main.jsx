import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// styles
import "./index.css";
// react-router-dom
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
