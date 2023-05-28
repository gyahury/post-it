import classes from "./NewPost.module.css";

function NewPost({ onChangeTitle, onChangeBody, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">타이틀</label>
        <input type="text" id="name" required onChange={onChangeTitle} />
      </p>
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} onChange={onChangeBody} />
      </p>
      <p className={classes.actions}>
        <button>등록</button>
        <button type="button" onClick={onCancel}>취소</button>
      </p>
    </form>
  );
}

export default NewPost;
