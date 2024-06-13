import { useEffect } from "react";
import Post from "./Post";
import axios from "axios";

const Posts = (props) => {
  const getPost = (id) => {
    if (id) {
      axios.get(`http://localhost:8080/api/v1/posts/${id}`).then((response) => {
        props.showDetailPosts(response.data);
      });
    }
  };

  return (
    <div className="posts">
      {props.posts.length !== 0 ? props.posts.map((item) => <Post item={item} key={item.id} showDetailPost={getPost} />) : "No data!"}
    </div>
  );
};

export default Posts;
