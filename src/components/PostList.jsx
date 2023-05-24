import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="asdf" body="body" />
        <Post author="gyahury" body="wow" />
      </ul>
    </>
  );
}

export default PostList;
