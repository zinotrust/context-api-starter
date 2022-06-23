import React from "react";

const User = ({ id, name }) => {
  return (
    <div className="--flex-between">
      <h3 className="--text-light">{name}</h3>
      <button className="--btn --btn-danger">Delete</button>
    </div>
  );
};

export default User;
