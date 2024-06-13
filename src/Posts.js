import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = (props) => {
  const postData = [
    { id: 111, title: props.title === "" ? "Happiness" : props.title, author: "john", gpa: 3.4 },
    { id: 222, title: "MIU", author: "Dean", gpa: 3.4 },
    { id: 333, title: "Enjoy life", author: "Jasmine", gpa: 3.4 },
  ];
  const [postList, setPostList] = useState([]);

  const changeDetail = (id) => {
    if (postList.filter((i) => i.id === id).length > 0) {
      props.showDetailPosts(postList.filter((i) => i.id === id)[0]);
    }
  };

  useEffect(() => {
    setPostList(postData);
  }, [props.title]);

  return (
    <div className="posts">
      {postList.map((item) => (
        <Post item={item} key={item.id} showDetailPost={changeDetail} />
      ))}
    </div>
  );
};

export default Posts;
