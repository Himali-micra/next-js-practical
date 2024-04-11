
import React, { useEffect, useRef, useState } from "react";
import {
   PiCaretDownBold,
  PiCaretUpBold,
} from "react-icons/pi";

const Accordian = ({ title, content }) => {
  const divRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutSide(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutSide);
    return () => {
      window.removeEventListener("click", handleClickOutSide);
    };
  }, [divRef, isOpen]);

  return (
    <div>
      <div
        ref={divRef}
        onClick={toggleAccordion}
        className="flex items-center justify-between px-5 py-4 bg-gray-300 cursor-pointer md:px-6 rounded-2xl"
      >
        <p
          className={`text-sm font-semibold lg:text-base tracking-wide ${
            isOpen ? "text-red-600" : "text-primary"
          }`}
        >
          {title}
        </p>
        <div className="flex items-center justify-center w-5 min-h-[20px] h-5 min-w-[20px] bg-white rounded-full md:h-6 md:w-6 ml-1">
          {isOpen ? (
            <PiCaretDownBold className="md:h-3 h-2 md:w-4 w-2.5 text-primary" />
          ) : (
            <PiCaretUpBold className="md:h-3 h-2 md:w-4 w-2.5 text-primary" />
          )}
        </div>
      </div>
      <div
        className={`max-w-[95%] overflow-hidden transition-max-height ease-in-out duration-500 w-full ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white sm:mt-2.5 mt-[6px]">
          <p className="text-sm text-primary sm:pt-2.5 sm:pb-4 md:pt-4 pt-3 pb-3 md:px-4 px-3 tracking-wide">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
