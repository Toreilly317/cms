import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginUser } from "../../actions/authActions";
import styled from "styled-components";

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Form = styled.form`
  box-shadow: 0px 0px 5px #2d2d2d;
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  border: none;
  & > input {
    display: block;
    font-size: 2rem;
    padding: 2rem;
    margin: 2rem;
  }

  & > button {
    margin: 2rem;
    padding: 2rem;
  }
`;

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
      <LoginWrapper>
        <Form onSubmit={e => this.handleSubmit(e)}>
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
        </Form>
      </LoginWrapper>
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
