import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <img
              width={550}
              height={70}
              mode="fit"
              src={require(`../Navbar/task.png`)}
            />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li className="myNav" onClick={this.props.auth.login}>
              <a href="#">test</a>
            </li> */}
            <li className="myNav">
              <a href="/register">Register/Log In</a>
            </li>
            <li className="myNav" onClick={this.props.auth.logout}>
              <a href="#">Log Out</a>
            </li>
            <li>
              <a href="/tasks">Tasks</a>
            </li>
            <li>
              <a href="/newTask">Add a Task</a>
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
