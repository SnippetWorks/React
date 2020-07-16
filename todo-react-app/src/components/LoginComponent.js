import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      isLogInfailed: false,
    };
  }
  render() {
    return (
      <div className="container">
        {this.state.isLogInfailed && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input
          type="text"
          name="username"
          placeholder="UserName"
          className="form-control"
          onChange={this.handleInput}
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
          onChange={this.handleInput}
        />
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={this.handleLogin}
        >
          Sign in
        </button>
      </div>
    );
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleLogin = () => {
    // console.log(this.state);
    if (this.state.username === "sanket" && this.state.password === "1234") {
      this.setState({ isLogInfailed: false });
      // this.props.history.push('/')
    } else this.setState({ isLogInfailed: true });
  };
}

export default LoginComponent;
