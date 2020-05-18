const initialState = {
  loading: true,
  posts: [],
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING":
      console.log("START_LOADING");
      console.log("state", state);
      return { ...state, loading: true };

    case "POSTS_FETCHED":
      console.log("POSTS_FETCHED payload", action.payload);
      console.log("state", state);
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };

    default: {
      return state;
    }
  }
}
