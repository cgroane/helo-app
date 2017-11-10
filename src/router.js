import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";

export default (
  <Switch>
    <Route path="/auth" component={LandingPage} />
    <Route exact path="/" component={Dashboard} />
    <Route path="/profile" component={Profile} />
    <Route path="/search" component={Search} />
  </Switch>
);
