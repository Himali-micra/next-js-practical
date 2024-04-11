"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./comman/Button";

const Banner = () => {
  const Router = useRouter();
  return (
    <>
      {/* banner section */}
      <div className=" bg-[url('/assets/images/banner-bg.png')] bg-top bg-no-repeat bg-cover  bg-gray-300 w-full  h-full rounded-[40px] overflow-hidden mt-1">
        <div className="md:grid grid-cols-2 lg:gap-10 md:gap-4 gap-6 justify-between w-full flex flex-col h-full">
          <div className="flex flex-col items-center justify-center w-full  md:order-1 order-2">
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl lg:leading-[60px] md:leading-9 leading-8 font-extrabold text-primary lg:max-w-[450px] md:max-w-[300px] px-4 md:px-0  mx-auto z-40 text-center lg:pb-16 md:pb-8 pb-4">
              Sell your home for as low as 0% listing commission, or get up to
              1% back when you buy.
            </h2>
            <div className="bg-white lg:p-10 md:p-5 p-4 rounded-3xl z-40 md:ml-3 my-4 md:m-0 w-full md:w-auto">
              <div className="flex lg:gap-8 md:gap-7 gap-5 justify-center lg:justify-start items-center lg:pb-[28px] pb-4">
                <p className="hover:text-red-300 text-primary duration-300 text-center transition-all lg:text-base cursor-pointer text-sm font-medium hover:underline decoration-red-300 underline-offset-8 decoration-2 pb-1">
                  I want to Buy
                </p>
                <p className="hover:text-red-300 text-primary duration-300 text-center transition-all lg:text-base cursor-pointer text-sm font-medium hover:underline decoration-red-300 underline-offset-8 decoration-2">
                  I want to Sell
                </p>
                <p className="hover:text-red-300 text-primary duration-300 text-center transition-all lg:text-base cursor-pointer text-sm font-medium hover:underline decoration-red-300 underline-offset-8 decoration-2">
                  I want to Buy & Sell
                </p>
              </div>
              <div className="flex lg:flex-row flex-col gap-2 items-center">
                <div className="lg:min-w-[358px] lg:w-[358px] w-full ">
                  <input
                    placeholder="City, neighborhood or address ..."
                    className={`lg:h-12 min-h-[48px] h-10 px-4 w-full outline-none rounded-[10px]  text-primary font-semibold 
        lg:text-sm text-sm bg-gray-200`}
                  />
                </div>
                <Button className="text-white bg-yellow-300 w-full justify-center">Sign in</Button>
              </div>
            </div>
          </div>
          <div className="z-40 w-full md:h-full h-[370px] flex justify-center rounded-[40px] overflow-hidden  md:order-2 order-1">
            <Image
              src="/assets/images/banner.png"
              alt="homebanner"
              width={509}
              height={509}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
