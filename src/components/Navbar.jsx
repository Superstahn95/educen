import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCall, MdEmail } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGooglePlus,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showSecondNav, setShowSecondNav] = useState(false);
  //state for responsive navbar
  const [showNav, setShowNav] = useState(false);
  const handleSearch = () => {
    if (showSearch) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  };
  //handle second nav display
  const showFixedNav = () => {
    if (window.scrollY >= 250) {
      if (window.innerWidth <= 1021) {
        setShowSecondNav(false);
      } else {
        setShowSecondNav(true);
        setShowNav(false);
      }
    } else {
      setShowSecondNav(false);
      setShowNav(false);
    }
  };

  window.addEventListener("scroll", showFixedNav);
  window.addEventListener("resize", showFixedNav);
  return (
    <header className="relative">
      {/* header with contact links */}
      <div className="bg-sky-900 py-4 hidden md:block">
        <div className="flex items-center justify-between container w-[80%] mx-auto ">
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
          <div className="flex items-center  w-[fit-content]">
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
      {/* navbar with nav links */}
      <div className="bg-white py-4">
        <div className="container w-[80%] mx-auto flex items-center justify-between">
          <div className="flex-[0.5]">
            <img
              src="https://htmldemo.net/educan/educan/images/logo/educan.png"
              alt="educen logo"
            />
          </div>
          <div className="flex-[1] hidden lg:block ">
            <ul className="flex  items-center justify-between font-bold uppercase">
              <li className="cursor-pointer ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/about"}>About Us</Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <AiOutlineSearch
                size={30}
                className="cursor-pointer"
                onClick={handleSearch}
              />
            </ul>
          </div>
          <div className="lg:hidden">
            {showNav ? (
              <AiOutlineClose
                size={30}
                onClick={() => setShowNav((prev) => !prev)}
              />
            ) : (
              <GiHamburgerMenu
                size={30}
                className="cursor-pointer"
                onClick={() => setShowNav((prev) => !prev)}
              />
            )}
          </div>
        </div>
      </div>
      {/* second nav to be displayed whenever we hit a certain scroll distance */}
      <div
        className={
          showSecondNav
            ? "bg-white py-4 fixed z-[1999] w-full top-0 transition-all duration-1000 ease-in-out "
            : "bg-white py-4 fixed w-full top-0 hidden"
        }
      >
        <div className="container w-[80%] mx-auto flex items-center justify-between">
          <div className="flex-[0.5]">
            <img
              src="https://htmldemo.net/educan/educan/images/logo/educan.png"
              alt="educen logo"
            />
          </div>
          <div className="flex-[1] hidden lg:block ">
            <ul className="flex  items-center justify-between font-bold uppercase">
              <li className="cursor-pointer ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/about"}>About Us</Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <AiOutlineSearch
                size={30}
                className="cursor-pointer"
                onClick={handleSearch}
              />
            </ul>
          </div>
          {/* <div className="lg:hidden">
            <GiHamburgerMenu size={30} />
          </div> */}
        </div>
      </div>
      {/* Search funtionality trigger */}
      <div
        className={
          showSearch
            ? "absolute w-full z-[1999] bg-sky-900 h-[250px] top-0 left-0 flex items-center justify-center transition-all ease-in-out duration-500"
            : "absolute w-full z-[1999] bg-sky-900 h-[250px] -top-[250px] left-0 flex items-center justify-center transition-all ease-in-out duration-500"
        }
      >
        <div className="container w-[80%] flex items-center">
          <div className="flex w-full  mx-auto bg-white">
            <input
              type="text"
              placeholder="Search here....."
              className="w-full border-none p-4 outline-none text-xl"
            />
            <button className="hover:bg-red-400 px-2">
              <AiOutlineSearch size={30} />
            </button>
          </div>
          <button
            onClick={handleSearch}
            className="cursor-pointer ms-3 bg-transparent text-white transition-all ease-in-out 
           duration-500 hover:text-red-600"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </div>
      {/* Responsive nav */}
      {showNav && (
        <div className="bg-sky-950 transition-all ease-in-out duration-1000">
          <ul className="text-[16px] text-white/70 uppercase ">
            <li className="py-3 border-b border-white border-solid">
              <Link className="ms-7">Home</Link>
            </li>
            <li className="py-3 border-b border-white border-solid">
              <Link className="ms-7">About</Link>
            </li>
            <li className="py-3 border-b border-white border-solid">
              <Link className="ms-7">Gallery</Link>
            </li>
            <li className="py-3 border-b border-white border-solid">
              <Link className="ms-7">Courses</Link>
            </li>
            <li className="py-3 border-b border-white border-solid">
              <Link className="ms-7">Blog</Link>
            </li>
            <li className="py-3 border-b border-white border-solid">
              <Link className="ms-7">Shop</Link>
            </li>
            <li className="py-3 border-b border-white border-solid">
              <Link className="ms-7">Contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
