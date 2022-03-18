import Routes from "config/Routes";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LangProvider } from "contexts/Lang";

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <Routes />
    </LangProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
