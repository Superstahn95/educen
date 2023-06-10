import React from "react";

function Message() {
  return (
    <div className="flex flex-col items-start ">
      <h2 className="text-[24px] font-merriweather font-bold capitalize">
        send a message
      </h2>
      <hr className="w-[100px] border border-yellow-500 border-solid rounded-md" />
      <div className="border-t border-black/40 border-solid w-full">
        <form className="w-full my-4 ">
          <div className="flex gap-3 mb-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-md text-black/50  border border-black/40 p-3 w-full"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="rounded-md text-black/50 border border-black/40 p-3 w-full"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="rounded-md text-black/50  border border-black/40 p-3 w-full"
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="rounded-md text-black/50 border border-black/40 p-3 w-full"
            ></textarea>
          </div>
          <button className="button-blue">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Message;
