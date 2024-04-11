"use client";
import { useState } from "react";
import Image from "next/image";
// import custom from "./custom.module.css";

// useState through color change
const AboutCollege = () => {
  const [setgreen, setColorGreen] = useState(true);

  const togglecolor = () => {
    setColorGreen(!setgreen);
  };
  return (
    <div className="container mt-5">
      <h1 style={{ color: setgreen ? "green" : "blue" }}>
        About Page for College
      </h1>
      {/* <h2 className={custom.red}>Cutome Css through About College</h2> */}
      <button className="showButton text-orange-300" onClick={togglecolor}>
        Click Me
      </button>
      <Image
        src="https://avatars.mds.yandex.net/i?id=d16a208907b27b329e13543004907b6d44dc28a0-5318825-images-thumbs&n=13"
        width={200}
        height={200}
      />
      {/* <img
        src="https://avatars.mds.yandex.net/i?id=d16a208907b27b329e13543004907b6d44dc28a0-5318825-images-thumbs&n=13"
        alt="college"
      /> */}
    </div>
  );
};

export default AboutCollege;
