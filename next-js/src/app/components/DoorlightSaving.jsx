import React from "react";
import Image from "next/image";

const DoorlightSaving = () => {
  return (
    <div className="mt-[80px] lg:h-[970px] md:h-[700px] h-[880px] md:bg-[url('/assets/images/doorlight-saving.png')] w-full  bg-no-repeat bg-top bg-cover bg-gray-300">
      <div className="h-[350px] min-h-[350px] max-h-[350px] bg-[url('/assets/images/doorlight-saving.png')] w-full bg-no-repeat bg-cover bg-right md:hidden mb-6"></div>
      <div className="container mx-auto md:pt-[98px] px-4 md:px-4">
        <h2 className="lg:text-5xl md:text-4xl text-xl lg:leading-[60px] leading-10 font-extrabold md:text-white text-primary lg:pb-12 md:pb-6 pb-4 lg:max-w-[570px] max-w-[400px] text-center">
          Doorlight savings?
        </h2>
        <div className="lg:pt-10 pt-6 bg-white rounded-[40px] overflow-hidden lg:max-w-[511px]  max-w-[380px]">
          <div className="lg:px-10 px-4">
            <div className="flex md:gap-8 justify-evenly md:pb-[28px] pb-4">
              <p className="text-primary lg:text-base text-sm font-medium hover:text-red-600  hover:underline decoration-red-600 ">
                I want to Buy
              </p>
              <p className="text-primary lg:text-base text-sm font-medium hover:text-red-600  hover:underline decoration-red-600  ">
                I want to Sell
              </p>
            </div>
            <div className="grid grid-cols-2 lg:gap-6 gap-4">
              <div className="rounded-3xl bg-gray-300 lg:p-6 py-4 w-full">
                <p className="text-primary text-center font-extrabold lg:text-3xl md:text-xl text-lg md:pb-2 pb-1">
                  $1,475,000
                </p>
                <p className="text-center text-primary lg:text-base text-sm">
                  Home price
                </p>
              </div>
              <div className="rounded-3xl bg-red-600 lg:p-6 py-4 w-full">
                <p className="text-white text-center font-extrabold lg:text-3xl md:text-xl text-lg md:pb-2 pb-1">
                  $14,750
                </p>
                <p className="text-center text-white  lg:text-base text-sm">
                  Cash Rebate
                </p>
              </div>
            </div>
            <div className="lg:py-10 py-7 flex items-center">
              <div className="lg:max-w-[262px] lg:max-h-[288px] md:max-h-[260px] md:max-w-[260px] max-h-[170px] max-w-[170px] mx-auto">
                <Image
                  src="/assets/images/doorlight.webp"
                  alt="doorlight"
                  width={200}
                  height={200}
                  className="h-full object-cover w-full"
                />
              </div>
            </div>
          </div>
          <div className="bg-primary lg:py-6 py-3 text-center bg-black">
            <p className="text-white lg:text-base md:text-sm text-xs">
              Assuming cash rebate of 1% terms apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorlightSaving;
