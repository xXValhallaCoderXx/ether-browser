import React from "react";
import {hot} from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import { AsyncComponent, NotFoundComponent} from "shared/components";

const Home = AsyncComponent(() =>
    import("pages/home").then(module => module.default)
)

const Dashboard = AsyncComponent(() =>
    import("pages/dashboard").then(module => module.default)
)

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/:address" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFoundComponent} />
    </Switch>
  );
};

export default hot(module)(Routes);
