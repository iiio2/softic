import _ from "lodash";
import { useParams } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useGetCommentsByIdQuery,
  useGetUserQuery,
} from "../slices/postApiSlice";
import Column from "../models/Column";

const Post = () => {
  const { id, userId } = useParams();
  const columns: Column[] = [
    { key: 1, path: "name" },
    { key: 2, path: "email" },
    { key: 3, path: "body" },
  ];
  const { data: post, isLoading, isError } = useGetPostByIdQuery(id!);
  const { data: comments = [] } = useGetCommentsByIdQuery(id!);
  const { data: user, isError: isUserError } = useGetUserQuery(userId!);

  if (isLoading) return <p>Loading...</p>;
  if (isError || isUserError) return <p>Error!</p>;

  return (
    <>
      <h3>{_.get(post, ["title"])}</h3>
      <p>{_.get(post, ["body"])}</p>
      <h4> written by - {_.get(user, ["name"])}</h4>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id} className="comments">
            {columns.map((column) => (
              <li key={column.path}>{_.get(comment, [column.path])}</li>
            ))}
          </div>
        ))}
      </ul>
    </>
  );
};

export default Post;
