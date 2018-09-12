import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toastr } from "react-redux-toastr";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      toa;
      return {};
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email.toLowerCase(),
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  };

  render() {
    return (
      <div className="flex-container">
        <div className="container">
          <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              placeholder="Password"
            />

            <button className="btn">LOGIN</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user
});

const actions = {
  loginUser
};

export default connect(
  mapState,
  actions
)(withRouter(Login));
