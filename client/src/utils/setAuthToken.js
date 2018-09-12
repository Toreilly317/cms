import axios from "axios";

const setAuthToken = token => {
  const defaultValue = axios.defaults.headers.common["Authorization"];

  if (token) {
    //apply token to all requests
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete auth header
    axios.defaults.headers.common["Authorization"] = defaultValue;
  }
};

export default setAuthToken;
