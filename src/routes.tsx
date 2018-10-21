import React from "react";
import {hot} from "react-hot-loader";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default hot(module)(Routes);
