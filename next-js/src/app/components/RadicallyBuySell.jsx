import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const serviceArray = [
  {
    service: "Market whisper",
  },
  {
    service: "Transparent competition",
  },
  {
    service: "Enhanced listing exposure",
  },
  {
    service: "Interior design staging",
  },
  {
    service: "Licensed Professionals",
  },
  {
    service: "Professional videography & Photography ",
  },
  {
    service: "Targeted digital marketing ",
  },
  {
    service: "Monitor real time listing activity (in development) ",
  },
  {
    service: "Review & accept offers in seller portal (In development) ",
  },
  {
    service: "Secure portal to manger your transaction (In developement) ",
  },
  {
    service: "Dedicated App (In development) ",
  },
];

const RadicallyBuySell = () => {
   return (
     <div className="mt-[80px]">
       <h2 className="lg:text-5xl md:text-3xl text-2xl lg:leading-[60px] md:leading-9 leading-8 font-extrabold text-primary lg:max-w-[800px] md:max-w-[300px] px-4 md:px-0 mx-auto z-40 text-center lg:pb-16 md:pb-8 pb-4">
         A radically different way to buy & sell your home
       </h2>
       <div className="flex justify-between max-w-[265px] mx-auto lg:pb-12 pb-8">
         <p className="hover:text-red-600 text-primary duration-300 transition-all lg:text-base text-sm font-medium  hover:underline decoration-red-600 underline-offset-8 decoration-2">
           Sell your home
         </p>
         <p className="hover:text-red-600 text-primary duration-300 transition-all lg:text-base text-sm font-medium  hover:underline decoration-red-600 underline-offset-8 decoration-2">
           Buy your home
         </p>
       </div>

       <div className="grid md:grid-cols-6 grid-cols-4 bg-gray-300  lg:px-12 px-4 rounded-xl">
         <div className="md:col-span-4 col-span-2 py-5">
           <h3 className="lg:text-base md:text-sm text-xs text-primary font-medium">
             Service provided
           </h3>
         </div>
         <div className="bg-red-300 py-4 px-13 relative">
           <div className="absolute lg:-top-6 md:-top-4 -top-2 left-0 w-full h-full -z-10 bg-red-300 md:rounded-t-2xl rounded-t-xl"></div>
           <div className="lg:max-w-[92px] max-w-[60px] lg:h-7 h-5 align-middle mx-auto z-10">
             <Image
               alt="logo"
               width={100}
               height={100}
               className="h-full w-full "
               src="/assets/images/logo-white.svg"
             />
           </div>
         </div>
         <div className="py-5 mx-auto">
           <h3 className="lg:text-base md:text-sm text-xs text-primary font-medium text-center">
             Traditional Agents
           </h3>
         </div>
       </div>

       {serviceArray?.map((item, index) => (
         <div
           key={index}
           className="grid md:grid-cols-6 grid-cols-4 lg:px-12 px-4"
         >
           <div className="md:col-span-4 col-span-2 md:py-5 py-4 border-b border-gray-300">
             <div className="flex items-center gap-2 pr-4">
               <div className="bg-primary md:min-w-2 md:w-2 md:h-2  h-1.5 w-1.5 min-w-[3px] rounded-full"></div>
               <h3 className="lg:text-base text-sm text-primary font-semibold">
                 {item?.service}
               </h3>
             </div>
           </div>
           <div className="bg-red-300  md:py-5 py-4 px-13 w-full flex items-center relative">
             {/* <div className="absolute lg:-bottom-6 md:-bottom-4 -bottom-2 left-0 w-full h-full -z-10 bg-red-300 md:rounded-b-2xl rounded-b-xl"></div> */}
             <FaCheckCircle className="text-white md:w-7 md:h-7 md:max-w-[28px] w-4 h-4 mx-auto" />
           </div>
           <div className="py-5 border-b border-gray-300">
             <h3 className="lg:text-base text-sm text-primary font-medium text-center">
               -
             </h3>
           </div>
         </div>
       ))}
     </div>
     
   );
};

export default RadicallyBuySell;
