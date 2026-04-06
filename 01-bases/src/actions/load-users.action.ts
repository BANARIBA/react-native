import axios, { isAxiosError } from "axios";
import type {
  ReqResUser,
  UserListResponse,
} from "../interfaces/users-req-res.interface";

export const loadUsersAction = async (page: number): Promise<ReqResUser[]> => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users`,
      {
        params: { page },
      },
    );
    console.log(data.data);
    return [];
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error("Error al cargar los usuarios: " + error.message);
    }
    throw new Error("Error al cargar los usuarios");
  }
};
