import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  DELETE_USER,
  SET_CURRENT_USER
} from "../constants/userConstants";

import jwtDecode from "jwt-decode";

import { GET_ERRORS } from "../constants/errorConstants";

import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
//register user

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register".userDate)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

  return {
    type: REGISTER_USER,
    payload: userData
  };
};

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      //set token to auth header
      setAuthToken(token);

      //decode token
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      debugger;
      history.push("/dashboard");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
