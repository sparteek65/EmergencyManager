// showLastCommitMessageForThisLibrary.js
import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/1",
});

// start making calls
export default api;
