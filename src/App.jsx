import Feed from "./components/Feed";
import Upload from "./components/Upload";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>📸 Mini Instagram</h1>
      <Upload />
      <Feed />
    </div>
  );
}

export default App;
