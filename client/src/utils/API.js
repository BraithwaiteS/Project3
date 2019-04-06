import axios from "axios";

export default {
  findOneTask: query => {
    //call to find one task
    return axios.get("/api/task:", { params: { ID: query } });
  },
  findAllTasks: query => {
    //call to find all tasks
    return axios.get("/api/tasks", { params: { email: query } });
  },
  addTask: query => {
    //call to add task
    return axios.post("/api/task", { params: { q: query } });
  },
  deleteTask: query => {
    //call to delete task
    return axios.delete("/api/task", { params: { ID: query } });
  },
  updateTask: query => {
    //call to update task
    return axios.put("/api/task", { params: { ID: query } });
  }
};
