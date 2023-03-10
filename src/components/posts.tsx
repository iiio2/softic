import _ from "lodash";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../slices/postApiSlice";

const Posts = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  return (
    <div className="posts">
      <h3>Get Posts</h3>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/post/${post.id}/user/${post.userId}`}>
              <li>{_.get(post, ["title"])}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
