import React, { Component } from "react";
class MyPage extends Component {
  render() {
    console.log("data test");
    console.log(this.props);

    const taskList = this.props.task.map(eachTask => {
      return (
        //   console.log(eachTask.id, "Yeah")
        <tr>
          <td>{eachTask.taskName}</td>
          <td>
            <button className="btn waves-effect waves-light" onClick="">
              Completed
            </button>
          </td>
          <td>
            <button
              className="btn waves-effect waves-light"
              onClick={this.props.sendEmail}
            >
              Email
            </button>
          </td>
          <td>
            <button
              className="btn waves-effect waves-light"
              onClick={this.props.sendMessage}
            >
              Text
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Track Your Tasks</h2>

        {/* <!---------------------------------------- List --------------------------------------------------------------------> */}

        <div className="row">
          <div className="col s7 m7">
            <div className="card">
              <div className="card-image">
                {/* <!-- <img src="thanks.jpg"> -->
                      <!-- <span className="card-title">Card Title</span> --> */}
              </div>
              <div className="card-content">
                <h4>Tasks...Get to work!!</h4>

                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <table>
                          <tbody>
                            <tr>{taskList}</tr>
                          </tbody>
                        </table>
                        {/* <ol></ol> */}
                      </div>

                      {/* <!-- <div className="input-field col s6">
                                      <button className="btn waves-effect waves-light" type="submit" name="action">Create List
                                      <i className="material-icons right">border_color</i>
                                      </button> 
                                    </div> --> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col s5 m5">
            <div className="card">
              <div className="card-image">
                {/* <!-- <img src="thanks.jpg"> -->
                      <!-- <span className="card-title">Card Title</span> --> */}
          {/* </div>
              <div className="card-content">
                <h4>Completed</h4>

                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <ol>
                          <li>Wedding To Dos</li>
                          <li>House Chores</li>
                        </ol>
                      </div> */}
          {/* <!-- <div className="input-field col s6">
                                      <button className="btn waves-effect waves-light" type="submit" name="action">Create List
                                      <i className="material-icons right">border_color</i>
                                      </button> 
                                    </div> --> */}
          {/* </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default MyPage;
