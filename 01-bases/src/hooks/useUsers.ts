import { useEffect, useRef, useState } from "react";
import type { ReqResUser } from "../interfaces/users-req-res.interface";
import { loadUsersAction } from "../actions/load-users.action";

export const useUsers = () => {
  const [users, setUsers] = useState<ReqResUser[]>([]);
  const currentPageRef = useRef(1);

  const handleNextPage = async () => {
    currentPageRef.current += 1;
    const users = await loadUsersAction(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current -= 1;
    }
  };

  const handlePreviousPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current -= 1;
    const users = await loadUsersAction(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current += 1;
    }
  }

  useEffect(() => {
    loadUsersAction(1)
      .then((users) => setUsers(users))
      .catch((error) => {
        console.error("Error al cargar los usuarios:", error);
      });
  }, []);

  return { users, handleNextPage, handlePreviousPage };
};
