import { Routes, Route } from "react-router-dom";
import Posts from "./components/posts";
import Post from "./components/post";
import NotFound from "./components/notFound";

function App(): JSX.Element {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id/user/:userId" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
