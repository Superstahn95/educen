import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function BackwardArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className=" border border-solid border-black/40  text-black/40 z-[99] w-fit cursor-pointer top-[100%] left-[35%] absolute md:top-[50%]  md:left-0 lg:-left-10"
    >
      <MdOutlineArrowBackIosNew size={40} />
    </div>
  );
}

export default BackwardArrow;
