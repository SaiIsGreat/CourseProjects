import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

export interface User {
  name: string;
  email: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
};

export default App;
