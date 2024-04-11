import React from "react";
import Image from "next/image";
import Button from "./comman/Button";

const SaveMore = () => {
  return (
    <div className="container mt-[80px] mx-auto px-4 md:px-0">
      <div className="md:grid grid-cols-2 gap-4 flex flex-col">
        <div className="lg:h-[526px]  h-full">
          <Image
            src="/assets/images/save-more.png"
            alt="save-more"
            width={500}
            height={500}
            className="h-full w-full  object-cover rounded-[40px] overflow-hidden"
          />
        </div>

        <div className="flex flex-col justify-center md:order-1 order-2 lg:pl-[17px] md:pt-0 ">
          <h2 className="lg:text-[35px] md:text-3xl text-xl lg:leading-[60px] leading-10 font-extrabold text-primary md:pb-12 pb-4">
            Save $10,000s more
          </h2>

          <div className="flex gap-4">
            <div className="lg:w-30 lg:h-30 lg:max-w-[120px] lg:min-w-[120px] lg:max-h-[120px] lg:min-h-[120px] max-w-[50px] min-w-[50px] w-[50px] h-[50px] max-h-[50px] min-h-[50px] rounded-full bg-gray-300 flex justify-center items-center">
              
              <Image
                src="/assets/images/rightside-3.png"
                alt="owner"
                width={100}
                height={100}
                className="lg:w-[80px] lg:h-[80px] w-6 h-6"
              />
            </div>
            <div className="max-w-[422px] md:border-l-2 border-l border-red-600 lg:pl-8 pl-4">
              <p className="text-primary lg:text-xl text-sm  pb-5">
                Doorlight returns part of the buyer’s broker fee to you. The
                exact cash back amount will vary depending on final purchase
                price. When working exclusively with Doorlight to buy your home.
              </p>
              <Button className="text-white bg-yellow-400 ">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveMore;
