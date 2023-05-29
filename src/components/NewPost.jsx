import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function changeTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
        title : enteredTitle,
        body : enteredBody
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">타이틀</label>
        <input type="text" id="name" required onChange={changeTitleHandler} />
      </p>
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p className={classes.actions}>
        <button>등록</button>
        <button type="button" onClick={onCancel}>
          취소
        </button>
      </p>
    </form>
  );
}

export default NewPost;
