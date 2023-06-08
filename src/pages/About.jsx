import React, { useEffect } from "react";
import Intro from "../components/intro/Intro";
import Service from "../components/services/Service";
import AboutUs from "../components/AboutUs";
import CountDown from "../components/CountDown";
import Team from "../components/team/Team";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Intro page={"about"} />
      <Service />
      <AboutUs />
      <CountDown />
      <Team />
    </>
  );
}

export default About;
