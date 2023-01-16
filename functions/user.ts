import { HandlerEvent } from "@netlify/functions";
import axios from "axios";

export const handler = async (event: HandlerEvent) => {
  const { data: user } = await axios.get(
    `${process.env.VITE_API_URL}/users/${event.queryStringParameters?.id}`
  );

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};
