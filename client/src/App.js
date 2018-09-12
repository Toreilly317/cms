import React, { Component } from "react";
import "./App.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import ReduxToastr from "react-redux-toastr";
//redux store
import configureStore from "./store/configureStore";

//components
import Login from "./components/auth/Login";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <ReduxToastr
              timeOut={4000}
              newestOnTop={false}
              preventDuplicates
              position="top-left"
              transitionIn="bounceInDown"
              transitionOut="bounceOutUp"
              progressBar
              closeOnToastrClick
            />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={AdminDashboard} />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
