import "./App.scss";
import React, { useState } from "react";
import { userData } from "./components/context-api/data";
import UserList from "./components/context-api/UserList";

function App() {
  const [users, setusers] = useState(userData);
  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setusers(newUsers);
  };

  return (
    <div className="--flex-center ">
      <div className="--width-500px --my">
        <h2>Props Drilling</h2>
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </div>
  );
}

export default App;
