import React, { Component } from "react";
class Task extends Component {

  

  render() {
    return (
      
    <div>

<h2>Get Organized</h2>

<div id="createList" class="row">
        <div class="col s12 m8">
            <div class="card">
               
                <div class="card-content">
                    <h3>Create Task</h3>                                                                                                                                                                                       
                    
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s4">
                                  <input id="icon_prefix" type="text" class="validate"></input>
                                  <label for="icon_prefix">Task Name</label>
                                </div>

                                <div class="input-field col s6">
                                  <button class="btn waves-effect waves-light" type="submit" name="action">Create Task
                                  <i class="material-icons right">border_color</i>
                                  </button> 
                                </div>
                            </div>
                        </form>
                       <Task />
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
