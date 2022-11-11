import React from "react";

export default function CrewImg({image}) {
  return (
    <section className="border-b-2 border-b-divider md:border-0">
    <div className="w-[177px] h-[222px] mx-auto mt-8 md:w-[456px] md:h-[572px] lg:w-[360px] lg:h-[451px]">
      <img
        className="max-h-full"
        src={image.png}
        alt="Crew Image"
      />
    </div>
    </section>
  );
}
