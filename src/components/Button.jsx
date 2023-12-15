import React from "react";

const Button = ({ onClick, showAdd }) => {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {showAdd ? "Close" : "Add"}
      </button>
    </div>
  );
};

export default Button;
