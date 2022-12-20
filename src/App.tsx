import { useGetPostsQuery } from "./slices/postApiSlice";

function App(): JSX.Element {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  if (isLoading) return <p>Loading...</p>;

  console.log(posts);

  return (
    <main>
      <h3>Posts</h3>
      <ul></ul>
    </main>
  );
}

export default App;
