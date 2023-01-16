import axios from "axios";
import { HandlerEvent } from "@netlify/functions";

export const handler = async (event: HandlerEvent) => {
  const { data: comments } = await axios.get(
    `${process.env.VITE_API_URL}/posts/${event.queryStringParameters?.id}/comments`
  );
  return {
    statusCode: 200,
    body: JSON.stringify(comments),
  };
};
