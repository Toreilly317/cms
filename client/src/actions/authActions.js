import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  DELETE_USER
} from "../constants/userConstants";

import { GET_ERRORS } from "../constants/errorConstants";

import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

//register user

export const registerUser = userData => dispatch => {
  axios
    .post("/api/users/register".userDate)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

  return {
    type: REGISTER_USER,
    payload: {
      user: userData
    }
  };
};

export const loginUser = (userData, history) => dispatch => {
  console.log("hit func");
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      //set token to auth header
      setAuthToken(token);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

  return {
    type: LOGIN_USER,
    payload: {
      user: userData
    }
  };
};
