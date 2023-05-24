import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-[50%] right-4 text-white rounded-full p-4 bg-transparent hover:bg-[#ff7675] z-[1999] cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos />
    </div>
  );
}

export default NextArrow;
