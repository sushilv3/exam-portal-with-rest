import React, { Component } from "react";

export default class ExamApp extends Component {
  render() {
    return (
      <div className="ExamApp">
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "sushil",
      password: "",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  handleUsernameChange(event) {
    // console.log(event);
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }
  render() {
    return (
      <>
        User Name :
        <input
          type="text"
          value=""
          name="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        Password :
        <input type="text" name="password" value={this.state.password} />
        <button>Login</button>
      </>
    );
  }
}
