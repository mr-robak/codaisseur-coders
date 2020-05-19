import axios from "axios";
import API_URL from "../../config";

export function startLoading() {
  return {
    type: "START_LOADING_POSTS",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "POSTS_FETCHED",
    payload: [...morePosts],
  };
}

export function fetchNext5Posts(offset) {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const response = await axios.get(
      // fetch next set of posts (use offset+limit),
      API_URL + `/posts?offset=${offset}&limit=5`
    );
    const morePosts = response.data.rows;
    dispatch(postsFetched(morePosts));
  };
}
