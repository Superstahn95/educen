import React from "react";

function Button({ design, text }) {
  return (
    <button
      //   className={`uppercase relative py-2 px-4 block  transition-all duration-1000 ease-in-out overflow-hidden ${bg} ${before} ${hover} `}
      className={design}
    >
      {text}
    </button>
  );
}

export default Button;
