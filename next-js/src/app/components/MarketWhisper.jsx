import React from "react";
import Image from "next/image";
import Button from "./comman/Button";

const MarketWhisper = () => {
  return (

      <div className=" mt-[80px] bg-black lg:p-[100px] md:py-16 md:px-4 p-5 rounded-[40px] relative">
        <div className="lg:h-[450px] h-[200px] lg:w-[471px] w-[300px] absolute left-0 bottom-2">
          <Image
            src="/assets/images/Frame-design.png"
            alt="Frame-desgn"
            width={500}
            height={500}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="md:grid lg:grid-cols-7 grid-cols-2 lg:gap-x-[80px] gap-6">
          <div className="lg:col-span-3">
            <div className="lg:h-[500px] md:h-[400px] h-[295px] w-full flex">
              <Image
                src="/assets/images/market-whisper.png"
                alt="market-whisper"
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-[40px] overflow-hidden z-40"
              />
            </div>
          </div>
          <div className="lg:col-span-4 max-w-[576px]">
            <h2 className="lg:text-5xl md:text-3xl text-xl lg:leading-[60px] md:leading-10 font-extrabold text-white lg:pb-14 md:pb-8 pb-5 pt-2 md:pt-0">
              <span className="text-white/40 block"> Introducing</span>
              Market Whisper
            </h2>
            <p className="font-medium text-white lg:text-3xl md:text-2xl text-md">
              Test the Market, Risk-Free
            </p>
            <p className="lg:text-xl text-sm lg:leading-10 leading-7 text-white/70 md:py-6 py-3">
              Market Whisper provides a unique service, offering insights on
              potential home value and buyer interest without the need for
              official listing or showings. Get a preview of your home's
              potential without commitment.
            </p>
            <Button className="text-white bg-yellow-300 ">Get Started</Button>
          </div>
        </div>
      </div>
   
  );
};


export default MarketWhisper;
