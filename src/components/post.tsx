import { useParams } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useGetCommentsByIdQuery,
  useGetUserQuery,
} from "../slices/postApiSlice";

const Post = () => {
  const { id, userId } = useParams();
  const { data: post = [], isLoading, isError } = useGetPostByIdQuery(id || "");
  const { data: comments = [] } = useGetCommentsByIdQuery(id || "");

  const { data: user } = useGetUserQuery(userId || "");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  return (
    <>
      <h3>Post</h3>
      {post && "title" in post && user && "name" in user && (
        <>
          <h4>{user.name}</h4>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </>
      )}
      <h5>Comments</h5>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id}>
            <li>{comment.name}</li>
            <li>{comment.email}</li>
            <li>{comment.body}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Post;
