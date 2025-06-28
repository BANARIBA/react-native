import { User } from "../hooks/useUsers"

interface Props {
  user: User;
}

export const UserRow = ({user}: Props) => {
  return (
    <tr className="p-2">
      <td>
        <img src={user.avatar} alt={"User " + user.email + " avatar"} className="rounded-full w-14 p-2 mx-auto" />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>
        {user.email}
      </td>
    </tr>
  )
}