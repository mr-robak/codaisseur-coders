import React, { useEffect } from "react";
import "./PostPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import loadingImg from "../images/loading.gif";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const postData = useSelector(selectPostAndComments);
  // console.log("postData:", postData);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  // Add a comment section, which displays each of the comments, along with the comment date and name of the commentor.

  const renderPost = () => {
    const { post, comments } = postData;
    const date = moment(post.createdAt).format("DD-MM-YYYY");
    return (
      <div>
        <h1>{post.title}</h1>
        <p className="meta">
          by <strong>{post.developer.name}</strong> • {date} •
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag.tag}
            </span>
          ))}
        </p>
        <ReactMarkdown source={post.content} />
        <h2>Comments ({comments.count})</h2>
        {comments.rows.map((row, index) => {
          const { text, createdAt, developer } = row;
          const date = moment(createdAt).format("DD-MM-YYYY");
          return (
            <div key={index}>
              ------------------------------------------------------------------
              <p>{text}</p>
              <p>
                by <strong>{developer.name}</strong> • {date}
              </p>
            </div>
          );
        })}
        ------------------------------------------------------------------
      </div>
    );
  };

  return (
    <div className="PostPage">
      {!postData ? <img src={loadingImg} alt="loading" /> : renderPost()}
    </div>
  );
}
