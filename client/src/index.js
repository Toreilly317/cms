import React from "react";
import ReactDOM from "react-dom";
import "./components/app/index.css";
import App from "./components/app/App";
import registerServiceWorker from "./components/app/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
