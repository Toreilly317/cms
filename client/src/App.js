import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterLogin from "./components/auth/RegisterLogin";
import { Provider } from "react-redux";

import ScrollToTop from "./utils/scrollToTop";

//redux store
import configureStore from "./store/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <ScrollToTop>
            <Route path="/admin-dashboard" component={RegisterLogin} />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
