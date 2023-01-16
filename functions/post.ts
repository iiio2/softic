import axios from "axios";
import { HandlerEvent } from "@netlify/functions";

export const handler = async (event: HandlerEvent) => {
  try {
    const { data: post } = await axios.get(
      `${process.env.VITE_API_URL}/posts/${event.queryStringParameters?.id}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(post),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
