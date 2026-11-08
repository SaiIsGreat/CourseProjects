import type { User } from "./App";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const renderedUsers = users.map((user: User) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
