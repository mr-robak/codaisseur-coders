import React from "react";
import "./HomePage.css";
import PostsFeed from "../components/PostsFeed";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <PostsFeed />
    </div>
  );
}
