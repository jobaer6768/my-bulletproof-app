import { apiClient } from "@/libs/axios";
import { Post } from "../types";

export const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get("/posts");

  return response.data;
};
