import axios from "axios";

export default {
  findOneTask: args => {
    //call to find one task
    return axios.get("/api/task", { params: { ID: args } });
    // return axios.get("/api/task?userId=" + args);
  },
  findAllTasks: args => {
    //call to find all tasks
    return axios.get("/api/tasks", { params: { userId: args } });
  },
  addTask: args => {
    //call to add task
    return axios.post("/api/task", args);
  },
  deleteTask: args => {
    //call to delete task
    return axios.delete("/api/task", { params: { ID: args } });
  },
  updateTask: args => {
    //call to update task
    return axios.put("/api/task", { params: { ID: args } });
  }
};
