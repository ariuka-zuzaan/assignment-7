const Post = (props) => {
  return (
    <button onClick={() => props.showDetailPost(props.item.id)} className="post">
      <div>Id: {props.item.id}</div>
      <div>Title: {props.item.title}</div>
      <div>Author: {props.item.author}</div>
      <div>GPA: {props.item.gpa}</div>
    </button>
  );
};

export default Post;
