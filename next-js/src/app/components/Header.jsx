"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiUser6Line, RiCloseFill } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./comman/Button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky w-full top-0 left-0 z-50 bg-white sm:shadow">
      <div className="container mx-auto md:px-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex lg:gap-10 gap-5 items-center md:py-5 py-4">
            <div className="md:max-w-[132px] max-w-[120px] md:h-10 h-8 no-underline">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={100}
                height={100}
                priority
                className="h-full w-full cursor-pointer"
              />
            </div>

            <div className="lg:flex hidden gap-2 items-center lg:px-4 px-3 bg-gray-300 rounded-xl lg:min-w-[200px] lg:w-[200px] min-w-[140px]">
              <FaMagnifyingGlass className="lg:w-5 lg:h-5 lg:min-w-[20px] h-4 w-4 text-primary" />
              <input
                placeholder="Where to"
                className={`lg:h-12 min-h-[48px] h-10 px-4 w-full outline-none  text-primary font-semibold
        lg:text-sm text-sm bg-gray-300`}
              />
            </div>
          </div>
          {/* right side menu */}
          <div>
            <nav>
              <div
                className={`${
                  openMenu ? " visible " : " invisible lg:block"
                } xl:visible`}
              >
                <div
                  className={`${
                    openMenu ? " opacity-100  " : " opacity-0"
                  } transition-all duration-500 xl:opacity-100`}
                >
                  <ul className="flex lg:flex-row flex-col justify-center absolute top-0 left-0 lg:static h-[100vh] lg:h-auto w-full z-50 bg-white lg:gap-10 gap-7   items-center font-medium text-primary lg:text-base text-sm capitalize">
                    <li>
                      <Link
                        href="/"
                        onClick={() => setOpenMenu(false)}
                        className="py-4 px-1 border-b-2 border-b-transparent"
                      >
                        Buy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        onClick={() => setOpenMenu(false)}
                        className="py-4 px-1 border-b-2 border-b-transparent"
                      >
                        Sell
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        onClick={() => setOpenMenu(false)}
                        className="py-4 px-1 border-b-2 border-b-transparent"
                      >
                        Buy & Sell
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        onClick={() => setOpenMenu(false)}
                        className="py-4 px-1 border-b-2 border-b-transparent"
                      >
                        Schedule a meeting
                      </Link>
                    </li>
                    <li>
                      <div
                        onMouseLeave={() => setIsOpen(false)}
                        className="relative"
                      >
                        <button
                          onMouseOver={() => setIsOpen(true)}
                          className="flex items-center p-2 z-10"
                        >
                          <span className="mr-2">Resource</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </button>
                        <ul
                          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
                            isOpen ? "block" : "hidden"
                          }`}
                        >
                          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                            Dropdown List 1
                          </li>
                          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                            Dropdown List 2
                          </li>
                          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                            Dropdown List 3
                          </li>
                        </ul>
                      </div>
                    </li>
                    <Button className="text-red-600 border-2 border-yellow-300">
                      <RiUser6Line className="w-5 h-5 text-red-600" />
                      Sign in
                    </Button>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="flex lg:hidden justify-between items-center ">
              <div className="flex gap-2 md:gap-4">
                <div className="md:py-3 py-2 md:px-4 px-3 bg-gray-300 rounded-xl flex items-center justify-center">
                  <FaMagnifyingGlass className="lg:w-5 lg:h-5 lg:min-w-[20px] h-4 w-4 text-primary" />
                </div>
                <div
                  className={`mobileView-navbar-btn lg:hidden bg-secondary md:p-3 p-2.5 rounded-xl  ${
                    openMenu ? "active" : ""
                  }`}
                >
                  <BsList
                    className="text-primary w-5 h-5 menu-outline "
                    onClick={() => setOpenMenu(!openMenu)}
                  />
                  <RiCloseFill
                    className="text-primary w-5 h-5 close-outline"
                    onClick={() => setOpenMenu(!openMenu)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
