import React from "react";

export default function CrewBio({ bio }) {
  return (
    <p className="text-secondary mt-4 text-sm md:text-base md:w-4/5 md:mx-auto leading-6 pb-8 mb-8 md:mb-0 lg:text-left lg:w-4/5 lg:mx-0">
      {bio}
    </p>
  );
}
