import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-sky-700 text-white font-roboto">
      <div className="w-[90%] mx-auto flex flex-col items-center py-10">
        <img
          src="https://htmldemo.net/educan/educan/images/logo/footer.png"
          alt="educen"
        />
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 ">
            <MdLocationOn />
            <span>Crown Estate, Lagos</span>
          </div>
          <div className="flex items-center gap-3 ">
            <AiOutlineMail />
            <span>Superstahn@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MdCall />
            <span>+2348101891481</span>
          </div>
        </div>
        {/* <hr className="border border-solid border-white/40  w-full my-10" /> */}

        <div className="py-14 mt-10 grid md:grid-cols-4 w-full border-t border-b border-white/40 border-solid">
          <div className="">
            <span className="uppercase font-bold">Our school</span>
            <ul className="mt-5">
              <li className="pb-2 text-white/60">About us</li>
              <li className="pb-2 text-white/60">Log in</li>
              <li className="pb-2 text-white/60">register</li>
              <li className="pb-2 text-white/60">blog</li>
            </ul>
          </div>
          <div className="">
            <span className="uppercase font-bold">links</span>
            <ul className="mt-5">
              <li className="pb-2 text-white/60">Events</li>
              <li className="pb-2 text-white/60">Gallery</li>
              <li className="pb-2 text-white/60">courses</li>
              <li className="pb-2 text-white/60">forums</li>
            </ul>
          </div>
          <div className="">
            <span className="uppercase font-bold">support</span>
            <ul className="mt-5">
              <li className="pb-2 text-white/60">documentation</li>
              <li className="pb-2 text-white/60">update status</li>
              <li className="pb-2 text-white/60">language packs</li>
              <li className="pb-2 text-white/60">release status</li>
            </ul>
          </div>
          <div className="">
            <span className="uppercase font-bold">about us</span>
            <p className="mt-5 text-white/60">
              Subscribe now and receive weekly newsletter with educational
              materials, new courses, interesting posts, popular books and much
              more! Subscribe now and receive weekly newsletter with
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <span className="capitalize font-roboto self-start">
          Made by Chukwuemeka Stanley
        </span>
      </div>
    </footer>
  );
}

export default Footer;
