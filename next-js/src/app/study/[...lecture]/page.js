"use client";
import React from "react";

const page = ({ params }) => {
  // console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      This is Lecture page
      <h2>{params.lecture[0]}</h2>
      <h2>{params.lecture[1]}</h2>
    </main>
  );
};

export default page;
