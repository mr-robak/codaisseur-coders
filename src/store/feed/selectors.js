export const selectFeedLoading = (state) => {
  //   console.log("state at selectors", state);
  return state.feed.loading;
};

export const selectFeedPosts = (state) => {
  // or state dot feed.
  return state.feed.posts;
};
