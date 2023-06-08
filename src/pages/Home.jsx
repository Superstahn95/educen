import Hero from "../components/Hero";
import Button from "../components/Button";
import AboutUs from "../components/AboutUs";
import CountDown from "../components/CountDown";
import Courses from "../components/Courses/Courses.jsx";
import FreeCourses from "../components/FreeCourses";
import Blog from "../components/blogs/Blog";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <CountDown />
      <Courses />
      <FreeCourses />
      <Blog />
    </>
  );
}

export default Home;
