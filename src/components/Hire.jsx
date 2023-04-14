import React from "react";

import {
  AiOutlineTeam,AiOutlineSecurityScan
} from "react-icons/ai";

import {
  GrNotes
} from "react-icons/gr";

import YellowBtn from "./YellowBtn";



const Hire = () => {
  const hireLinks = [
    {
      id: 1,
      title: "Skilled Dedicated Team",
      subtitle: `Our highly-skilled team know-how will help reduce risks along the way and will remain intact over the life cycle of Odan's services.you’ll reduce the amount of time needed for staff administration. This ensures no expenditure on internal training and skill development at the client's end.`,
      icon: <AiOutlineTeam size={25} />,
    },
    {
      id: 2,
      title: "Security",
      subtitle: `There are companies that provide you with employees that are busy with some other work. When a remote employee is already working on another project and works in yours too. All confidential and sensitive information is protected. We sign an NDA and establish the necessary procedures and mechanisms for ensuring complete IP rights & data protection.`,
      icon: <AiOutlineSecurityScan size={25} />,
    },
    {
      id: 3,
      title: "A Cross-functional Strategy",
      subtitle: `Our Staff augmentation Service is being used increasingly across industry borders increasingly for roles ranging from R&D to Operations, HR, Finance, and more. A higher level of productivity is guaranteed since the third-party vendor does all the admirative hassles, so you don't have to work on anything else`,
      icon: <GrNotes size={25} />,
    },
  ];

  return (
    <div name="hire us" className="w-full min-h-fit bg-slate-300  ">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12">
          <h2 className="text-5xl font-bold text-center">Why Hire Dedicated Developers From Odan Infotech?</h2>
          <p className="text-xl py-8  text-gray-600 text-center">
          We use a unique and best-in-class recruiting strategy supported by a dedicated client-centric development team to bridge the gap between 
          demand and supply for professional development teams.
          </p>

          <div className='flex items-center justify-center'>
                <YellowBtn
                   title="Hire Us"
                  className="uppercase py-3 px-6 w-1/4 my-12 hover:text-black"
                 />
                </div>
        </div>

        {/* hire cards */}
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {hireLinks.map(({ id, title, subtitle, icon }) => (
            <div
              key={id}
              className="bg-gray-900 text-white rounded-xl shadow-lg shadow-amber-400"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 p-4 bg-amber-400 text-darkColor rounded-full mt-[-4rem]">
                  {icon}
                </div>
                <h3 className="font-bold text-2xl my-6">{title}</h3>
                <p className="text-gray-300 text-base pb-12">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hire;
