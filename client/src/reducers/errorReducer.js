import { GET_ERRORS } from "../constants/errorConstants";

import { createReducer } from "../utils/createReducer";

const initialState = {};

export const getErrors = (state, payload) => ({
  ...state,
  payload
});

export default createReducer(initialState, {
  [GET_ERRORS]: getErrors
});
