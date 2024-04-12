"use client";
import Script from "next/script";

const LoginStudent = () => {
  return (
    <>
      {/* script tag through scription code add */}
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file load");
        }}
      />
      <h1 className="mt-5 text-center text-orange-600 text-3xl">
        Login Page for Student
      </h1>
    </>
  );
};

export default LoginStudent;
