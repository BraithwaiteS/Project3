import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  // state = {
  //   loggedin: false,
  //   name: "",
  //   phone: "",
  //   password: "",
  //   email: {
  //     recipient: "",
  //     sender: "",
  //     subject: "",
  //     text: ""
  //   }
  // };

  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   if (name === "password") {
  //     value = value.substring(0, 15);
  //   }
  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   if (!this.state.name) {
  //     alert("Fill out your name please!");
  //   } else if (this.state.password.length < 6) {
  //     alert(`Choose a more secure password ${this.state.name}`);
  //   } else {
  //     console.log(
  //       `Hello ${this.state.name} ${this.state.password} ${this.state.email} ${
  //         this.state.phone
  //       }`
  //     );
  //   }

  //   this.setState({
  //     loggedin: false,
  //     name: "",
  //     phone: "",
  //     password: "",
  //     email: {
  //       recipient: "",
  //       sender: "",
  //       subject: "",
  //       text: ""
  //     }
  //   });
  // };

  // sendEmail = () => {
  //   const { email } = this.state;
  //   fetch(
  //     `http://127.0.0.1:3001/send-email?recipient=${email.recipient}&sender=${
  //       email.sender
  //     }&topic=${email.subject}&text=${email.text}`
  //   )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  render() {
    const { email } = this.state;
    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  value={this.state.name}
                  name="name"
                  onChange={this.props.handleInputChange}
                  id="icon-prefix"
                  type="text"
                  className="validate"
                />
                <label for="icon-prefix">Full Name</label>
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
                  name="email"
                  type="email"
                  className="validate"
                  value={this.props.email.userEmail}
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
                <input
                  value={this.props.userPhone}
                  name="phone"
                  onChange={this.props.handleInputChange}
                  id="icon-telephone"
                  type="tel"
                  className="validate"
                />
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
                <input
                  value={this.state.password}
                  name="password"
                  autoComplete="new-password"
                  onChange={this.handleInputChange}
                  id="icon-lock"
                  type="password"
                  className="validate"
                />
                <label for="icon-lock">Password</label>
              </div>
            </div>
          </form>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/Tasks">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={this.props.handleRegister}
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Have An Account? Sign In
          <i className="material-icons right">account_circle</i>
        </button>
      </div>
    );
  }
}

export default Form;
