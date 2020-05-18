import { combineReducers } from "redux";
import someFeatureReducer from "./someFeature/reducer";

// Create a combined root reducer

const reducer = combineReducers({
  //   someFeature: someFeatureReducer,
  // etc.
});

export default reducer;
