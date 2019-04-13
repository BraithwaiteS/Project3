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
    userId: "1",
    userName: "",
    userPhone: "",
    userEmail: "",
    tasks: [],
    task: {
      id: "1",
      taskName: "",
      dueDate: "",
      completed: ""
    }
  };
  componentDidMount = () => {
    this.setState({ userId: "1" });
  };
  findOneTask = () => {
    alert(this.state.task.id);
    let myTask = {};
    let stateTask = {};
    API.findOneTask(this.state.task.id).then(res => {
      myTask = res.data;
    });
    console.log(myTask);
    stateTask = this.state.task;
    stateTask.taskName = myTask.taskName;
    stateTask.complete = myTask.complete;
    stateTask.dueDate = myTask.dueDate;
    this.setState({ task: stateTask });
  };
  findTasks = () => {
    alert("findTasks");
    let myId = this.state.userId;
    alert(myId);

    API.findAllTasks({ userId: this.state.userId }).then(res =>
      console.log(res.data)
    );
  };
  handleRegister = () => {
    //API to create user
    //setState to user profile info
    API.addUser({
      userName: this.state.userName,
      email: this.state.userEmail,
      phone: this.state.userPhone
    });
    this.setState({ userId: "", userPhone: "", userEmail: "" });
  };

  handleLogin = () => {
    //API to find all user's tasks
    //setState to user profile info, tasks
    API.findAllTasks().then(res =>
      this.setState({ userId: "", userPhone: "", userEmail: "", tasks: [] })
    );
  };
  handleDelete = taskId => {
    //API to delete task
    //setState to reflect changes
    taskId = 2;
    let taskObj = this.state.task;
    taskObj.completed = "";
    taskObj.dueDate = "";
    taskObj.taskName = "";

    API.deleteTask(taskId).then(
      API.findAllTasks(this.state.userId).then(res =>
        this.setState({ tasks: res.data, task: taskObj })
      )
    );
  };
  handleUpdate = taskId => {
    //API to update task
    //setState to reflect changes
    let taskObj = this.state.task;
    taskObj.completed = "";
    taskObj.dueDate = "";
    taskObj.taskName = "";
    let myArgs = {
      id: "1",
      taskName: "More TESTs NOOOOOO",
      dueDate: "2019/05/03",
      userId: this.state.userId
    };

    API.updateTask(myArgs).then(
      API.findAllTasks(this.state.userId).then(res =>
        this.setState({ tasks: res.data, task: taskObj })
      )
    );
  };
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

    API.addTask(
      // { taskName: this.state.task.taskName, dueDate: this.state.task.dueDate }
      {
        taskName: "More TESTs",
        dueDate: "2019/05/03",
        userId: this.state.userId
      }
    ).then(
      API.findAllTasks(this.state.userId).then(res =>
        this.setState({ tasks: res.data })
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
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  handleInputChange={this.handleInputChange}
                />
              )}
            />

            {/* <Route exact path="/register" component={Register} /> */}
            <Route
              exact
              path="/register"
              render={props => (
                <Register
                  {...props}
                  handleRegister={this.handleRegister}
                  handleInputChange={this.handleInputChange}
                />
              )}
            />
            {/* <Route path="/Task" component={Task} /> */}
            <Route
              path="/Task/:taskId"
              render={props => (
                <Task
                  task={this.state.task}
                  handleNew={this.handleNew}
                  handleUpdate={this.handleUpdate}
                  handleDelete={this.handleDelete}
                  handleInputChange={this.handleInputChange}
                />
              )}
            />
            <Route
              path="/Tasks"
              component={Tasks}
              tasks={this.state.tasks}
              handleDelete={this.handleDelete}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
