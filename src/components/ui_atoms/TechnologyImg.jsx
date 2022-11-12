import React from "react";

export default function TechnologyImg({ image }) {

  return (
    <div className="mt-8 w-full h-[170px] md:h-[310px] lg:bg-cover object-cover lg:w-[515px] lg:h-[527px]">
      <img
        className="w-full h-full object-center object-cover lg:hidden"
        src={image.landscape}
        alt="Technology Image"
      />
        <img
        className="w-full h-full object-center object-cover hidden lg:block"
        src={image.portrait}
        alt="Technology Image"
      />
    </div>
  );
}
