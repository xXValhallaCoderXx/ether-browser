import React from "react";
import { render } from "react-dom";
import "shared/styles/index.scss";
import App from "./routes";

import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

const root = document.getElementById("render-app");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
