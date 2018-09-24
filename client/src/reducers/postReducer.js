import { createReducer } from "../utils/createReducer";
import {
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS
} from "../constants/postConstants";
import { getPost } from "../actions/postActions";

const initialState = {
  all: [],
  current: {},
  selectedGroup: [],
  loading: false
};

export const createPost = (state, payload) => {
  return {
    ...state,
    posts: payload.posts
  };
};

export const getPosts = (state, payload) => {
  return {
    ...state,
    all: [...payload, ...state.all]
  };
};

export const deletePost = (state, payload) => {
  return {
    ...state,
    all: state.all.filter(post => post.id !== payload)
  };
};

export default createReducer(initialState, {
  [CREATE_POST]: createPost,
  [DELETE_POST]: deletePost,
  [GET_POST]: getPost,
  [GET_POSTS]: getPosts
});
