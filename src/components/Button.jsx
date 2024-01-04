import React from "react";

const Button = (props) => {
  const { className, children, type, onClick } = props;
  return (
    <button
      className={className}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
