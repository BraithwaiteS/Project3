import React, { Component } from "react";
class Login extends Component {
  // state = {
  //     login:{
  //             email: " ",
  //             password: " "
  //           }
  //         }

  // validateForm(){
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  // }

  render() {
    return (
      <div id="login" className="input">
        <h1>Log In</h1>

        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="icon-email" type="email" className="validate" />
                <label htmlFor="icon-email">Email</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Helper text
                </span>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input id="icon-lock" type="password" className="validate" />
                <label htmlFor="icon-lock">Password</label>
              </div>
            </div>
          </form>
        </div>

        <a
          href="/tasks"
          onClick="console.log('The link was clicked.'); return false"
        >
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Login
            <i className="material-icons right">send</i>
          </button>
        </a>

        <a href="/register">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Create Account
            <i className="material-icons right">account_circle</i>
          </button>
        </a>
      </div>
    );
  }
}

export default Login;
