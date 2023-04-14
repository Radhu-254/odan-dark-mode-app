import React from "react";

const About = () => {
  const details = [
    {
      id: 1,
      title: "5+",
      subtitle: "years of experience",
    },
    {
      id: 2,
      title: "10+",
      subtitle: "servicing countries",
    },
    {
      id: 3,
      title: "100+",
      subtitle: "satisfied clients",
    },
    {
      id: 4,
      title: "120+",
      subtitle: "Projects delivered",
    },
  ];

  return (
    <div
      name="about"
      className="w-full h-fit md:h-screen bg-gray-900 text-white py-12 lg:py-96"
    >
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3  ">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            About<span className="text-amber-400"> us</span> 
          </h2>
          <p className="text-xl font-light text-gray-500 py-8">
          We use a unique and best-in-class recruiting strategy supported by a dedicated client-centric development team to bridge the gap between demand and supply for professional development teams.

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 px-2 w-full">
          {details.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300"
            >
              <div className="flex flex-col items-center justify-center w-64 h-64 py-8 rounded-full shadow-lg shadow-amber-400">
                <p className="text-5xl font-bold text-amber-400">{title}</p>
                <p className="text-gray-400 mt-2 uppercase">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
