import { useState } from "react";
import Posts from "./Posts";
import PostDetail from "./PostDetail";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [changedTitle, setChangedTitle] = useState("");
  const [postDetail, setPostDetail] = useState(null);

  const showDetailDashboard = (item) => {
    setPostDetail(item);
  };

  return (
    <div className="dashboard-container">
      <Posts title={changedTitle} showDetailPosts={showDetailDashboard} />
      <input
        name="title"
        type="text"
        value={title}
        defaultValue=""
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button onClick={() => setChangedTitle(title)}>Change name</button>
      {postDetail && <PostDetail detail={postDetail}></PostDetail>}
    </div>
  );
};
export default Dashboard;
