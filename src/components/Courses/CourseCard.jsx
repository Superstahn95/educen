import { BsFillPeopleFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CourseCard({ subject }) {
  //function for making our cutting down our description
  const truncateText = (str) => {
    return str.length > 240 ? str.substring(0, 237) + "..." : str;
  };
  return (
    <div className="shadow-sm overflow-hidden mx-3">
      <div className="h-[300px] overflow-hidden">
        <LazyLoadImage
          effect="blur"
          src={subject.img}
          alt={subject.subject}
          className="w-full h-[300px] cursor-pointer object-cover transition-all duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="relative font-roboto p-4">
        <h2 className="capitalize font-bold text-xl font-roboto">
          {subject.subject}
        </h2>
        <p className="text-black/40 py-3">
          {truncateText(subject.description)}
        </p>
        {/* tutor container */}
        <div className="absolute w-full left-0 bg-black/40 text-white -top-[50px] z-[98] px-4">
          {subject.tutor &&
            subject.tutor.map((tutor) => {
              return (
                <div className="flex items-center ">
                  <LazyLoadImage
                    src={tutor.img}
                    alt={tutor.name}
                    effect="blur"
                    className="h-[50px] w-[50px] rounded-full"
                  />
                  <p className="ms-3 text-[14px] font-roboto capitalize">
                    {tutor.name} /{" "}
                    <span className="font-italic">Professor</span>{" "}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-slate-100">
        <div className="flex items-center text-black/40">
          <span>
            <BsFillPeopleFill />
          </span>
          <span className="ms-4">{subject.students} students</span>
        </div>

        {subject.free ? (
          <p className="text-green-600 capitalize text-[18px]"> free</p>
        ) : (
          <p className="text-red-500 text-[18px]">NGN{subject.price}</p>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
