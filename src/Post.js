const Post = (props) => {
  return (
    <button
      onClick={() => props.showDetailPost(props.item.id)}
      style={{ border: "1px solid #000", padding: "20px", background: props.item.clicked ? "gray" : "white", cursor: "pointer" }}>
      <div>Id: {props.item.id}</div>
      <div>Title: {props.item.title}</div>
      <div>Author: {props.item.author}</div>
      <div>GPA: {props.item.gpa}</div>
    </button>
  );
};

export default Post;
