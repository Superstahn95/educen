import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function Navbar() {
  return (
    <header>
      <div className="bg-sky-900 py-4 hidden md:block">
        <div className="flex items-center justify-between container w-[80%] mx-auto">
          <div className="flex items-center text-white ">
            <div className="flex items-center">
              {" "}
              <MdCall />
              <span className="text-white px-2">+2348101891481</span>
            </div>
            <div className="flex items-center ms-4">
              {" "}
              <MdEmail />
              <span className="text-white px-2">Superstahn@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center  w-[200px]">
            <div className=" flex items-center text-white  border-r border-solid border-white">
              <AiOutlineTwitter size={20} className="me-3" />
              <AiFillInstagram size={20} className="me-3" />
              <FaFacebookF size={20} className="me-3" />
              <AiOutlineGooglePlus size={20} className="me-3" />
            </div>
            <div>
              <ul className="text-white flex items-center">
                <li className="ps-3">Register</li>
                <li className="ps-3">Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
