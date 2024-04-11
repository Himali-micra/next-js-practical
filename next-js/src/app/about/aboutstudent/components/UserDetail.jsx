"use client";
import React from "react";


const UserDetail = ({ Age }) => {
  // console.log(Age);
  return (
    <div className="mb-5">
      <button className="showButton" onClick={() => alert(Age)}>
        Show User Age
      </button>
    </div>
  );
};

export default UserDetail;
