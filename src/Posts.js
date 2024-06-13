import Post from "./Post";

const Posts = (props) => {
  return (
    <div className="posts">
      {props.posts.length !== 0
        ? props.posts.map((item) => (
            <Post
              item={item}
              key={item.id}
              showDetailPost={() => {
                props.showDetailPosts(item.id);
              }}
            />
          ))
        : "No data!"}
    </div>
  );
};

export default Posts;
