import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "C:/Downloads_Yogi/Coder_Camp/Assignments/Final_CCGraduation_Project/client/src/stylesheets/style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

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
