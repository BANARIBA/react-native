import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
  const { users, handleNextPage, handlePreviousPage } = useUsers();
  return (
    <div>
      <h3>Usuarios</h3>
      <table className="w-125 bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between w-125 pt-5">
        <button
          onClick={handlePreviousPage}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
