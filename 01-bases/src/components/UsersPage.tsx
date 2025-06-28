import { useUsers } from "../hooks/useUsers"
import { UserRow } from "./UserRow"

export const UsersPage = (): JSX.Element => {

  const {users, previusPage, nextPage} = useUsers();

  return (
    <>
      <h3>Users</h3> 
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (<UserRow key={user.id} user={user} />))
          }
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button className="p-2 bg-blue-500 text-white rounded-xl" onClick={previusPage}>Previus</button>
        <button className="p-2 bg-blue-500 text-white rounded-xl" onClick={nextPage}>Next</button>
      </div>
    </>
  )
}
