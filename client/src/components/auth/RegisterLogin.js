import React, { Component } from "react";

class RegisterLogin extends Component {
  constructor(props) {
    super();
    this.state = {
      fullName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  splitName = fullName => {
    let [firstName, ...lastName] = fullName.split(" ");
    lastName = lastName.join(" ");
    return {
      firstName,
      lastName
    };
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firstName, lastName } = this.splitName(this.state.fullName);

    const newUser = {
      firstName,
      lastName,
      email: this.state.email,
      password: this.state.fullName.password,
      password2: this.state.fullName.password2
    };

    console.log(newUser);
  };

  render() {
    return (
      <div className="flex-container">
        <div className="container">
          <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={e => this.handleChange(e)}
              placeholder="First &amp; Last Name"
            />

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
            <input
              type="password"
              name="password2"
              value={this.state.password2}
              onChange={e => this.handleChange(e)}
              placeholder="Confirm Password"
            />
            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterLogin;
