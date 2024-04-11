import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  PiInstagramLogo,
  PiTiktokLogoFill,
  PiYoutubeLogo,
} from "react-icons/pi";

const Footer = () => {
  const santaArray = [
    {
      name: "Milpitas",
    },
    {
      name: "Cupertino",
    },
    {
      name: "Sunnyvale",
    },
    {
      name: "San Jose",
    },
    {
      name: "Santa Clara",
    },
  ];


   
  return (
    <div className=" bg-gray-300 lg:py-20 md:py-10 py-7 lg:mt-28 md:mt-12 mt-8">
      <div className="container px-4 mx-auto md:px-4">
        <div className="md:flex flex-wrap grid grid-cols-2 lg:gap-x-[90px] lg:gap-y-[90px] md:gap-y-10 gap-y-7 md:gap-x-20 gap-x-10 lg:pb-12 md:pb-4 pb-3 border-b border-primary/10  ">
          {/*  Santa clara county */}
          <div>
            <h4 className="pb-4 text-sm font-semibold lg:text-base text-primary md:pb-8">
              Santa clara county
            </h4>
            <div className="space-y-2 md:pb-8 pb-6">
              {santaArray?.map((item, index) => (
                <p
                  key={index}
                  className="text-xs transition duration-300 cursor-pointer md:text-sm text-primary "
                >
                  {item.name}
                </p>
              ))}
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-red-300 cursor-pointer md:pt-8 lg:text-base md:text-sm   underline underline-offset-4 decoration-red-300"
            >
              See all
            </Link>
          </div>
          {/* San Mateo County */}
          <div>
            <h4 className="pb-4 text-sm font-semibold lg:text-base text-primary md:pb-8">
              San Mateo County
            </h4>
            <div className="space-y-2 md:pb-8 pb-6">
              {santaArray?.map((item, index) => (
                <p
                  key={index}
                  className="text-xs transition duration-300 cursor-pointer md:text-sm text-primary"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-red-300 cursor-pointer md:pt-8 lg:text-base md:text-sm underline underline-offset-4 decoration-red-300"
            >
              See all
            </Link>
          </div>
          {/* San Joaquin County */}
          <div>
            <h4 className="pb-4 text-sm font-semibold lg:text-base text-primary md:pb-8">
              San Joaquin County
            </h4>
            <div className="space-y-2 md:pb-8 pb-6">
              {santaArray?.map((item, index) => (
                <p
                  key={index}
                  className="text-xs transition duration-300 cursor-pointer md:text-sm text-primary"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-red-300 cursor-pointer md:pt-8 lg:text-base md:text-sm  underline underline-offset-4 decoration-red-300"
            >
              See all
            </Link>
          </div>
          {/* Contra Costa County */}
          <div>
            <h4 className="pb-4 text-sm font-semibold lg:text-base text-primary md:pb-8">
              Contra Costa County
            </h4>
            <div className="space-y-2 md:pb-8 pb-6">
              {santaArray?.map((item, index) => (
                <p
                  key={index}
                  className="text-xs transition duration-300 cursor-pointer md:text-sm text-primary"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-red-300 cursor-pointer md:pt-8 lg:text-base md:text-sm underline underline-offset-4 decoration-red-300"
            >
              See all
            </Link>
          </div>
          {/* Alameda County */}
          <div>
            <h4 className="pb-4 text-sm font-semibold lg:text-base text-primary md:pb-8">
              Alameda County
            </h4>
            <div className="space-y-2 md:pb-8 pb-6">
              {santaArray?.map((item, index) => (
                <p
                  key={index}
                  className="text-xs transition duration-300 cursor-pointer md:text-sm text-primary"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-red-300 cursor-pointer md:pt-8 lg:text-base md:text-sm underline underline-offset-4 decoration-red-300"
            >
              See all
            </Link>
          </div>
          {/* Santa Cruz County */}
          <div>
            <h4 className="pb-4 text-sm font-semibold lg:text-base text-primary md:pb-8">
              Santa Cruz County
            </h4>
            <div className="space-y-2 md:pb-8 pb-6">
              {santaArray?.map((item, index) => (
                <p
                  key={index}
                  className="text-xs transition duration-300 cursor-pointer md:text-sm text-primary"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-red-300 cursor-pointer md:pt-8 lg:text-base md:text-sm underline underline-offset-4 decoration-red-600"
            >
              See all
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 md:pb-10 pb-7 lg:pt-12 md:pt-4 w-full">
          <div className="md:flex flex-wrap gap-4 lg:gap-8 grid grid-cols-2 pb-1 md:pb-0">
            <Link
              href="/"
              className="text-sm font-medium transition-all duration-300 cursor-pointer lg:text-base text-primary hover:text-red-300"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-sm font-medium cursor-pointer lg:text-base text-primar hover:text-red-300 duration-300 transition-all"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
            >
              FAQs
            </Link>
            <Link
              href="/"
              className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
            >
              Elite
            </Link>
            <Link
              href="/"
              className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
            >
              Career
            </Link>
            <Link
              href="/"
              className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
            >
              Commission Disclosures
            </Link>
            <Link
              href="/"
              className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
            >
              Do not sell my personal info
            </Link>
          </div>
          <div className="flex flex-wrap md:gap-9 justify-between w-full md:w-auto px-4 md:px-0">
            <FaFacebookF className="w-6 h-6 cursor-pointer" />
            <FaXTwitter className="w-6 h-6 cursor-pointer" />
            <PiInstagramLogo className="w-6 h-6 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
            <PiTiktokLogoFill className="w-6 h-6 cursor-pointer" />
            <PiYoutubeLogo className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="md:flex justify-between pb-4 lg:pb-10 md:pb-6">
            <div className="flex flex-wrap gap-2 gap-x-14 md:gap-x-10 pb-3 md:pb-0">
              <Link
                href=""
                className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
              >
                Privacy policy
              </Link>
              <Link
                href=""
                className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
              >
                CCPA Policy
              </Link>
              <Link
                href=""
                className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all"
              >
                Terms of services
              </Link>

              <p className="text-sm font-medium cursor-pointer lg:text-base text-primary hover:text-red-300 duration-300 transition-all">
                Newsroom
              </p>
            </div>
            <p className="text-sm text-primary/50 lg:text-base">
              CADRE#02219383
            </p>
          </div>
          <p className="text-xs text-primary/60 md:text-sm">
            Doorlight Inc. is committed to ensuring digital accessibility for
            individuals with disabilities. We are continuously working to
            improve the accessibility of our web experience for everyone, and we
            welcome feedback and accommodation requests. If you wish to report
            an issue or seek an accommodation, please let us know at
            compliance@doorlight.com
          </p>
          <p className="text-primary md:text-sm text-[10px] tracking-wide md:pt-4 pt-3">
            © 2024 Doorlight Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
