import React, { Component } from "react";
import MyPage from "../components/MyPage";
class Tasks extends Component {
  render() {
    return (
      <div>
        <MyPage {...this.props} />
      </div>
    );
  }
}

export default Tasks;
