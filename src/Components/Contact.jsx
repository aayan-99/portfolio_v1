import React, { useState, useEffect } from "react";
import { FcUpload } from "react-icons/fc";

const Contact = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div
      name="contact"
      className="w-full sm:h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4"
    >
      <form
        method="Post"
        action="https://getform.io/f/f56b353a-076e-4d06-969a-35fb30bd4e36"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - aayan.work99@gmail.com
          </p>
        </div>
        <input
          className="bg-[ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
      <div className="mt-12">
          {showButton && (
            <button onClick={scrollToTop} className="back-to-top">
              <FcUpload size={40} />
            </button>
          )}
          <p className="text-1 text-green-100">Go Up</p>
      </div>
    </div>
  );
};

export default Contact;
