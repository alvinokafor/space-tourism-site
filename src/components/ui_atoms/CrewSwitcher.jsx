import React from "react";

export default function CrewSwitcher({ setCrewIndex, crewIndex, crewMates }) {
  return (
    <div className="flex space-x-4 justify-center mt-8 md:order-last md:mt-4 lg:justify-start lg:mt-[40px]">

      {crewMates.map((crewMate, index) => (
        <span
          key={crewMate.name}
          onClick={() => setCrewIndex(index)}
          className={
            crewIndex === index
              ? "w-[12px] h-[12px] bg-white rounded-full cursor-pointer"
              : "w-[12px] h-[12px] bg-divider rounded-full cursor-pointer"
          }
        ></span>
      ))}
      
    </div>
  );
}
