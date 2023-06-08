import { AiOutlineSearch } from "react-icons/ai";
import Intro from "../components/intro/Intro";
import data from "../components/Courses/courses.json";
import CourseCard from "../components/Courses/CourseCard";
import Search from "../components/search/Search";

function Courses() {
  return (
    <>
      <Intro page={"courses"} />
      <Search />
      <div className="w-[90%] mb-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((subject) => (
          <CourseCard subject={subject} />
        ))}
      </div>
    </>
  );
}

export default Courses;
