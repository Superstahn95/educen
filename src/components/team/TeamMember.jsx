import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function TeamMember({ name, level, img }) {
  return (
    <div className="relative shadow-md cursor-pointer flex flex-col overflow-hidden  group ">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={img} alt="team" />
      </div>
      <div className="p-4 transition-all ease-in-out duration-500 bg-white absolute -bottom-[62px] w-full group-hover:bottom-0">
        <h2 className="font-roboto capitalize text-[20px]">{name}</h2>
        <h2 className="uppercase font-merriweather italic text-black/40 pb-3">
          {level}
        </h2>
        <div className=" flex gap-2 items-center  text-white">
          <div className="p-2 bg-cyan-500">
            <AiOutlineTwitter size={30} />
          </div>
          <div className="p-2 bg-yellow-700">
            <AiFillInstagram size={30} />
          </div>
          <div className="p-2 bg-red-700">
            <AiOutlineGooglePlus size={30} />
          </div>
          <div className="p-2 bg-sky-900">
            <FaFacebookF size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
