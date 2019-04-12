import React, { Component } from "react";

class Register extends Component {
  state = {
    email: {
      recipient: "",
      sender: "",
      subject: "",
      text: ""
    }
  };

  sendEmail = () => {
    const { email } = this.state;
    fetch(
      `http://127.0.0.1:3001/send-email?recipient=${email.recipient}&sender=${
        email.sender
      }&topic=${email.subject}&text=${email.text}`
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { email } = this.state;
    return (
      <div className="input">
      <h1>Register </h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon-prefix" type="text" className="validate" />
                <label htmlFor="icon-prefix">Full Name</label>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  id="icon-email"
                  type="email"
                  className="validate"
                  value={email.recipient}
                  onChange={e =>
                    this.setState({
                      email: { ...email, recipient: e.target.value }
                    })
                  }
                />
                <label for="icon-email">Email</label>
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
                <i className="material-icons prefix">phone</i>
                <input id="icon-telephone" type="tel" className="validate" />
                <label for="icon-telephone">Telephone</label>
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
                <label for="icon-lock">Password</label>
              </div>
            </div>
          </form>
        </div>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={this.sendEmail}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>

        <a href="/login"><button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Have An Account? Sign In
          <i className="material-icons right">account_circle</i>
        </button></a>
      </div>
    );
  }
}

export default Register;
