import React from "react";
import Button from "./comman/Button";

const ReadyToStarted = () => {
  return (
    
      <div className=" mt-[80px] w-full lg:h-[732px] md:h-[400px] h-[245px] bg-[url('/assets/images/ready-to-start.png')] bg-center bg-no-repeat bg-cover relative">
        <div className="absolute xl:right-64 lg:top-64 md:top-32 top-16 lg:right-54 md:right-10 right-6 md:max-w-[301px]">
          <h2 className="lg:text-5xl md:text-3xl text-base lg:leading-[60px] md:leading-10 font-extrabold text-red-300 md:max-w-[570px] max-w-[120px] lg:pb-8 md:pb-6 pb-3">
            Ready to Get started?
          </h2>
          <Button
            className="text-white bg-yellow-300"
            type="button"
          >
            Let’s do it
          </Button>
        </div>
      </div>
  
  );
};

export default ReadyToStarted;
