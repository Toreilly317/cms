import { createReducer } from "../utils/createReducer";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  DELETE_USER
} from "../constants/userConstants";

const initialState = {};

export const registerUser = (state, payload) => ({
  ...state,
  user: payload.user
});

export const loginUser = (state, payload) => ({
  ...state,
  user: payload.user
});

export const deleteUser = (state, payload) => {
  return state;
};

export const logoutUser = (state, payload) => {
  return state;
};

export default createReducer(initialState, {
  [REGISTER_USER]: registerUser,
  [LOGIN_USER]: loginUser,
  [DELETE_USER]: deleteUser,
  [LOGOUT_USER]: logoutUser
});
