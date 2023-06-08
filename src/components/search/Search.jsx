import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <section className="py-10">
      <div className="w-[90%] mx-auto bg-slate-200 flex items-center justify-between p-4">
        {/* to be made dynamic */}
        <span className="font-roboto text-black/60">
          Showing _ of _ results
        </span>
        <div className="flex items-center">
          <input type="text" placeholder="Search courses.." className="p-2" />
          <button className="bg-red-500 text-white font-bold py-2 px-3">
            <AiOutlineSearch size={25} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search;
