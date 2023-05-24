import Hero from "../components/Hero";
import Button from "../components/Button";
import AboutUs from "../components/AboutUs";
import CountDown from "../components/CountDown";
import Courses from "../components/Courses/Courses.jsx";
import FreeCourses from "../components/FreeCourses";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <CountDown />
      <Courses />
      <FreeCourses />
    </>
  );
}

export default Home;
