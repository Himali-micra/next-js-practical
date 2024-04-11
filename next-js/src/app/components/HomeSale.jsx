import React from "react";
import Image from "next/image";
import FAQ from "./FAQ";

const HomeSale = () => {
  const SaleArray = [
    {
      saleCountry: "Santa Clara County",
    },
    {
      saleCountry: " San Mateo County",
    },
    {
      saleCountry: "San Joaquin County",
    },
    {
      saleCountry: "Contra Costa County",
    },
    {
      saleCountry: "Alameda County",
    },
    {
      saleCountry: "Santa Cruz County",
    },
    {
      saleCountry: "San Francisco County",
    },
  ];
  const HomeForSale = [
    {
      count: "10,238",
      saleName: " Home for Sale",
    },
    {
      count: " 638",
      saleName: " Only on Doorlight",
    },
    {
      count: "21",
      saleName: "New Listings",
    },
    {
      count: "669",
      saleName: "  Under Contract",
    },
  ];
  
  return (
    <>
      
        <h2 className="lg:text-5xl md:text-3xl text-2xl lg:leading-[60px] md:leading-9 leading-8 font-extrabold text-primary lg:max-w-[800px] md:max-w-[300px] px-4 md:px-0 mx-auto z-40 text-center lg:pb-16 md:pb-8 pb-4">
          10,238 Homes for sale
        </h2>
        <div className="flex gap-6 no-scrollbar ">
          {SaleArray?.map((item, index) => (
            <p
              key={index}
              className="hover:text-red-300 text-primary duration-300 cursor-pointer transition-all decoration-red-300  hover:underline underline-offset-4  decoration-2 max-w-[133px] min-w-[133px] lg:max-w-none w-full lg:text-base text-sm font-medium"
            >
              {item.saleCountry}
            </p>
          ))}
        </div>
        
        <div className=" py-7 grid lg:grid-cols-4 grid-cols-2 gap-4 ">
          {HomeForSale?.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-300 to-white rounded-full  px-5 lg:py-6 py-4 flex  md:gap-4 md:flex-row flex-col items-center"
            >
              <p className="text-white bg-primary rounded-full font-extrabold lg:text-2xl md:text-xl  text-base md:py-4 py-2 md:px-5 px-3">
                {item.count}
              </p>
              <p className="text-primary font-extrabold lg:text-xl md:text-md text-sm  max-w-[100px] text-center">
                {item.saleName}
              </p>
            </div>
          ))}
        </div>
        <div class="lg:max-h-[800px] lg:h-[800px] md:max-h-[500px] md:h-[500px] h-[300px] w-full rounded-[24px] overflow-hidden">
          <Image
            src="/assets/images/map-image.png"
            alt="home-sale"
            width={900}
            height={700}
            className="h-full w-full"
          />
        </div>
    
      <FAQ />
    </>
  );
};

export default HomeSale;
