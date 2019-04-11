import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Track-A-Task
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/login">Log In</a>
            </li>
            <li>
              <a href="/tasks">Tasks</a>
            </li>
            <li>
              <a href="/task">Create a List</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
