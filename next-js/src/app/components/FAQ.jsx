"use client";
import React from "react";
import Button from "./comman/Button";
import Accordian from "./comman/Accordian";

const FAQ = () => {
  const FAQArray = [
    {
      title: "What makes Doorlight diffrent from traditional real estate?",
      content:
        "Doorlight is different from traditional real estate because we offer a more modern, clear, and cost-effective way to buy, sell, and own a home. We don’t use middlemen and provide personalized compensation packages and services tailored to your needs.",
    },
    {
      title: "How Does Doorlight Offer Personalized Services?",
      content:
        "At Doorlight, we understand that every customer is different, so we provide personalized compensation packages and services tailored to your needs. We give you a seamless buying and selling experience with services that fit your unique needs.",
    },
    {
      title: "What Are Doorlight Advisors?",
      content:
        "Doorlight advisors are licensed professionals who provide guidance and assistance throughout the real estate process, including buying, selling, and owning homes. They offer personalized support tailored to individual needs, leveraging their expertise to ensure a transparent and efficient experience for clients. With Doorlight advisors, clients benefit from modern, cost-effective solutions without the need for traditional middlemen.",
    },
    {
      title: "What Is Market Whisper?",
      content:
        "Market Whisper is a unique service we provide for homeowners who are considering selling their property but aren’t yet ready to dive into the process. It allows you to ‘test the waters’ of the market, getting a sense of potential interest and value, without having to fully commit to the selling process or prepare your home for listing.",
    },
  ];
  return (
    <div className="container mx-auto mt-[100px] md:block ">
      <div className="grid-cols-9 md:grid gap-2.5">
        {/*  Frequently Asked Questions */}
        <div className="col-span-4 mb-5 max-w-[550px]">
          <h2 className="lg:text-5xl  md:text-3xl text-lg lg:leading-[60px] md:leading-10 font-extrabold text-primary lg:pb-12 md:pb-8 pb-4">
            Frequently Asked Questions
          </h2>
          <Button
            className="text-white bg-yellow-300 lg:h-12 lg:px-6 md:px-5 p-3 md:text-sm text-xs font-bold"
            type="button"
          >
            Explore all FAQs
          </Button>
        </div>
        {/* FAQS section */}
        <div className="col-span-5 space-y-4">
          {FAQArray?.map((item, index) => (
            <div key={index}>
              <Accordian title={item?.title} content={item?.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
