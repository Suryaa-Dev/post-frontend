import { useState } from "react";
import axios from "axios";

function Upload() {
  const [form, setForm] = useState({ username: "", caption: "", image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", form.username);
    data.append("caption", form.caption);
    data.append("image", form.image);
    await axios.post("https://post-backend-wwh9.onrender.com/api/posts", data);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Caption"
        value={form.caption}
        onChange={(e) => setForm({ ...form, caption: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        required
      />
      <button type="submit">Upload Post</button>
    </form>
  );
}

export default Upload;
