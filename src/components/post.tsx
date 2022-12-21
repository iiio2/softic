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

  const { data: user, isError: isUserError } = useGetUserQuery(userId || "");

  if (isLoading) return <p>Loading...</p>;

  if (isError || isUserError) return <p>Error!</p>;

  return (
    <>
      {post && "title" in post && user && "name" in user && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <h4> written by - {user.name}</h4>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => (
              <div key={comment.id} className="comments">
                <li>Name - {comment.name}</li>
                <li>Email - {comment.email}</li>
                <li>Body - {comment.body}</li>
              </div>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Post;
