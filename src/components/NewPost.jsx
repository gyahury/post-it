import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} onChange={props.onChangeBody} />
      </p>
      <p>
        <label htmlFor="name">타이틀</label>
        <input type="text" id="name" required onChange={props.onChangeTitle} />
      </p>
    </form>
  );
}

export default NewPost;
