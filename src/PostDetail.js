import axios from "axios";
import CustomForm from "./CustomForm";

const PostDetail = (props) => {
  return (
    <div className="projectDetail">
      <></>
      <div>{props.detail.title}</div>
      <div>{props.detail.author}</div>
      <p>This is the content in post...</p>
      <div className="buttonContainer">
        <button onClick={() => props.changeAction({ name: "edit", id: props.detail.id })}>edit</button>
        <button onClick={() => props.changeAction({ name: "delete", id: props.detail.id })}>delete</button>
      </div>
      <div style={{ marginTop: "20px" }}>GPA: {props.detail.gpa}</div>
    </div>
  );
};
export default PostDetail;
