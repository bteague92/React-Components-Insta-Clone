//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import Data from "./dummy-data.js";
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [data, setData] = useState(Data)
  return (
    <div className="posts-container-wrapper">
      {data.map(i => {
        return <Post post={i} />
      })}
    </div>
  );
};

export default PostsPage;

