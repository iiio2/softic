import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
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

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetUserQuery,
  useGetCommentsByIdQuery,
} = postApi;
