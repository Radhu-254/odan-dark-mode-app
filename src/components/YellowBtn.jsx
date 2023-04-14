import React from "react";

const YellowBtn = ({ title, onClick, className }) => {
  return (
    <button
      className={
        "border bg-amber-400 font-bold text-white border-bg-emerald-300 hover:bg-transparent hover:text-amber-400 rounded-md duration-300 ease-out" +
        " " +
        className
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default YellowBtn;
