import React from "react";

import { FaFacebook, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";
import YellowBtn from "./YellowBtn";

const Footer = () => {


  return (
    <div className="w-full bg-gray-900 text-gray-400 py-8 px-2 border-t-2">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center w-full">
          {/* social icons  */}

          <div className="w-3/4 md:w-1/2">
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-md shadow-md shadow-amber-400 p-3 cursor-pointer hover:scale-105 duration-200 ease-in">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-amber-400 p-3 cursor-pointer hover:scale-105 duration-200 ease-in">
                <FaLinkedin size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-amber-400 p-3 cursor-pointer hover:scale-105 duration-200 ease-in">
                <FaTwitch size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-amber-400 p-3 cursor-pointer hover:scale-105 duration-200 ease-in">
                <FaTwitter size={25} />
              </div>
            </div>
          </div>

          {/* newsletter */}
          <div className="w-3/4 md:w-1/2">
            <div className="w-full pt-8 md:pt-2">
              <p className="font-bold uppercase mb-8 text-amber-400 text-lg text-center md:text-left">
                Subscribe to our newsletter
              </p>
              <form
                action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4"
                method="POST"
                className="flex flex-col sm:flex-row"
              >
                <input
                  type="text"
                  name="email"
                  className="w-full p-2 mr-4 rounded-md mb-4 text-gray-900"
                  placeholder="Enter your Email......"
                />
                <YellowBtn title="Subscribe" className="p-2 mb-4 uppercase" />
              </form>
            </div>
          </div>
        </div>

        <section className="min-h-fit flex flex-col justify-start items-center py-10 px-5 text-center">
        <p className="max-w-xl font-light text-gray-500 mb-10">
            ©️ 2023 Odan Infotech
        </p>

    </section>

      </div>
    </div>
  );
};

export default Footer;
