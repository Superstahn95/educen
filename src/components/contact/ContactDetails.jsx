import React from "react";

function ContactDetails({ detail }) {
  const { icon, property, title } = detail;
  return (
    <div className=" border-b  border-black/40 border-solid w-full py-5">
      <div className="flex  gap-2">
        <span>{icon}</span>
        <div className="flex flex-col  ">
          <span className="capitalize">{title}</span>
          <span className="text-black/50">{property}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
