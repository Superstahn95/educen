import React from "react";
import Slider from "react-slick";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import Button from "./Button";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div>
        <Slider {...settings}>
          <div className=" h-[80vh] carousel-a relative">
            <div className="absolute w-full h-full bg-black/50"></div>
            <div className="container w-[80%]   mx-auto  h-full flex flex-col justify-center text-white ">
              <div className="w-[80%]  relative z-[99] lg:w-[70%] ">
                <h1 className="uppercase  font-bold  py-4 font-merriweather text-3xl lg:text-7xl">
                  English test
                </h1>
                <p className="text-2xl capitalize leading-normal  tracking-wide font-roboto pb-2 lg:3xl">
                  Determine your proficiency level in English by taking our free
                  Online English Test.
                </p>
                <Button text="order now!" design="button-blue" />
              </div>
            </div>
          </div>
          <div className=" h-[80vh] relative carousel-b ">
            <div className="absolute w-full h-full bg-black/50"></div>
            <div className="container w-[80%]   mx-auto  h-full flex flex-col justify-center text-white ">
              <div className="w-[80%]  relative z-[99] lg:w-[70%]">
                <h1 className="uppercase  font-bold  py-4 font-merriweather text-3xl lg:text-7xl">
                  Mobile ux course
                </h1>
                <p className="text-2xl capitalize leading-normal  tracking-wide font-roboto pb-2 lg:3xl">
                  The difference between desktop and mobile ux are so vast, and
                  deepen so fast
                </p>
                <Button text="learn more" design="button-blue" />
              </div>
            </div>
          </div>
          <div className=" h-[80vh] relative carousel-c ">
            <div className="absolute w-full h-full bg-black/50"></div>
            <div className="container w-[80%]   mx-auto  h-full flex flex-col justify-center text-white ">
              <div className="w-[80%]  relative z-[99] lg:w-[70%] ">
                <h1 className="uppercase  font-bold  py-4 font-merriweather text-3xl lg:text-7xl">
                  English test
                </h1>
                <p className="text-2xl capitalize leading-normal  tracking-wide font-roboto pb-2 lg:3xl">
                  Determine your proficiency level in English by taking our free
                  Online English Test.
                </p>
                <Button text="order now!" design="button-blue" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Hero;
