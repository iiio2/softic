import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
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

    getUser: builder.query<User, string>({
      query: (user) => `/users/${user}`,
    }),

    getCommentsById: builder.query<Comment[], string>({
      query: (comment) => `/posts/${comment}/comments`,
    }),
  }),
});

// we made endpoints named getUsers. From there useGetUsersQuery coming.

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetUserQuery,
  useGetCommentsByIdQuery,
} = postApi;
