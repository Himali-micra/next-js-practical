"use client";
import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`lg:h-12 lg:py-0 py-2 lg:px-6 px-4 flex items-center gap-2 rounded-[12px] capitalize ${
        className
          ? className
          : "bg-yellow-300 font-bold lg:text-base text-sm border-2 border-secondary "
      }`}
     
    >
      {children}
    </button>
  );
};

export default Button;
