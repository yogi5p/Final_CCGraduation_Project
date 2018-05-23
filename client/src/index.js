import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD

import "./stylesheet/style.css";
=======
import "./stylesheets/style.css";
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
<<<<<<< HEAD
=======
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
