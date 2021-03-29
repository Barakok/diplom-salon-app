import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./bootstrap.min.css";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./reducers/store";

ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
</Provider>,
  document.getElementById("root")
);
