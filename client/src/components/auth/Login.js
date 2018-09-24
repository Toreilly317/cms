import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

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
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          placeholder="E-mail address"
          type="email"
          name="email"
          value={this.state.email}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
          placeholder="Password"
        />

        <button onClick={e => this.handleSubmit(e)}>Login</button>
      </form>
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
