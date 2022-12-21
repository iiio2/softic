import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../slices/postApiSlice";

const Posts = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  if (isLoading) return <p>Loading...</p>;

  console.log(posts);
  return (
    <>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>
              <li>Title - {post.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Posts;
