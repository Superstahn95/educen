import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import Button from "./Button";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <NextArrow onClick={onClick} />;
}
// absolute top-[50%] right-4 text-white rounded-full p-4 bg-transparent hover:bg-red-500 z-[1999] cursor-pointer

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <PrevArrow onClick={onClick} />;
}

function Hero() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section>
      <div>
        <Slider {...settings}>
          <div className=" h-[80vh] carousel-a relative">
            {/* <PrevArrow /> */}
            <div className="absolute w-full h-full bg-black/50"></div>
            <div className="container w-[80%]   mx-auto  h-full flex flex-col justify-center text-white ">
              <div className="relative z-[99] w-[80%] lg:w-[60%]">
                <motion.div
                  //   whileInView={{
                  //     borderRight: "3px solid white",
                  //     opacity: [1, 0],
                  //     width: "2px",
                  //   }}
                  //   initial={{ borderRight: "3px solid white", x: 0 }}
                  //   transition={{ duration: 2, delay: 1 }}
                  className="absolute w-full h-full bg-transparent z-[-1] "
                ></motion.div>
                <motion.div
                  //   whileInView={{ visibility: "visible" }}
                  //   initial={{ visibility: "hidden" }}
                  //   transition={{ duration: 1, delay: 2 }}
                  className=""
                >
                  <motion.h1
                    //   whileInView={{ visibility: "visible" }}
                    //   initial={{ visibility: "hidden" }}
                    //   transition={{ duration: 1, delay: 2 }}
                    className="uppercase  font-bold  py-4 font-merriweather text-3xl lg:text-7xl"
                  >
                    English test
                  </motion.h1>
                  <motion.p
                    //   whileInView={{ visibility: "visible" }}
                    //   initial={{ visibility: "hidden" }}
                    //   transition={{ duration: 1, delay: 2 }}
                    className="text-2xl capitalize leading-normal  tracking-wide font-roboto pb-2 lg:3xl"
                  >
                    Determine your proficiency level in English by taking our
                    free Online English Test.
                  </motion.p>
                  <Button text="order now!" design="button-blue" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className=" h-[80vh] relative carousel-b ">
            <div className="absolute w-full h-full bg-black/50"></div>
            <div className="container w-[80%]   mx-auto  h-full flex flex-col justify-center text-white ">
              <motion.div
                // whileInView={{ scale: 1 }}
                // initial={{ scale: 1.3 }}
                // transition={{ delay: 0.5, duration: 1 }}
                className="w-[80%]  relative z-[99] lg:w-[70%]"
              >
                <h1 className="uppercase  font-bold  py-4 font-merriweather text-3xl lg:text-7xl">
                  Mobile ux course
                </h1>
                <p className="text-2xl capitalize leading-normal  tracking-wide font-roboto pb-2 lg:3xl">
                  The difference between desktop and mobile ux are so vast, and
                  deepen so fast
                </p>
                <Button text="learn more" design="button-blue" />
              </motion.div>
            </div>
          </div>
          <div className=" h-[80vh] relative carousel-c ">
            <div className="absolute w-full h-full bg-black/50"></div>
            <div className="container w-[80%]   mx-auto  h-full flex flex-col justify-center text-white ">
              <motion.div
                // whileInView={{ scale: 1 }}
                // initial={{ scale: 1.3 }}
                // transition={{ delay: 0.5, duration: 1 }}
                className="w-[80%]  relative z-[99] lg:w-[70%] "
              >
                <h1 className="uppercase  font-bold  py-4 font-merriweather text-3xl lg:text-7xl">
                  English test
                </h1>
                <p className="text-2xl capitalize leading-normal  tracking-wide font-roboto pb-2 lg:3xl">
                  Determine your proficiency level in English by taking our free
                  Online English Test.
                </p>
                <Button text="order now!" design="button-blue" />
              </motion.div>
            </div>
            {/* <NextArrow /> */}
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Hero;
