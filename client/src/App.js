import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Task from "./pages/Task";
import Tasks from "./pages/Tasks";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello. Track-a-task underconstruction. </h1>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/Task" component={Task} />
            <Route path="/Tasks" component={Tasks} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
