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
      query: () => `/posts?_page=0&_limit=20`,
    }),

    getPostById: builder.query<Post, string>({
      query: (post) => `/posts/${post}`,
    }),
  }),
});

// we made endpoints named getUsers. From there useGetUsersQuery coming.

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;
