import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterLogin from "./components/auth/RegisterLogin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/admin-dashboard" component={RegisterLogin} />
      </BrowserRouter>
    );
  }
}

export default App;
