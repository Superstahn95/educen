import React from "react";
import { useLocation, Link } from "react-router-dom";

//let us handle breadcrumbs here
function Intro({ page }) {
  const location = useLocation();
  //   console.log(location);
  const textArray = location.pathname.split("/");

  return (
    <section className="h-[40vh] intro relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="uppercase text-3xl font-bold font-merriweather">
          {page}
        </h1>
        <span className="mt-4 text-[18px] capitalize">
          <Link to={"/"}>Home</Link> &gt;{" "}
          <span className="text-white/60"> {textArray[1]}</span>
        </span>
      </div>
    </section>
  );
}

export default Intro;
