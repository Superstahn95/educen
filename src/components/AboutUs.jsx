import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
function AboutUs() {
  const [playScience, setPlayScience] = useState(false);
  const [arts, setArts] = useState(false);
  const [creativeWriting, setCreativeWriting] = useState(false);
  const spanVariant = {
    hidden: {
      x: -200,
      opacity: 0.4,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section>
      <div className="container w-[90%] mx-auto flex flex-col gap-4  justify-between py-20 lg:flex-row">
        {/* details div */}
        <div className="flex flex-col w-[100%] lg:w-[50%]">
          <h1 className="uppercase text-3xl font-bold font-merriweather py-2">
            About us
          </h1>
          <p className="text-[16px] text-black/30 font-roboto">
            Fable daycare, preschool and kindergarten
          </p>
          <div className="w-[50px] h-[2px] bg-black my-3 "></div>
          <p className="text-[16px] text-black/30 font-roboto">
            Come with us, we also teach children about the basic values of human
            beings as honesty, kindness, generosity, courage, freedom, equality
            and respect. Learn to celebrate diversity in a spirit of
            understanding and tolerance and develop a positive regard and
            awareness of other people. They are taught the values and
            responsibilities needed to become active members of the community...
          </p>
          <div>
            <ScrollTrigger onEnter={() => setPlayScience(true)}>
              {playScience && (
                <div className="py-2">
                  <div className="py-2 flex items-center justify-between ">
                    <span className="capitalize font-roboto text-black/40 text-sm">
                      playing science
                    </span>
                    <motion.span
                      variants={spanVariant}
                      animate="visible"
                      initial="hidden"
                      className="text-black/40 text-sm me-[10%]"
                    >
                      90%
                    </motion.span>
                  </div>
                  <ProgressBar
                    completed={90}
                    bgColor="#0f2a7c"
                    isLabelVisible={false}
                    height="7px"
                    animateOnRender
                    maxCompleted={100}
                  />
                </div>
              )}
            </ScrollTrigger>

            {/* Second progress bar */}
            <ScrollTrigger onEnter={() => setArts(true)}>
              {arts && (
                <div className="py-2">
                  <div className="py-2 flex items-center justify-between ">
                    <span className="capitalize font-roboto text-black/40 text-sm">
                      arts and crafts
                    </span>
                    <motion.span
                      variants={spanVariant}
                      animate="visible"
                      initial="hidden"
                      className="text-black/40 text-sm me-[5%]"
                    >
                      95%
                    </motion.span>
                  </div>
                  <ProgressBar
                    completed={95}
                    bgColor="#4b6bca"
                    isLabelVisible={false}
                    height="7px"
                    animateOnRender
                    maxCompleted={100}
                  />
                </div>
              )}
            </ScrollTrigger>

            {/* Third progress bar */}
            <ScrollTrigger onEnter={() => setCreativeWriting(true)}>
              {creativeWriting && (
                <div className="py-2">
                  <div className="py-2 flex items-center justify-between ">
                    <span className="capitalize font-roboto text-black/40 text-sm">
                      creative writing
                    </span>
                    <motion.span
                      variants={spanVariant}
                      animate="visible"
                      initial="hidden"
                      className="text-black/40 text-sm me-[7%]"
                    >
                      93%
                    </motion.span>
                  </div>
                  <ProgressBar
                    completed={93}
                    bgColor="#e80909"
                    isLabelVisible={false}
                    height="7px"
                    animateOnRender
                    maxCompleted={100}
                  />
                </div>
              )}
            </ScrollTrigger>
          </div>
        </div>
        {/* img div */}
        <div className="w-[100%] lg:w-[50%]">
          <img
            src="https://htmldemo.net/educan/educan/images/about/1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
