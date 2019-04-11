import React, { Component } from "react";
class Tasks extends Component {

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

        <h2>Track Your Tasks</h2>

{/* <!---------------------------------------- List --------------------------------------------------------------------> */}

    <div className="row">
            <div className="col s6 m6">
                <div className="card">
                    <div className="card-image">
                      {/* <!-- <img src="thanks.jpg"> -->
                      <!-- <span className="card-title">Card Title</span> --> */}
                    </div>
                    <div className="card-content">
                        <h4>Your Lists</h4>
                        
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                      
                                        <ol>
                                            <li>Wedding To Dos</li>
                                            <li>House Chores</li>
                                        </ol>
                                      
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

            <div className="col s6 m6">
                <div className="card">
                    <div className="card-image">
                      {/* <!-- <img src="thanks.jpg"> -->
                      <!-- <span className="card-title">Card Title</span> --> */}
                    </div>
                    <div className="card-content">
                        <h4>Not Completed</h4>
                        
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                      
                                        <ol>
                                            <li>Wedding To Dos</li>
                                            <li>House Chores</li>
                                        </ol>
                                      
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

            <div id="complete" className="row">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-image">
                      {/* <!-- <img src="thanks.jpg"> -->
                      <!-- <span className="card-title">Card Title</span> --> */}
                    </div>
                    <div className="card-content">  
                        <h4>Completed</h4>
                        
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                      
                                        <ol>
                                            <li> Said Yes to the Dress</li>
                                            <li> Deliver Wedding Invitations</li>
                                        </ol>
                                      
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
        </div> 
        
        </div> 

{/* <!---------------------------------------- Not Completed --------------------------------------------------------------------> */}
    
        {/* <div className="row">
            <div className="col s6 m6">
                <div className="card">
                    <div className="card-image"> */}
                      {/* <!-- <img src="thanks.jpg"> -->
                      <!-- <span className="card-title">Card Title</span> --> */}
                    {/* </div>
                    <div className="card-content">
                        <h4>Need To Complete</h4>
                        
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s4">
                                      
                                        <ol>
                                            <li>Buy Gifts for Sister In-Law</li>
                                            <li>Grocery Shopping</li>
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
            </div>
        </div>  */}
    
{/* <!---------------------------------------- Completed --------------------------------------------------------------------------------> */}

        {/* <div className="row">
            <div className="col s6 m6">
                <div className="card">
                    <div className="card-image"> */}
                      {/* <!-- <img src="thanks.jpg"> -->
                      <!-- <span className="card-title">Card Title</span> --> */}
                    {/* </div>
                    <div className="card-content">
                        <h4>Completed</h4>
                        
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s4">
                                      
                                        <ol>
                                            <li> Said Yes to the Dress</li>
                                            <li> Deliver Wedding Invitations</li>
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
            </div>
        </div>  */}
        

      </div>
     
    );
  }
}

export default Tasks;
