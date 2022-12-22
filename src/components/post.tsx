import { useParams } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useGetCommentsByIdQuery,
  useGetUserQuery,
} from "../slices/postApiSlice";
import User from "../models/User";
import Post from "../models/Post";

const Post = () => {
  const { id, userId } = useParams();
  const {
    data: postData = [],
    isLoading,
    isError,
  } = useGetPostByIdQuery(id as string);
  const { data: comments = [] } = useGetCommentsByIdQuery(id as string);

  const { data: userData = [], isError: isUserError } = useGetUserQuery(
    userId as string
  );

  const getData = () => {
    const post = postData as Post;
    const user = userData as User;
    return { post, user };
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || isUserError) return <p>Error!</p>;
  return (
    <>
      <h3>{getData().post.title}</h3>
      <p>{getData().post.body}</p>
      <h4> written by - {getData().user.name}</h4>
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
  );
};

export default Post;
