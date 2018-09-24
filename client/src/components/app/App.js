import React, { Component, Fragment } from "react";
import "./App.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import { Provider } from "react-redux";

import ScrollToTop from "../../utils/scrollToTop";
import Layout from "../../components/layout/Layout";
import ReduxToastr from "react-redux-toastr";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser } from "../../actions/authActions";
import jwt_decode from "jwt-decode";

//react router
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "../common/PrivateRoute";

//redux store

import Routes from "./Routes";

//redux store
import configureStore from "../../store/configureStore";
const store = configureStore();

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <ScrollToTop>
              <Layout>
                <Routes />
              </Layout>
            </ScrollToTop>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
