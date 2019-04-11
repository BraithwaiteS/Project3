import React, { Component } from "react";
class Task extends Component {

  // state = {
  //     login:{
  //             email: " ",
  //             password: " "
  //           }        
  //         }

  // validateForm(){
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  // }

  render() {
    return (
      
    <div>

<h2>Get Organized</h2>

<div id="createList" class="row">
        <div class="col s12 m8">
            <div class="card">
                <div class="card-image">
                  {/* <!-- <img src="thanks.jpg"> -->
                  <!-- <span class="card-title">Card Title</span> --> */}
                </div>
                <div class="card-content">
                    <h3>Create List</h3>                                                                                                                                                                                       
                    
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s4">
                                  <input id="icon_prefix" type="text" class="validate"></input>
                                  <label for="icon_prefix">List Name</label>
                                </div>

                                <div class="input-field col s6">
                                  <button class="btn waves-effect waves-light" type="submit" name="action">Create List
                                  <i class="material-icons right">border_color</i>
                                  </button> 
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* <!-- <div class="row">
                      <div class="col s12 m8">
                          <div class="card">
                              <div class="card-image"> -->
                                <!-- <img src="thanks.jpg"> -->
                                <!-- <span class="card-title">Card Title</span> -->
                              <!-- </div>
                              <div class="card-content">
                                  <h4>Create Task</h4>
                                  
                                  <div class="row">
                                      <form class="col s12">
                                          <div class="row">
                                              <div class="input-field col s4">
                                                <input id="icon_prefix" type="text" class="validate">
                                                <label for="icon_prefix">Task Name</label>
                                              </div>
          
                                              <div class="input-field col s6">
                                                <button class="btn waves-effect waves-light" type="submit" name="action">Create Task
                                                <i class="material-icons right">border_color</i>
                                                </button> 
                                              </div>
                                          </div>
                                      </form>
                                  </div>
          
                              </div>
                          </div>
                      </div>
                  </div>  --> */}

                </div>
            </div>
        </div>
    </div> 
</div>
     
    );
  }
}

export default Task;
