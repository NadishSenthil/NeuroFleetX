import React from "react";

const UserCard = ({ name, role }) => {
  return (
    <div className="box">
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
};

export default UserCard;