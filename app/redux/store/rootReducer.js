import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import postsReducer from "./postsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;
