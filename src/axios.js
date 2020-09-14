import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-37290.cloudfunctions.net/api",
  //Local Testing URL "http://localhost:5001/clone-37290/us-central1/api",
  // Deployed URL "https://us-central1-clone-37290.cloudfunctions.net/api"
});

export default instance;
