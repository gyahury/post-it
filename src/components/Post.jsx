import classes from "./Post.module.css";

function Post({ title, body }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{title}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

export default Post;
