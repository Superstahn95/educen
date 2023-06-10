import React from "react";
import ContactDetails from "./ContactDetails";
import { MdCall, MdEmail } from "react-icons/md";

const details = [
  {
    id: 1,
    title: "address",
    icon: <MdCall size={25} color="blue" />,
    property: "lekki phase 1",
  },
  {
    id: 2,
    title: "phone no",
    icon: <MdCall size={25} color="blue" />,
    property: "+23481018991481",
  },
  {
    id: 3,
    title: "email",
    icon: <MdEmail size={25} color="blue" />,
    property: "Superstahn@gmail.com",
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[24px] font-merriweather font-bold capitalize">
        Contact info
      </h2>
      <hr className="w-[50px] border border-black border-solid rounded-md" />
      <p className="font-roboto text-black/50 py-3 border-b border-black/40 border-solid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a optio
        numquam recusandae earum laboriosam quae magni unde assumenda delectus
        enim incidunt non odio, saepe nihil ad molestiae, nulla vero illum
        aliquam obcaecati ratione. Sed nemo eligendi ut repudiandae eos.
      </p>
      {details.map((detail) => (
        <ContactDetails key={detail.id} detail={detail} />
      ))}
    </div>
  );
}

export default ContactInfo;
