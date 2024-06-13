const PostDetail = (props) => {
  return (
    <div className="projectDetail">
      <div>{props.detail.title}</div>
      <div>{props.detail.author}</div>
      <p>This is the content in post...</p>
      <div className="buttonContainer">
        <button>edit</button> <button>delete</button>
      </div>
      <div style={{ marginTop: "20px" }}>GPA: {props.detail.gpa}</div>
    </div>
  );
};
export default PostDetail;
