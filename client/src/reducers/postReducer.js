import { createReducer } from "../utils/createReducer";
import { CREATE_POST } from "../constants/postConstants";

const initialState = {};

export const createPost = (state, payload) => {
  return payload.post;
};

export default createReducer(initialState, {
  [CREATE_POST]: createPost
});
