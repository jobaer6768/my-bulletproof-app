import { apiClient } from "@/libs/axios";
import { User } from "../types";

export const getUsers = async (): Promise<User[]> => {
  const response = await apiClient.get("/users");

  return response.data;
};
