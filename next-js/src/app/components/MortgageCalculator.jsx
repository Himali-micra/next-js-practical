import React from "react";
import Image from "next/image";
import Button from "./comman/Button";

const MortgageCalculator = () => {
  return (
    <div className="bg-gray-300 lg:mt-[-100px] ">
      <div className="lg:pb-24 pb-12 lg:mt-40 md:mt-16 mt-12 container mx-auto px-4 md:px-4 ">
        {/*    mobile view */}
        <div className="lg:hidden">
          <h2 className="lg:text-5xl pt-5 md:text-3xl text-xl lg:leading-[60px] leading-10 font-extrabold text-primary md:pb-4 pb-2 md:text-center">
            Mortgage Calculator
          </h2>
          <p className="text-primary lg:text-xl text-sm lg:max-w-[233px] lg:pb-0 pb-6 max-w-[500px] mx-auto md:text-center">
            All calculations are estimates and provided for information purposes
            only. Actual amounts may vary
          </p>
        </div>

        {/* desktop view */}
        <div className="md:grid lg:grid-cols-7 gap-4 lg:pt-20 ">
          <div className="lg:col-span-2  lg:flex hidden md:items-center flex-col justify-center">
            <h2 className="lg:text-[45px]  text-center md:text-3xl text-xl lg:leading-[60px] leading-10 font-extrabold text-primary md:pb-12 pb-4">
              Mortgage Calculator
            </h2>
            <p class="text-primary lg:text-xl lg:leading-8 tracking-wide text-sm md:leading-9 lg:max-w-[233px] lg:pb-0 pb-6">
              All calculations are estimates and provided for information
              purposes only. Actual amounts may vary
            </p>
          </div>

          <div className="lg:col-span-5 lg:p-8 p-4 bg-white rounded-[24px]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-3">
              {/*  Calculator */}
              <div>
                <h3 className="md:pb-6 pb-4 text-primary lg:text-xl md:text-lg text-md font-bold">
                  Calculator
                </h3>
                <div className="lg:space-y-7 space-y-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="Purchase price"
                      className="md:text-xs text-sm text-primary leading-4 tracking-wide "
                    >
                      Purchase price
                    </label>
                    <input
                      placeholder="Enter Purchase price"
                      className="lg:h-12 min-h-[48px] h-10 px-4 w-full flex items-center tracking-wide placeholder:text-primary/70 placeholder:font-medium outline-none rounded-xl text-primary font-semibold border border-primary
        lg:text-sm text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Down payment"
                      className="md:text-xs text-sm text-primary leading-4 tracking-wide"
                    >
                      Down payment
                    </label>
                    <div className="flex justify-between items-center lg:py-[14px] py-3 lg:px-4 px-3 w-full mt-1 rounded-xl  text-primary text-sm leading-5 border border-primary">
                      <input
                        type="text"
                        placeholder="Enter down payment"
                        className="outline-none placeholder:text-primary/70"
                      />
                      <p className="lg:pl-2 border-l border-gray-400 text-primary">
                        20.0%
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="Loan program"
                      className="md:text-xs text-sm text-primary leading-4 tracking-wide"
                    >
                      Loan program
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Loan program"
                      className="lg:h-12 min-h-[48px] h-10 px-4 w-full flex items-center tracking-wide placeholder:text-primary/70 placeholder:font-medium outline-none rounded-xl text-primary font-semibold border border-primary
        lg:text-sm text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="index rate"
                      className="md:text-xs text-sm text-primary leading-4 tracking-wide"
                    >
                      Yesterday’s market index rate
                    </label>
                    <div className="flex justify-between items-center w-full lg:py-[14px] py-3 lg:px-4 px-3 mt-1 rounded-xl text-primary text-sm leading-5 border border-primary">
                      <input
                        type="text"
                        placeholder="Enter index rate"
                        className="outline-none placeholder:text-primary/70"
                      />
                      <p>%</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*    Advanced Options */}
              <div>
                <p className="text-red-600 lg:pb-8 md:pb-6 pb-2 pt-4 md:pt-0 underline underline-offset-4 cursor-pointer decoration-red-600 text-sm font-bold flex justify-end">
                  Reset Calculator
                </p>
                <div className="bg-gray-300 rounded-[24px] px-6 py-7">
                  <h4 className="md:text-xs text-sm text-primary font-bold lg:pb-9 pb-4">
                    Advanced Options
                  </h4>
                  <div>
                    <label
                      htmlFor="Annual property tax rate"
                      className="md:text-xs text-sm text-primary leading-4 tracking-wide"
                    >
                      Annual property tax rate
                    </label>
                    <input
                      placeholder="Enter tax rate"
                      className="lg:h-12 min-h-[48px] h-10 px-4 w-full flex items-center tracking-wide placeholder:text-primary/70 placeholder:font-medium outline-none rounded-xl text-primary font-semibold border border-primary
        lg:text-sm text-sm"
                    />
                    <p className="pt-1.5 lg:pb-9 pb-6 text-[10px]  text-primary/70">
                      Property taxes are calculated as a percetange of the home
                      value. Tax rates vary by area and is subject to change
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="Down payment"
                      className="md:text-xs text-sm text-primary leading-4 tracking-wide"
                    >
                      Down payment
                    </label>
                    <div className="flex justify-between bg-transparent items-center w-full lg:py-[14px] py-3 lg:px-4 px-3 lg:mt-2.5 mt-2 placeholder:text-primary/50 text-primary outline-none rounded-xl text-sm leading-5 border border-primary">
                      <input
                        type="text"
                        placeholder="Enter down payment"
                        className="w-full bg-transparent outline-none placeholder:text-primary/50"
                      />
                      <p className="lg:pl-2 border-l border-gray-400 text-primary">
                        0.22%
                      </p>
                    </div>
                    <p className="pt-1.5 text-[10px] text-primary/70">
                      I average rate for this property is 0.22% insurance rates
                      vary by provider and area.
                    </p>
                  </div>
                </div>
              </div>
              {/*   Monthly payment */}
              <div className="bg-gray-300 rounded-[24px] p-2.5 flex md:gap-6 lg:gap-0 items-center lg:flex-col md:flex-row flex-col md:col-span-2 lg:col-auto">
                <div className="bg-red-300 lg:h-[180px] md:h-[185px] h-[130px] rounded-[24px] max-w-[298px] w-full  flex flex-col justify-center items-center lg:mb-2.5 md:mb-0 mb-2">
                  <p className=" bg-white text-primary font-medium text-sm py-2.5 px-4 rounded-full w-max">
                    Monthly payment
                  </p>
                  <p className="md:text-3xl text-2xl text-white font-extrabold lg:pt-6 pt-4">
                    $ 9,950,500
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white flex items-center gap-3 rounded-[24px] py-5 px-2.5">
                    <div className="max-w-[28px] max-h-[28px] min-w-[28px]">
                      <Image
                        src="/assets/images/green-loader.svg"
                        alt="green-loader"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold lg:text-base md:text-xs text-sm text-primary pb-1.5">
                        $12,786
                      </p>
                      <p className="text-xs text-primary">
                        Principal & interest
                      </p>
                    </div>
                  </div>
                  <div className="bg-white flex items-center gap-3 rounded-[24px] py-5 px-2.5">
                    <div className="max-w-[28px] max-h-[28px] min-w-[28px]">
                      <Image
                        src="/assets/images/white-loader.svg"
                        alt="white-loader"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold lg:text-base md:text-xs text-sm text-primary pb-1.5">
                        $0.00
                      </p>
                      <p className="text-xs text-primary">HOA Dues</p>
                    </div>
                  </div>
                  <div className="bg-white flex items-center gap-3 rounded-[24px] py-5 px-2.5">
                    <div className="max-w-[28px] max-h-[28px] min-w-[28px]">
                      <Image
                        src="/assets/images/orange-loader.svg"
                        alt="orange-loader"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold lg:text-base md:text-xs text-sm text-primary pb-1.5">
                        $419
                      </p>
                      <p className="text-xs text-primary">
                        Home owner’s insurance
                      </p>
                    </div>
                  </div>
                  <div className="bg-white flex items-center gap-3 rounded-[24px] py-5 px-2.5">
                    <div className="max-w-[28px] max-h-[28px] min-w-[28px]">
                      <Image
                        src="/assets/images/yellow-loader.svg"
                        alt="yellow-loader"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold lg:text-base md:text-xs text-sm text-primary pb-2.5">
                        $394
                      </p>
                      <p className="text-xs text-primary">Property taxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
