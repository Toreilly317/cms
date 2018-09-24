import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../common/PrivateRoute";
//components
import Login from "../auth/Login";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import PostDashboard from "../PostDashboard/PostDashboard";

export default () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={AdminDashboard} />

      <Route exact path="/dashboard/posts" component={PostDashboard} />
    </Switch>
  );
};
