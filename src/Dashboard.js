import { useEffect, useState } from "react";
import Posts from "./Posts";
import PostDetail from "./PostDetail";
import axios from "axios";
import CustomForm from "./CustomForm";
import DetailContext from "./detailProvider";

const Dashboard = () => {
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState("");
  const [changedTitle, setChangedTitle] = useState("");
  const [postDetail, setPostDetail] = useState(null);
  const [changed, setChanged] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [actions, setActions] = useState({ name: "", id: null });
  const [selectedId, setSelectedId] = useState(null);

  const showDetailDashboard = (id) => {
    setSelectedId(id);
  };

  const fetchData = () => {
    axios.get("http://localhost:8080/api/v1/posts").then((response) => {
      console.log(response.data);
      setPostList(response.data);
      setIsNew(false);
      setActions({ name: "", id: null });
      setPostDetail(null);
    });
  };
  const deletePost = (id) => {
    axios.delete(`http://localhost:8080/api/v1/posts/${id}`).then((response) => {
      setChanged(!changed);
    });
  };

  const changeAction = (action) => {
    setActions({ id: action.id, name: action.name });
    if (action.name === "delete") {
      deletePost(action.id);
    }
  };

  useEffect(() => {
    fetchData();
  }, [changed]);

  useEffect(() => {
    setPostList([{ ...postList[0], title: changedTitle }, ...postList.slice(1)]);
  }, [changedTitle]);

  return (
    <DetailContext.provider value={selectedId}>
      <div className="dashboard-container">
        <button onClick={() => setIsNew(true)} style={{ marginBottom: "20px" }}>
          + Post
        </button>
        <Posts title={changedTitle} showDetailPosts={showDetailDashboard} posts={postList} />
        <input
          name="title"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button onClick={() => setChangedTitle(title)} style={{ marginLeft: "10px" }}>
          Change name
        </button>
        {postDetail && <PostDetail detail={postDetail} changeAction={changeAction}></PostDetail>}
        {isNew || actions.name === "edit" ? (
          <CustomForm
            isEdit={actions.name === "edit"}
            post={postList.filter((i) => i.id === actions.id)[0]}
            changed={() => {
              setChanged(!changed);
            }}></CustomForm>
        ) : (
          <></>
        )}
      </div>
    </DetailContext.provider>
  );
};
export default Dashboard;
