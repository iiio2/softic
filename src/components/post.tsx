import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../slices/postApiSlice";

const Post = () => {
  const { id } = useParams();

  const { data: post = [], isLoading, isError } = useGetPostByIdQuery(id || "");
  console.log(typeof id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;
  console.log(post);

  return (
    <>
      <h3>Post</h3>
      {post && "title" in post && (
        <>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
};

export default Post;
