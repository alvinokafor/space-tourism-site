import React from "react";

export default function TechSwticher({ tech, techIndex, setTechIndex }) {
  return (
    <div className="space-x-4 flex justify-center lg:flex-col lg:space-x-0">
      {tech.map((info, index) => (
        <p
          key={info.name}
          onClick={() => setTechIndex(index)}
          className={
            techIndex === index
              ? "font-title flex justify-center items-center cursor-pointer mt-8 border-2 bg-white rounded-full w-10 h-10 md:w-14 md:h-14 lg:text-lg lg:w-16 lg:h-16 transition-all duration-150 ease-in"
              : "font-title flex justify-center items-center cursor-pointer mt-8 border-2 border-slate-500 text-slate-500 rounded-full w-10 h-10 md:w-14 md:h-14 lg:text-lg lg:w-16 lg:h-16 hover:border-white hover:text-white transition-all duration-150 ease-in"
          }
        >
          {index + 1}
        </p>
      ))}

     
    </div>
  );
}
