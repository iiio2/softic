import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => `/posts`,
    }),

    getPostById: builder.query<Post, string>({
      query: (post) => `/post?id=${post}`,
    }),

    getUser: builder.query<User, string>({
      query: (user) => `/user?id=${user}`,
    }),

    getCommentsById: builder.query<Comment[], string>({
      query: (comment) => `/comments?id=${comment}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetUserQuery,
  useGetCommentsByIdQuery,
} = postApi;
