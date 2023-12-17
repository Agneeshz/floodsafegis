import React from "react";

function Button({ text, alignment = "left" }) {
  return (
    <div
      className="bg-blue-400 text-white font-medium rounded-md py-2 px-4"
      style={{ fontSize: "1vw", textAlign: alignment }}
    >
      {text}
    </div>
  );
}

export default Button;
