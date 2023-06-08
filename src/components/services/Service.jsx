import React from "react";
import { SlGraduation } from "react-icons/sl";
import { GiTeacher } from "react-icons/gi";
import { BsWifi } from "react-icons/bs";
import { TbFileCertificate } from "react-icons/tb";

function Service() {
  return (
    <section>
      <div className="flex items-center justify-center flex-wrap py-10 w-[90%] mx-auto">
        {/* first service */}
        <div className="flex flex-col items-center group w-[25%] min-w-[300px]">
          <div className="border border-sky-900 bg-sky-900 group-hover:bg-white p-5 rounded-full">
            <BsWifi
              className="text-white group-hover:text-sky-900 "
              size={90}
            />
          </div>
          <span className="uppercase text-sky-900 text-xl font-bold py-4 font-merriweather hover:text-red-600">
            online courses
          </span>
          <hr className="border border-solid border-sky-900 w-[10%]" />
          <span className="font-roboto text-black/40 py-4 text-center">
            It is a long established fact that a reader will be distracted.
          </span>
        </div>
        {/* second service */}
        <div className="flex flex-col items-center group  w-[25%] min-w-[300px]">
          <div className="border border-yellow-500 bg-yellow-500 group-hover:bg-white p-5 rounded-full">
            <TbFileCertificate
              className="text-white group-hover:text-yellow-500 "
              size={90}
            />
          </div>
          <span className="uppercase text-yellow-500 text-xl font-bold py-4 font-merriweather hover:text-red-600">
            BECOME AN INSTRUCTOR
          </span>
          <hr className="border border-solid border-yellow-500 w-[10%]" />
          <span className="font-roboto text-black/40 py-4 text-center">
            It is a long established fact that a reader will be distracted.
          </span>
        </div>
        {/* third service */}
        <div className="flex flex-col items-center group w-[25%] min-w-[300px]">
          <div className="border border-green-400 bg-green-400 group-hover:bg-white p-5 rounded-full">
            <SlGraduation
              className="text-white group-hover:text-green-400 "
              size={90}
            />
          </div>
          <span className="uppercase text-green-400 text-xl font-bold py-4 font-merriweather hover:text-red-600">
            multi-media units
          </span>
          <hr className="border border-solid border-green-400 w-[10%]" />
          <span className="font-roboto text-black/40 py-4 text-center">
            It is a long established fact that a reader will be distracted.
          </span>
        </div>
        {/* fourth service */}
        <div className="flex flex-col items-center group w-[25%] min-w-[300px]">
          <div className="border border-blue-400 bg-blue-400 group-hover:bg-white p-5 rounded-full">
            <SlGraduation
              className="text-white group-hover:text-blue-400 "
              size={90}
            />
          </div>
          <span className="uppercase text-blue-400 text-xl font-bold py-4 font-merriweather hover:text-red-600">
            subscribe courses
          </span>
          <hr className="border border-solid border-blue-400 w-[10%]" />
          <span className="font-roboto text-black/40 py-4 text-center text-[16px]">
            It is a long established fact that a reader will be distracted.
          </span>
        </div>
      </div>
      <div className="my-10 bg-slate-200 py-10 flex items-center gap-3 justify-center">
        <p className="text-2xl font-roboto">
          Find out why students love{" "}
          <span className="font-bold uppercase ">educen education</span>
        </p>
        <button className="bg-yellow-500 px-4 py-3 uppercase font-bold">
          find out more
        </button>
      </div>
    </section>
  );
}

export default Service;
