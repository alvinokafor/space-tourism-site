import React from "react";

export default function DestinationInfo({distance, travel}) {
  return (
    <section className="text-white lg:text-left uppercase md:flex md:justify-center lg:justify-start md:space-x-28">
      <div className="space-y-3 mb-8">
        <p className="text-xs text-secondary tracking-wide">Avg. Distance</p>
        <p className="font-title text-md">{distance}</p>
      </div>

      <div className="mb-14 space-y-3">
        <p className="text-xs text-secondary tracking-wide">Est. Travel Time</p>
        <p className="font-title text-md">{travel}</p>
      </div>
    </section>
  );
}
