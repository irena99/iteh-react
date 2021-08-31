import React from "react";

const Button = ({ type, className, small, children }) => {
  return (
    <button
      type={type}
      style={{
        padding: small ? "5px 8px" : "10px 20px",
        fontSize: small ? "14px" : "20px",
      }}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;