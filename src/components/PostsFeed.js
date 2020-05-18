import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import "./PostsFeed.css";
import loadingImg from "../images/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, postsFetched } from "../store/actions.js";
import { selectFeedPosts, selectFeedLoading } from "../store/selectors";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);
  const loading = useSelector(selectFeedLoading);
  console.log("posts=", posts);
  console.log("loading", loading);

  //   const [data, setData] = useState({
  //     loading: true,
  //     posts: [],
  //   });

  async function fetchNext5Posts() {
    dispatch(startLoading());
    // setData({ ...data, loading: true });

    const response = await axios.get(API_URL + `/posts?offset=0&limit=5`);
    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`

    const morePosts = response.data.rows;
    // console.log("morePosts", morePosts);
    dispatch(postsFetched(morePosts));
    // setData({
    //   loading: false,
    //   posts: [...data.posts, ...morePosts],
    // });
  }
  useEffect(() => {
    fetchNext5Posts();
  }, []);

  //   const renderPosts =
  //     loading === true ? (
  //       <img src={loadingImg} alt="loading" />
  //     ) : (
  //       posts.map((post, index) => {
  //         // console.log(post);
  //         const { title, createdAt, tags } = post;
  //         return (
  //           <div key={index + createdAt} className="postWrapper">
  //             <h3>{title}</h3>
  //             <p>
  //               {moment(createdAt).format("DD-MM-YYYY")} •{" "}
  //               {tags.map((tag, index) => (
  //                 <span key={index} className="tag">
  //                   {tag.tag}
  //                 </span>
  //               ))}
  //             </p>
  //           </div>
  //         );
  //       })
  //     );

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {/* {renderPosts} */}
    </div>
  );
}
