import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitch,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import YellowBtn from "./YellowBtn";

import { Link } from "react-scroll";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "services",
    },
    {
      id: 3,
      link: "about",
    },
    {
      id: 4,
      link: "hire us",
    },
    {
      id: 5,
      link: "contact us",
    },
  ];

  return (
    <div className="w-screen h-20 z-20 fixed bg-gray-900 text-white ">
      <div className="px-3 flex items-center justify-between w-full h-full">

          <Link to="home" smooth duration={900}>
          <div className="flex items-center cursor-pointer">
          <h1 className="text-4xl font-bold">Odan</h1>
          <h6 className="text-sm font-bold">infotech</h6>
          </div>
          </Link>


        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="uppercase p-4 cursor-pointer hover:text-amber-400 duration-200"
            >
              <Link to={link} smooth duration={900}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex mr-4 ">
          <YellowBtn title="Featured Work" className="px-9 py-3 uppercase" />
        </div>

        {/* burger icon  */}
        <div className="md:hidden">
          <div onClick={() => setNavigation(true)} className="cursor-pointer">
            <FaBars size={30} />
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2
                onClick={() => setNavigation(false)}
                className="text-3xl font-bold cursor-pointer"
              >
                   <Link
                      onClick={() => setNavigation(false)}
                     offset={-75}to="home" smooth duration={900}>
                      <div className="flex items-center cursor-pointer">
                      <h1 className="text-4xl font-bold">Odan</h1>
                      <h6 className="text-sm font-bold">infotech</h6>
                      </div>
                    </Link>
              </h2>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-12">
            <YellowBtn className="px-9 py-3 uppercase" title="Featured work" />

            <ul className="capitalize">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className=" py-2 text-2xl tracking-wider cursor-pointer"
                >
                  <Link
                    onClick={() => setNavigation(false)}
                    to={link}
                    smooth
                    duration={900}
                    offset={-75}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
