import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import List from "./Todo/List";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
