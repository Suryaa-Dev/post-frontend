import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("https://mern-insta-backend.onrender.com/api/posts");
    setPosts(res.data);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleLike = async (id) => {
    await axios.post(`https://mern-insta-backend.onrender.com/api/posts/${id}/like`);
    fetchPosts();
  };

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h3>@{post.username}</h3>
          <img
            src={`https://mern-insta-backend.onrender.com${post.image}`}
            alt="post"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p>{post.caption}</p>
          <button onClick={() => handleLike(post._id)}>❤️ {post.likes}</button>
        </div>
      ))}
    </div>
  );
}

export default Feed;
