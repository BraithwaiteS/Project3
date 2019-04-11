import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Task from "./pages/Task";
import Tasks from "./pages/Tasks";
import API from "./utils/API";

class App extends Component {
  state = {
    userId: 0,
    userPhone: "",
    userEmail: "",
    tasks: [],
    task: {
      taskName: "",
      dueDate: "",
      completed: ""
    }
  };
  componentDidMount() {}
  findTasks() {
    alert("findTasks");
    API.findAllTasks();
  }
  handleRegister() {
    //API to create user
    //setState to user profile info
    this.setState({ userId: "", userPhone: "", userEmail: "" });
  }

  handleLogin() {
    //API to find all user's tasks
    //setState to user profile info, tasks
    API.findAllTasks().then(res =>
      this.setState({ userId: "", userPhone: "", userEmail: "", tasks: [] })
    );
  }
  handleDelete(taskId) {
    //API to delete task
    //setState to reflect changes
    let taskObj = this.state.task;
    taskObj.completed = "";
    taskObj.dueDate = "";
    taskObj.taskName = "";

    API.deleteTask(taskId).then(
      API.findAllTasks(this.state.userId).then(res =>
        // this.setState({ tasks: [] })

        this.setState({ tasks: [], task: taskObj })
      )
    );
  }
  handleUpdate(taskId) {
    //API to update task
    //setState to reflect changes
    let taskObj = this.state.task;
    taskObj.completed = "";
    taskObj.dueDate = "";
    taskObj.taskName = "";

    API.updateTask(taskId).then(
      API.findAllTasks(this.state.userId).then(res =>
        this.setState({ tasks: [], task: taskObj })
      )
    );
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    //API to update task
    //setState to reflect changes
    event.preventDefault();
    // args = { taskName: "TEST", dueDate: "05/01/2019", completed: "N" };
    alert("boom");
    API.addTask();
    API.addTask(
      // this.state.task.taskName,
      // this.state.userEmail,
      // this.state.userPhone

      // { taskName: this.state.task.taskName, dueDate: this.state.task.dueDate }
      { taskName: "Another TEST", dueDate: "2019/05/01" }
    ).then(
      API.findAllTasks(this.state.userId).then(res =>
        this.setState({ tasks: [] })
      )
    );
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              exact
              path="/"
              render={props => (
                <Home handleFormSubmit={this.handleFormSubmit} />
              )}
            />

            {/* <Route exact path="/login" component={Login} /> */}
            <Route
              exact
              path="/login"
              render={props => (
                <Login {...props} handleLogin={this.handleLogin} />
              )}
            />

            {/* <Route exact path="/register" component={Register} /> */}
            <Route
              exact
              path="/register"
              render={props => (
                <Register {...props} handleRegister={this.handleRegister} />
              )}
            />
            {/* <Route path="/Task" component={Task} /> */}
            <Route
              path="/Task/:taskId"
              render={props => (
                <Task
                  {...props}
                  handleNew={this.handleNew}
                  handleUpdate={this.handleUpdate}
                  handleDelete={this.handleDelete}
                />
              )}
            />
            {/* No need to pass anything to Tasks page */}
            <Route path="/Tasks" component={Tasks} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
