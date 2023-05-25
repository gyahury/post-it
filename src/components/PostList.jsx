import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal"
import classes from "./PostList.module.css";

function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }
  return (
    <>
      <Modal>
        <NewPost
          onChangeBody={changeBodyHandler}
          onChangeTitle={changeTitleHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post title={enteredTitle} body={enteredBody} />
        <Post title={enteredTitle} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostList;
