import React, { useState } from "react";
import { GiGraduateCap, GiRibbonMedal } from "react-icons/gi";
import { BsFillBarChartFill, BsFillPeopleFill } from "react-icons/bs";
import bgImg from "../assets/countup.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CountDown() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative"
    >
      <div className="absolute bg-black/70 top-0 left-0 w-full h-full"></div>
      <div className="container w-[90%] mx-auto py-10 relative z-1 grid grid-cols-1  text-white font-roboto md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center ">
          <GiGraduateCap size={50} />
          <div className="py-4 flex">
            <ScrollTrigger onEnter={() => setCounterOn(true)}>
              {counterOn && (
                <h1 className="text-5xl font-bold ">
                  <CountUp duration={2} delay={0} start={0} end={98} />
                </h1>
              )}
            </ScrollTrigger>
            <span className="text-3xl font-bold">%</span>
          </div>

          <hr className="w-[10%] " />
          <p className="py-4">Graduates</p>
        </div>
        <div className="flex flex-col items-center">
          <GiRibbonMedal size={50} />
          <div className="py-4 flex">
            {counterOn && (
              <h1 className="text-5xl font-bold">
                <CountUp duration={2} delay={0} start={0} end={30} />
              </h1>
            )}
            <span className="text-3xl font-bold">+</span>
          </div>
          <hr className="w-[10%] " />
          <p className="py-4 capitalize">certified teachers</p>
        </div>
        <div className="flex flex-col items-center">
          <BsFillBarChartFill size={50} />
          {counterOn && (
            <h1 className="text-5xl font-bold  py-4">
              <CountUp duration={2} delay={0} start={0} end={7} />
            </h1>
          )}
          <hr className="w-[10%]" />
          <p className="py-4 capitalize">student campuses</p>
        </div>
        <div className="flex flex-col items-center">
          <BsFillPeopleFill size={50} />
          {counterOn && (
            <h1 className="text-5xl font-bold  py-4">
              <CountUp start={0} duration={2} delay={0} end={5959} />
            </h1>
          )}

          <hr className="w-[10%]" />
          <p className="py-4 capitalize">students</p>
        </div>
      </div>
    </section>
  );
}

export default CountDown;
