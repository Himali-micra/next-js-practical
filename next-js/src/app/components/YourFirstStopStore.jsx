import React from "react";
import Image from "next/image";

const YourFirstStopStore = () => {
  return (
    <div className="md:grid lg:grid-cols-9 grid-cols-2 gap-[30px] mt-[80px] relative">
      <div className="lg:col-span-5">
        <div className="lg:h-[640px] lg:min-h-[640px] md:h-[380px] md:min-h-[380px] h-[300px] min-h-[300px] w-full lg:mb-12 mb-6">
          <Image
            src="/assets/images/woman-showing.png"
            alt="stopstore"
            width={500}
            height={500}
            className="h-full w-full object-center rounded-[40px] overflow-hidden"
          />
        </div>
        <div className="flex lg:gap-24 gap-8">
          {/*  Tour */}
          <div className="md:flex flex-col lg:gap-15 gap-10 ">
            <div className="lg:w-30 lg:h-30 lg:max-w-[120px] lg:min-w-[120px] lg:max-h-[120px] lg:min-h-[120px] h-[60px] min-h-[60px] w-[60px] min-w-[60px] rounded-full bg-gray-400 flex justify-center items-center">
              <div className="lg:w-16 w-7 lg:h-16 h-7">
                <Image
                  src="/assets/images/leftside-1.png"
                  alt="tour"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="lg:max-w-[320px] max-w-[240px]">
              <h3 className="lg:text-[29px] md:text-xl text-lg text-primary font-bold leading-10 lg:pb-5 pb-3">
                Tour
              </h3>
              <p className="text-primary lg:text-xl text-sm lg:leading-10 leading-6">
                Schedule fast sometimes same day in person or video tours.
              </p>
            </div>
          </div>
          {/*  Market Activity */}
          <div className="md:flex flex-col lg:gap-15 gap-8">
            <div className="lg:w-30 lg:h-30 lg:max-w-[120px] lg:min-w-[120px] lg:max-h-[120px] lg:min-h-[120px] h-[60px] min-h-[60px] w-[60px] min-w-[60px] rounded-full bg-gray-400 flex justify-center items-center">
              <div className="lg:w-14 w-7 lg:h-14 h-7">
                <Image
                  src="/assets/images/leftside-2.png"
                  alt="market-activity"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="lg:max-w-[320px] max-w-[240px]">
              <h3 className="lg:text-[29px] md:text-xl text-lg text-primary font-bold leading-8 lg:pb-5 pb-3">
                Market Activity
              </h3>
              <p className="text-primary lg:text-xl text-sm lg:leading-10 leading-6">
                Get real time feed back on market activity for your listing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------- Right side -------------------------------  */}
    
      <div className="lg:col-span-4  ">
        <h2 className="lg:text-5xl sm:flex hidden md:text-3xl text-xl lg:leading-[60px] leading-10 font-extrabold text-primary lg:pb-10 md:pb-10 pb-6">
          Your 1 stop shop
        </h2>

        <div className="md:space-y-10 flex md:flex-col flex-row gap-4 md:gap-0 no-scrollbar overflow-x-auto ">
          {/* Transaction Management */}
          <div className="md:flex-row  sm:flex hidden flex-col lg:gap-8 gap-4 max-w-[235px] min-w-[235px] md:max-w-none md:min-w-none">
            <div className="lg:w-30 lg:h-30 lg:max-w-[120px] lg:min-w-[120px] lg:max-h-[120px] lg:min-h-[120px] h-[60px] min-h-[60px] w-[60px] min-w-[60px] rounded-full bg-gray-400 flex justify-center items-center">
              <div className="lg:w-14 w-7 lg:h-14 h-7">
                <Image
                  src="/assets/images/rightside-1.png"
                  alt="management"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="lg:max-w-[320px] max-w-[240px]">
              <h3 className="lg:text-[29px] md:text-xl text-lg text-primary font-bold lg:leading-10 leading-6 lg:pb-5 pb-3">
                Transaction Management
              </h3>
              <p className="text-primary lg:text-xl text-sm lg:leading-10 leading-6">
                From start to close stay on top of tasks and documents to help
                ensure a smooth transaction.
              </p>
            </div>
          </div>

          {/* Offers  */}
          <div className=" sm:flex hidden flex-col md:flex-row lg:gap-8 gap-4 max-w-[235px] min-w-[235px] md:max-w-none md:min-w-none">
            <div className="lg:w-30 lg:h-30 lg:max-w-[120px] lg:min-w-[120px] lg:max-h-[120px] lg:min-h-[120px] h-[60px] min-h-[60px] w-[60px] min-w-[60px] rounded-full bg-gray-400 flex justify-center items-center">
              <div className="lg:w-14 w-7 lg:h-14 h-7">
                <Image
                  src="/assets/images/rightside-2.png"
                  alt="Offers"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="lg:max-w-[320px] max-w-[240px]">
              <h3 className="lg:text-[29px] md:text-xl text-lg text-primary font-bold leading-10 lg:pb-5 pb-3">
                Offers
              </h3>
              <p className="text-primary lg:text-xl text-sm lg:leading-10 leading-6">
                Write or review offer price, terms, and more online guided by
                your Doorlight Advisor.
              </p>
            </div>
          </div>

          {/* Report  */}
          <div className="sm:flex hidden flex-col md:flex-row lg:gap-8 gap-4 max-w-[235px] min-w-[235px] md:max-w-none md:min-w-none">
            <div className="lg:w-30 lg:h-20 lg:max-w-[120px] lg:min-w-[120px] lg:max-h-[120px] lg:min-h-[120px] h-[60px] min-h-[60px] w-[60px] min-w-[60px] rounded-full bg-gray-400 flex justify-center items-center">
              <div className="lg:w-14 w-6 lg:h-14 h-7">
                <Image
                  src="/assets/images/rightside-3.png"
                  alt="Report"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="lg:max-w-[320px] max-w-[240px]">
              <h3 className="lg:text-[29px] md:text-xl text-lg text-primary font-bold leading-10 lg:pb-5 pb-3">
                Report
              </h3>
              <p className="text-primary lg:text-xl text-sm lg:leading-10 leading-6">
                Gain insights on pricing strategy, inspection reports, and
                disclosures.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="absolute  xl:block top:[100px] left-0 xl:w-[1080px] xl:h-[1000px] lg:max-w-[980px] md:hidden ">
          <div className=" border-dashed border-y-2 border-red-300"></div>
          <Image
            alt="firstshop"
            width={320}
            height={320}
            className="w-full h-full"
            src="/assets/images/firstshop-bg.svg"
          />
        </div> */}
      <div className="absolute hidden lg:block border-r-2 border-b-2 border-red-300 2xl:w-[983px] xl:w-[835px] lg:w-[697px] h-[722px]  border-dashed rounded-br-3xl top-[10%]   "></div>
    </div>
    //{" "}
    // </div>
  );
};

export default YourFirstStopStore;
