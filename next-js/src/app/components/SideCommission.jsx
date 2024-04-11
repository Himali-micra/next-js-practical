import React from "react";
import Image from "next/image";
import Button from "./comman/Button";

const SideCommission = () => {
  return (
    <div className="bg-gray-300 lg:py-[100px] md:py-12 py-6 mt-[80px]">
      <div className="container mx-auto px-4 md:px-4">
        <div className="md:grid grid-cols-2 gap-4 flex flex-col">
          <div className="flex flex-col justify-center md:order-1 order-2">
            <h2 className="lg:text-[35px] md:text-3xl text-xl lg:leading-[60px] leading-10 font-extrabold text-primary md:pb-12 pb-4">
              0% Listing Side Commission
            </h2>

            <div className="flex lg:gap-14 gap-4">
              <div className="lg:w-30 lg:h-30 lg:max-w-[120px] lg:min-w-[120px] lg:max-h-[120px] lg:min-h-[120px] max-w-[50px] min-w-[50px] w-[50px] h-[50px] max-h-[50px] min-h-[50px] rounded-full bg-white flex justify-center items-center">
                <Image
                  src="/assets/images/owner.png"
                  alt="owner"
                  width={100}
                  height={100}
                  className="lg:w-[60px] lg:h-[60px] w-6 h-6"
                />
              </div>
              <div className="max-w-[422px] md:border-l-2 border-l border-red-600 lg:pl-8 pl-4">
                <p className="text-primary lg:text-xl text-sm  pb-5">
                  Our sellers are able to choose from a wide options of
                  compensation models including 0%. The way this works is we
                  leverage our vast network of buyers and if we represent the
                  buyer we do not charge the listing commission.
                </p>
                <Button className="text-white bg-yellow-300 ">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="md:order-2 order-1">
            <div className="lg:h-[526px]  h-full">
              <Image
                src="/assets/images/for-sale-house.png"
                alt="sale-house"
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-[40px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCommission;
