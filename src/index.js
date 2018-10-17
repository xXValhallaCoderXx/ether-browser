import "shared/styles/index.scss";
import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import App from "./routes";

import { Provider } from "react-redux";
import configureStore from "./store";
import history from "./shared/history";

const store = configureStore();
const root = document.getElementById("render-app");

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  root
);
