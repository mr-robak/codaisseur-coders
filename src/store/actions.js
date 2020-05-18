export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "POSTS_FETCHED",
    payload: [...morePosts],
  };
}
