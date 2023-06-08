import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import TeamMember from "./TeamMember";
import { members } from "./TeamData";

function Team() {
  return (
    <section>
      <div className="flex flex-col items-center py-10">
        <h1 className="font-merriweather font-bold  uppercase text-3xl py-7">
          MEET OUR TEAM
        </h1>
        <p className="text-black/40 capitalize text-[16px]  font-roboto pb-4">
          We are glad to introduce our professional staff
        </p>
        <hr className="w-[5%] text-center border-black" />
      </div>
      <div className="w-[90%] mx-auto pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              img={member.img}
              level={member.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
