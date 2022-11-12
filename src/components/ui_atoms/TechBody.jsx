import React from "react";

export default function TechBody({description}) {
  return (
    <p className="mt-4 mb-20 text-secondary leading-7 md:w-3/4 md:mx-auto lg:w-3/4 lg:mx-0">
     {description}
    </p>
  );
}
