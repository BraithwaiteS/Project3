import React, { Component } from "react";
class Task extends Component {
  render() {
    return (
      <div>
        <h2>Get Organized</h2>

        <div id="createList" className="row">
          <div className="col s12 m8">
            <div className="card">
              <div className="card-content">
                <h3>Create Task</h3>

                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="icon_prefix"
                          type="text"
                          name="newTaskName"
                          onChange={this.props.handleInputChange}
                          value={this.props.newTaskName}
                          className="validate"
                        />
                        <label for="icon_prefix">Task Name</label>
                      </div>

                      <div className="input-field col s6">
                        <button
                          className="btn waves-effect waves-light"
                          type="submit"
                          name="action"
                        >
                          Create Task
                          <i className="material-icons right">border_color</i>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <Task /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
