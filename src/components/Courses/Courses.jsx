import React from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import data from "./courses.json";
import ForwardArrow from "./ForwardArrow";
import BackwardArrow from "./BackwardArrow";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <ForwardArrow onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <BackwardArrow onClick={onClick} />;
}

function Courses() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section>
      <div className="flex flex-col items-center py-5">
        <h1 className="font-merriweather font-bold  uppercase text-3xl py-7">
          popular courses
        </h1>
        <p className="text-black/40 capitalize text-[16px]  font-roboto pb-4">
          The best in our school
        </p>
        <hr className="w-[5%] text-center border-black" />
      </div>
      <div className="w-[90%] relative mx-auto">
        <Slider {...settings}>
          {data &&
            data.map((subject) => (
              <CourseCard subject={subject} key={subject.id} />
            ))}
        </Slider>
      </div>
    </section>
  );
}

export default Courses;
