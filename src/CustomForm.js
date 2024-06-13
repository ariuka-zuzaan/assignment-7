import axios from "axios";
import { useEffect, useRef } from "react";

const CustomForm = (props) => {
  const formRef = useRef();

  const handleSubmit = () => {
    const form = formRef.current;
    const data = {
      author: form["author"].value,
      title: form["title"].value,
      gpa: form["gpa"].value,
    };
    if (props.isEdit) {
      axios
        .put(`http://localhost:8080/api/v1/posts/${props.post.id}`, data)
        .then((response) => {
          props.changed();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      axios
        .post("http://localhost:8080/api/v1/posts", data)
        .then((response) => {
          props.changed();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    if (props.isEdit && props.post && formRef.current) {
      formRef.current.title.value = props.post.title;
      formRef.current.author.value = props.post.author;
      formRef.current.gpa.value = props.post.gpa;
    }
  }, [props.isEdit]);
  return (
    <form ref={formRef} className="addForm">
      {props.isEdit && (
        <div>
          <label>Id:</label>
          <b>{props.post.id}</b>
          <br />
          <br />
        </div>
      )}
      <label for="title">Title</label>
      <input name="title" id="title" type="text" required />
      <br />
      <label for="author">Author</label>
      <input name="author" id="author" type="text" required />
      <br />
      <label for="gpa">GPA</label>
      <input name="gpa" id="gpa" type="number" step="0.01" required />
      <br />
      <div className="btnContainer">
        <button onClick={handleSubmit}>Save</button>
      </div>
    </form>
  );
};

export default CustomForm;
