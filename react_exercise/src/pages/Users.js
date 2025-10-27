import React from "react";
import UserCard from "../components/UserCard";

const Users = () => {
  const users = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" },
  ];

  return (
    <div className="page">
      <h1>Users Page</h1>
      <div className="user-list">
        {users.map((u) => (
          <UserCard key={u.id} name={u.name} role={u.role} />
        ))}
      </div>
    </div>
  );
};

export default Users;
