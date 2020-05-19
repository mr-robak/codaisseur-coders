export function selectPostAndComments(state) {
  //   console.log("state at selectors", state);
  const { loading, post, comments } = state.postPage;
  return loading ? null : { post, comments };
}
