import React from "react";
import hero from "../assets/heroo.jpg";
import YellowBtn from "./YellowBtn";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left"
    >
      <div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3 pt-20">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-gray-500">
          YOUR DIGITAL PARTNER FOR WEB, MOBILE & CLOUD
          </p>
          <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
            <span className="text-amber-400">Odan</span> Infotech
          </h1>
          <p className="text-base font-light text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <YellowBtn
            title="book free consultation"
            className="uppercase py-3 px-6 sm:w-8/12 my-8 pr-4"
          />
        </div>

        <div className="flex items-center justify-center">
          <img src={hero} alt="hero" className="w-3/4 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
