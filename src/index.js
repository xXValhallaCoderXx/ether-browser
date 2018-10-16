import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import "shared/styles/index.scss";
import App from "./routes";

import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();
const history = createHistory();

const root = document.getElementById("render-app");

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  root
);
