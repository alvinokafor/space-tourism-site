import React from "react";

export default function DestinationTabs({
  setDestinationIndex,
  destination,
  destinationIndex,
}) {
  return (
    <div className="lg:justify-start font-subHeading flex text-xs text-white uppercase tracking-wide space-x-6 justify-center mt-6 md:mt-14">
      {destination.map((planet, index) => (
        <p
          className={
            destinationIndex === index
              ? "cursor-pointer border-b-2 pb-2 transition-all duration-150 ease-in"
              : "cursor-pointer text-slate-500 border-b-2 pb-2 border-transparent transition-all duration-150 ease-in"
          }
          key={planet.name}
          onClick={() => setDestinationIndex(index)}
        >
          {planet.name}
        </p>
      ))}
    </div>
  );
}
