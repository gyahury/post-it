import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} title={post.title} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "#ece1fa" }}>
          <h2>포스트가 없습니다.</h2>
        </div>
      )}
    </>
  );
}

export default PostList;
