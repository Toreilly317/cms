import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginUser } from "../../actions/authActions";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

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
      <div className="login-form">
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              {/* <Image src="/logo.png" />  */}
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                  placeholder="Email"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                  placeholder="Password"
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={e => this.handleSubmit(e)}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
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
