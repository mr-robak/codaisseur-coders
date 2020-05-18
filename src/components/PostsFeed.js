import React, { useEffect, useState } from "react";
// import axios from "axios";
import moment from "moment";

import "./PostsFeed.css";
import loadingImg from "../images/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { fetchNext5Posts } from "../store/actions.js";
import { selectFeedPosts, selectFeedLoading } from "../store/selectors";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);
  const loading = useSelector(selectFeedLoading);
  //   console.log("posts=", posts);
  //   console.log("loading", loading);

  const [offset, setOffset] = useState(0);

  //   const [data, setData] = useState({
  //     loading: true,
  //     posts: [],
  //   });

  //   async function fetchNext5Posts() {
  //     dispatch(startLoading());
  //     // setData({ ...data, loading: true });

  //     const response = await axios.get(
  //       // fetch next set of posts (use offset+limit),
  //       API_URL + `/posts?offset=${offset}&limit=5`
  //     );

  //     const morePosts = response.data.rows;
  //     // console.log("morePosts", morePosts);
  //     dispatch(postsFetched(morePosts));
  //     // setData({
  //     //   loading: false,
  //     //   posts: [...data.posts, ...morePosts],
  //     // });
  //   }
  useEffect(() => {
    dispatch(fetchNext5Posts(offset));
    setOffset(offset + 5);
  }, [dispatch]);

  const renderPosts = loading ? (
    <img src={loadingImg} alt="loading" />
  ) : (
    posts.map((post, index) => {
      // console.log(post);
      const { title, createdAt, tags } = post;
      return (
        <div key={index + createdAt} className="postWrapper">
          <h3>{title}</h3>
          <p>
            {moment(createdAt).format("DD-MM-YYYY")} •{" "}
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag.tag}
              </span>
            ))}
          </p>
        </div>
      );
    })
  );

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {renderPosts}
      <button
        onClick={(e) => {
          dispatch(fetchNext5Posts(offset));
        }}
      >
        Lodad more...
      </button>
    </div>
  );
}
