import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tasks"
            className={
              window.location.pathname === "/tasks"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Log In
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
