import React from "react";

import img from "./assent/pr.png";
export const Header = () => {
  return (
    <>
      <div className="container py-5">
        <div className="flex items-center justify-between mx-7 ">
          <div className="flex gap-3">
            <img src={img} alt="" className="w-8 h-8" />

            <h2 className="text-white font-bold text-[25px]">Portfolio</h2>
          </div>

          <div>
            <button className="btnH ">Work With Me</button>
          </div>
        </div>
      </div>
    </>
  );
};
