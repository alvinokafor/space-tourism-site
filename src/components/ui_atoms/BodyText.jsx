import React from "react";

export default function BodyText({description}) {
  return (
    <p className="text-secondary text-sm md:text-base md:w-4/5 md:mx-auto leading-6 border-b border-divider pb-8 mb-8 lg:text-left lg:w-3/4 lg:mx-0">
     {description}
    </p>
  );
}
