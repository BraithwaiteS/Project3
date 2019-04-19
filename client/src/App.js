import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import RegisterPage from "./components/RegisterPage";
import Task from "./pages/Task";
import Tasks from "./pages/Tasks";
import API from "./utils/API";
import Auth from "./Auth";
import history from "./history";
import Callback from "../src/components/Callback";

const auth = new Auth();
const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};
// const handleAuthentication = ({ nextState, replace }) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// };

class App extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }
  state = {
    userId: 1,
    userName: "",
    userPhone: "7037288798",
    userEmail: "ericfinney1@gmail.com",
    password: "",
    newTaskId: "",
    newTaskName: "",
    newTaskDueDate: "",
    newTaskCompleted: "",
    tasks: [],
    task: {
      id: 1,
      taskName: "",
      dueDate: "",
      completed: ""
    },
    message: ""
  };

  componentDidMount = () => {
    // this.setState({ userId: 1 });
    if (this.auth) {
      const { renewSession } = this.auth;
      if (localStorage.getItem("isLoggedIn") === "true") {
        renewSession();
        alert(auth.email);
      }
      console.log(JSON.stringify(auth));
    }
    console.log(auth.getProfile);
  };

  //----Auth0 functions----//
  goTo(route) {
    this.history.replace(`/${route}`);
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }

  //-----SendGrid Function, calls API function to logic on server-------//
  sendEmail = () => {
    let msg = "You have a task due.  Check Track-a-Task!";
    API.sendEmail({ email: this.state.userEmail });
  };

  //------Twilio Function, calls API function to logic on server-------//
  sendMessage = () => {
    let msg = "You have a task due.  Check Track-a-Task!";
    API.sendText({ phone: this.state.userPhone, message: msg });
  };

  //------ Sequelize functions, calls API function to logic on server----//
  findOneTask = () => {
    alert(this.state.task.id);
    let myTask = {};
    let stateTask = {};
    API.findOneTask(this.state.task.id).then(res => {
      myTask = res.data;
      console.log(myTask);
    });

    stateTask = this.state.task;
    stateTask.taskName = myTask.taskName;
    stateTask.complete = myTask.complete;
    stateTask.dueDate = myTask.dueDate;
    this.setState({ task: stateTask });
  };
  findTasks = () => {
    API.findAllTasks({ userId: this.state.userId }).then(res =>
      console.log(res.data)
    );
  };
  handleRegister = event => {
    event.preventDefault();
    //API to create user
    //setState to user profile info

    API.addUser({
      userName: this.state.userName,
      email: this.state.userEmail,
      phone: this.state.userPhone
    }).then(res => {
      if (res) {
        auth.login();
        console.log("hello");
      } else {
        // this.login(); //For test.  remove when add user works.
        console.log("goodbye");
      }
    });
  };

  handleLogin = event => {
    //API to find all user's tasks
    //setState to user profile info, tasks
    event.preventDefault();
    this.login();

    API.findAllTasks().then(res => {
      //Set the user information and tasks
      this.setState({
        userId: "",
        userPhone: "",
        userEmail: "",
        tasks: res.data
      });
    });
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
      API.findAllTasks({ userId: this.state.userId }).then(res =>
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
      id: this.state.task.id,
      taskName: this.state.task.taskName,
      dueDate: this.state.task.dueDate,
      userId: this.state.userId
    };

    API.updateTask(myArgs).then(
      API.findAllTasks({ userId: this.state.userId }).then(res =>
        this.setState({ tasks: res.data, task: taskObj })
      )
    );
  };
  handleInputChange = event => {
    // alert(event.target.name + " | " + event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    //API to Add task
    //setState to reflect changes
    event.preventDefault();

    API.addTask({
      taskName: this.state.newTaskName,
      userId: this.state.userId
    })
      .then(
        API.findAllTasks({ userId: 1 }).then(res => {
          console.log("data", res.data);
          this.setState({ tasks: res.data });
          window.location.href = "/tasks";
        })
      )
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <div>
        <Router history={history}>
          <Navbar auth={auth} />
          <div>
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  message={this.state.message}
                  sendEmail={this.sendEmail}
                  sendMessage={this.sendMessage}
                />
              )}
            />

            {/* <Route exact path="/login" component={Login} /> */}
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  handleLogin={this.handleLogin}
                  handleInputChange={this.handleInputChange}
                />
              )}
            />

            {/* <Route exact path="/register" component={Register} /> */}
            <Route
              exact
              path="/register"
              render={() => (
                <RegisterPage
                  auth={auth}
                  handleRegister={this.handleRegister}
                  handleLogin={this.handleLogin}
                  handleInputChange={this.handleInputChange}
                  userName={this.state.userName}
                  userPhone={this.state.userPhone}
                  userEmail={this.state.userEmail}
                />
              )}
            />
            {/* <Route path="/Task" component={Task} /> */}
            <Route
              path="/newTask"
              render={() => (
                // !auth.isAuthenticated() ? (
                //   <Redirect to="/home" />
                // ) : (
                //   <Task
                //     task={this.state.task}
                //     handleNew={this.handleNew}
                //     handleUpdate={this.handleUpdate}
                //     handleDelete={this.handleDelete}
                //     handleInputChange={this.handleInputChange}
                //   />
                // )
                <Task
                  newTaskName={this.state.newTaskName}
                  handleUpdate={this.handleUpdate}
                  handleDelete={this.handleDelete}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              )}
            />
            <Route
              path="/Tasks"
              render={() => (
                // !auth.isAuthenticated() ? (
                //   <Redirect to="/home" />
                // ) : (
                //   <Tasks
                //     task={this.state.tasks}
                //     sendMessage={this.sendMessage}
                //     sendEmail={this.sendEmail}
                //   />
                // )
                <Tasks
                  task={this.state.tasks}
                  sendMessage={this.sendMessage}
                  sendEmail={this.sendEmail}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
