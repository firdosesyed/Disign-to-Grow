import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  return (
    <>
      <div className=" upper-part h-[80vh] pl-2 pb-14 w-[100%]  overflow-x-hidden relative top-[20%] ">
        <div className="h-[80%] w-[100%]  max-md:h-[80%] max-md:w-[80%] flex flex-col  ">
          <div className="left h-[100%] w-[100%] max-md:h-[80%] max-md:w-[70%]  max-md:p-2 p-6  relative  ">
            <h1 className=" animated w-[70%] text-[7vw]  max-md:w-[100%] max-md:text-[9vw] text-opacity-5  leading-[16vh] max-md:leading-[7.4vh] font-medium ">
              Design subscription <br />{" "}
              <span className="text-[#A3A3A3]"> to grow your </span>brand <br />{" "}
              <span className="text-[#A3A3A3]"> & </span> Marketing
            </h1>
          </div>
          <div className="right p-2 relative left-[60%] max-md:left-[0]  leading-7 max-md:text-[2.5vw] text-[1.7vw] font-sans  h-[40%] w-[100%] max-md:w-[100%] max-md:h-[70%]   ">
            <h3 className="w-[38%] max-md:w-[70%]   ">
              Access unlimited top-notch design services that will take care of
              your design needs seamlessly and efficiently at one fixed monthly
              fee
            </h3>
          </div>
          <button className="p-4 border-[1px] border-black  rounded-full w-[12%] hidden max-md:block max-md:w-[35%] max-md:mt- max-md:text-sm   max-md:h-[9vh] max-md:p-2 max-md:text-center   ">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
