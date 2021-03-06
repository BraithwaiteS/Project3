import axios from "axios";

export default {
  findOneTask: args => {
    //call to find one task
    console.log(args);
    return axios.get("/api/task/" + args);
  },
  findAllTasks: args => {
    //call to find all tasks
    return axios.get("/api/tasks/" + args.userId);
  },
  addTask: args => {
    //call to add task
    return axios.post("/api/task", args);
  },
  deleteTask: args => {
    //call to delete task
    return axios.delete("/api/task/" + args);
  },
  updateTask: args => {
    //call to update task
    return axios.put("/api/task", args);
  },
  addUser: args => {
    return axios.post("/api/user", args);
  },
  findOneUser: args => {
    return axios.get("/api/user/" + args);
  },
  sendText: args => {
    return axios.post("/api/text", args);
  },
  sendEmail: args => {
    return axios.post("/api/email", args);
  }
};
