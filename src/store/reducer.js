import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";

// Create a combined root reducer

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
