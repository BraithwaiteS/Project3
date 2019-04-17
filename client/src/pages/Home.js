import React, { Component } from "react";
// import HomePage from "../components/HomePage";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div id="home">
          <h4>Get Organized</h4>
          <p id="home">
            Welcome to Track-A-Task. Track-A-Task allows you to create "To Do
            Lists" of any kind. From sending wedding invitations, to house
            chores, and more! If you have a task, just list it, and we'll keep
            track for you! No more worrying about forgetting if you did that
            IMPORTANT thing. We send emails and text messages that remind you of
            tasks that are due soon, so that you're never behind on anything
            ever again!
          </p>
        </div>
        <button onClick={this.props.handleFormSubmit}>Click Me</button>
      </div>
    );
  }
}

export default Home;
