import React from "react";

function Button({ text }) {
  return (
    <div
      className="bg-blue-400 text-white font-medium rounded-md py-2 px-4"
      style={{ fontSize: "1vw" }}
    >
      {text}
    </div>
  );
}

export default Button;
