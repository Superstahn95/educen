import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function ForwardArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className=" text-black/40 border border-solid border-black/40 z-[99] cursor-pointer w-fit top-[100%] right-[35%]  absolute md:top-[50%]  md:-right-0 lg:-right-10"
    >
      <MdOutlineArrowForwardIos size={40} />
    </div>
  );
}

export default ForwardArrow;
