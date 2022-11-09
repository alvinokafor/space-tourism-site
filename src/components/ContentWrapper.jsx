import React from "react";

export default function ContentWrapper({ children }) {
  return (
    <div className="px-6 mx-auto mt-6 font-body md:mt-0 lg:mt-6 lg:px-14">
      {children}
    </div>
  );
}
