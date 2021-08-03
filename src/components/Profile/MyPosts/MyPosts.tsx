import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
  let postsElements = props.posts.map((p: any) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  let newPostElement = React.createRef<HTMLTextAreaElement>();
  let addPost = () => {
    // @ts-ignore
    // let text = document.getElementById("test").value;
    if (newPostElement.current) {
      let text = newPostElement.current?.value;
      props.addPost(text);
      newPostElement.current.value = "";
    }
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
