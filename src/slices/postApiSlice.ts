import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => `/posts`,
    }),
  }),
});

// we made endpoints named getUsers. From there useGetUsersQuery coming.

export const { useGetPostsQuery } = postApi;
