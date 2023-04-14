import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      subtitle: `We create an intuitive and fresh product that engages your users and keep them coming back for more.`,
    },
    {
      id: 2,
      title: "App Development",
      subtitle: `Our team building award-winning & performance-critical mobile apps across all mobile platforms by employing the latest technologies.`,
    },
    {
      id: 3,
      title: "IT Staff Augmentation",
      subtitle: `We help SMEs in achieving long success in the global marketplace by re-engineering solutions of various levels of complexity.`,
    },   
    {
      id: 4,
      title: "Brand Development",
      subtitle: `As a full-suite digital branding agency, specializing combines strategy, design, copy, advertising, and research to creatively drive your brand.`,
    },
    {
      id: 5,
      title: "IT Consultation",
      subtitle: `Use the deep tech background of the best minds at Odan Infotech to design and implement your plan and continuously support technology-powered solutions.`,
    },
    {
      id: 6,
      title: "Enterprise Application",
      subtitle: `We help SMEs in achieving long success in the global marketplace by re-engineering solutions of various levels of complexity.`,
    }, 

  ];

  return (
    <div name="services" className="w-full min-h-fit md:max-h-screen bg-slate-300 lg:pt-5 pt-32 ">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <h2 className="text-5xl font-bold text-center">Services</h2>



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {services.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-start p-4 bg-gray-900 text-white rounded-md"
            >
              <div>
                <FaChevronCircleRight
                  size={20}
                  className="mt-3 mr-4 text-amber-400"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg  text-amber-400 pt-2 pb-4 capitalize">
                  {title}
                </h3>
                <p className="text-lg">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
