import { combineReducers } from "redux";
import feedReducer from "./feedReducer";

// Create a combined root reducer

const reducer = combineReducers({
  feed: feedReducer,
});

export default reducer;
