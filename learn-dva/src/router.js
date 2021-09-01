import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Products from "./routes/Products";
import Demo from "./routes/Demo";
import SlotDemo from "./routes/SlotDemo";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/demo" exact component={Demo}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
