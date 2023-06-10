import React from "react";
import Intro from "../components/intro/Intro";
import ContactInfo from "../components/contact/ContactInfo";
import Message from "../components/contact/Message";
import Map from "../components/map/Map";
function Contact() {
  return (
    <>
      <Intro page={"contact"} />
      <section className="py-20">
        <div className="grid w-[90%] mx-auto md:grid-cols-2 gap-7">
          <ContactInfo />
          <Message />
        </div>
      </section>
      <Map />
    </>
  );
}

export default Contact;
