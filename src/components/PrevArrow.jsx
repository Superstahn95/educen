import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-[50%] text-white left-4 rounded-full p-4 bg-transparent hover:bg-[#ff7675] z-[1999] cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineArrowBackIosNew />
    </div>
  );
}

export default PrevArrow;
