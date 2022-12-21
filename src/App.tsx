import { Routes, Route } from "react-router-dom";
import Posts from "./components/posts";
import Post from "./components/post";

function App(): JSX.Element {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id/user/:userId" element={<Post />} />
      </Routes>
    </main>
  );
}

export default App;
