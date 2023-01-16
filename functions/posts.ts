import * as dotenv from "dotenv";
dotenv.config();
import { HandlerEvent, HandlerContext } from "@netlify/functions";
import axios from "axios";

export const handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { data: posts } = await axios.get(`${process.env.VITE_API_URL}/posts`);

  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(posts),
  };
};
