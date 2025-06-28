import axios from "axios";
import { UsersResponse } from "../hooks/useUsers";

export const loadUsersAction = async (page: number) => {
  try {
    const {data} = await axios.get<UsersResponse>('https://reqres.in/api/users', {
      params: {
        page: page,
      }
    });
    return data.data;
  } catch (error) {
    console.error(`Sometime went wrong loading users: ${error}`);
    return [];
  }
}