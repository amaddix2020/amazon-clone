import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL:"https://us-central1-clone2-e567e.cloudfunctions.net/api" 
});

export default instance;

//local
//http://localhost:5001/clone2-e567e/us-central1/api