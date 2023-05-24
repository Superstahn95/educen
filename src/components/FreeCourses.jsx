import React from "react";
import bgImg from "../assets/free.jpg";
import { BiLock } from "react-icons/bi";
import Button from "./Button";

function FreeCourses() {
  return (
    <section
      className="my-7 relative min-h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-full bg-blue-700/40"></div>
      <div className="container w-[90%]  mx-auto grid md:grid-cols-2 relative z-[99]">
        <div>
          <h2 className="uppercase text-2xl font-merriweather text-white">
            get 100s of online courses for free
          </h2>
          <h1 className="uppercase text-6xl font-merriweather text-white font-bold py-3">
            register now
          </h1>
          <div className="flex flex-col gap-4 md:flex-row my-4">
            <div className="border border-solid border-white text-white font-bold w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
              <span className="text-3xl">0</span>
              <span className="capitalize">days</span>
            </div>
            <div className="border border-solid border-white text-white font-bold w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
              <span className="text-3xl">0</span>
              <span className="capitalize">hours</span>
            </div>
            <div className="border border-solid border-white text-white font-bold w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
              <span className="text-3xl">00</span>
              <span className="capitalize">minutes</span>
            </div>
            <div className="border border-solid border-white text-white font-bold w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
              <span className="text-3xl">00</span>
              <span className="capitalize">seconds</span>
            </div>
          </div>
        </div>

        {/* form side */}
        <div className="flex items-center justify-center">
          <div className="w-[80%]">
            <div className=" bg-red-400 text-white font-bold px-10 py-3 flex items-center ">
              <BiLock size={30} />
              <h2 className="uppercase font-roboto text-xl">
                Create your account now
              </h2>
            </div>
            <div className="bg-white p-10">
              <div className="mb-3">
                <input
                  type="text"
                  className="border border-solid border-black/40 p-4 w-full font-roboto"
                  placeholder="Your name*"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="border border-solid border-black/40 p-4 w-full font-roboto"
                  placeholder="Email*"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="border border-solid border-black/40 p-4 w-full font-roboto"
                  placeholder="Phone*"
                />
              </div>
              <div className="mb-3">
                <Button design={"button-blue"} text="get it now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeCourses;
