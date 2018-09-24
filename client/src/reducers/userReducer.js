import { createReducer } from "../utils/createReducer";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  DELETE_USER,
  SET_CURRENT_USER
} from "../constants/userConstants";

import isEmpty from "../utils/isEmpty";

export const setcurrentUser = (state, payload) => ({
  ...state,
  isAuthenitcated: !isEmpty(payload),
  user: payload
});

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

const initialState = {};
export default createReducer(initialState, {
  [REGISTER_USER]: registerUser,
  [LOGIN_USER]: loginUser,
  [DELETE_USER]: deleteUser,
  [LOGOUT_USER]: logoutUser,
  [SET_CURRENT_USER]: setcurrentUser
});
