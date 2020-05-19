const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING_POST":
      //   console.log("START_LOADING_POST");
      //   console.log("state", state);
      return { ...state, loading: true };

    case "POST_FULLY_FETCHED":
      //   console.log("POST_FULLY_FETCHED payload", action.payload);
      const { post, comments } = action.payload;
      return {
        ...state,
        loading: false,
        post: post,
        comments: comments,
      };

    default: {
      return state;
    }
  }
}
