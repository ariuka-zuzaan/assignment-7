import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DetailContext from "./detailProvider";

const PostDetail = (props) => {
  const postId = useContext(DetailContext);
  const [post, setPost] = useState(null);

  const fetchData = (id) => {
    axios.get(`http://localhost:8080/api/v1/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  };
  useEffect(() => {
    fetchData(postId);
  }, [postId]);

  return (
    <div className="projectDetail">
      <></>
      <div>{post.title}</div>
      <div>{post.author}</div>
      <p>This is the content in post...</p>
      <div className="buttonContainer">
        <button onClick={() => props.changeAction({ name: "edit", id: post.id })}>edit</button>
        <button onClick={() => props.changeAction({ name: "delete", id: post.id })}>delete</button>
      </div>
      <div style={{ marginTop: "20px" }}>GPA: {post.gpa}</div>
    </div>
  );
};
export default PostDetail;
