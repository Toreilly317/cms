import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  errors: errorReducer,
  toastr: toastrReducer
});

export default rootReducer;
