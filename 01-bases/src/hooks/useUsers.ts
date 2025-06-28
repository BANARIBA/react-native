import { useEffect, useRef, useState } from "react";
import { loadUsersAction } from "../actions/load-users.action";

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export const useUsers = () => {
  
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsersAction(1)
      .then(users => setUsers(users));
  }, []);

  const nextPage = async () => {
    currentPageRef.current ++;
    const users = await loadUsersAction(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current --;
    }
  }

  const previusPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current --;
    const users = await loadUsersAction(currentPageRef.current);
    setUsers(users);
  }

  return {
    users,
    nextPage,
    previusPage,
  }
}
