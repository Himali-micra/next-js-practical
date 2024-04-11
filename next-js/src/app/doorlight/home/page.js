import Banner from "@/app/components/Banner";
import DoorlightSaving from "@/app/components/DoorlightSaving";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HomeSale from "@/app/components/HomeSale";
import MarketWhisper from "@/app/components/MarketWhisper";
import MortgageCalculator from "@/app/components/MortgageCalculator";
import RadicallyBuySell from "@/app/components/RadicallyBuySell";
import ReadyToStarted from "@/app/components/ReadyToStarted";
import SaveMore from "@/app/components/SaveMore";
import SideCommission from "@/app/components/SideCommission";
import YourFirstStopstore from "@/app/components/YourFirstStopStore";
import Button from "@/app/components/comman/Button";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container mx-auto px-4 md:px-4 ">
          <Banner />
          <YourFirstStopstore />
        </div>
        <SideCommission />
        <div className="container mx-auto px-4 md:px-4 ">
          <SaveMore />
        </div>
      </div>
      <DoorlightSaving />
      <div className="container mx-auto px-4 md:px-4 ">
        <ReadyToStarted />
        <RadicallyBuySell />
        <MarketWhisper />
      </div>
      <MortgageCalculator />
      {/* Exceptional homes deserve exceptional services */}
      <div className="container px-4 md:px-4 mx-auto md:block hidden">
        <div className="lg:h-[500px] h-[400px] rounded-[40px] bg-[url('/assets/images/service.webp')]  bg-center bg-no-repeat bg-contain relative">
          <div className="lg:max-w-[405px] max-w-[330px] absolute lg:top-28 top-36 lg:right-7 right-0 mx-auto text-center">
            <h2 className="lg:text-[40px] md:text-xl text-lg lg:leading-[60px] leading-7 font-extrabold text-white text-center lg:pb-12 pb-4">
              <span className="block"> Exceptional</span> homes deserve
              exceptional services
            </h2>
            
            <Button
              className="text-white bg-yellow-300 lg:h-12 lg:px-6 md:px-5 p-3 md:text-sm text-xs font-bold mx-auto"
              type="button"
            >
              Explore Elite
            </Button>
          </div>
        </div>
        <HomeSale />
      </div>
      <Footer />
      {/* end of the code */}
    </>
  );
};

export default page;
