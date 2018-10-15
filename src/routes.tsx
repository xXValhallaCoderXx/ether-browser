import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

const history = createHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/two" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;