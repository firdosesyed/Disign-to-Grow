import React, { useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
  return (
    <>
      <div className="navbar h-[15vh] fixed w-[100%] items-center text-center  p-2 justify-around flex text-white z-[99] ">
        <div className=" h-[100%] w-[11%] flex  items-center text-[#2A2A2A] text-4xl  max-md:w-16 max-md:left-[0%] max-md:absolute max-md:  max-md:p-4 font-bold ">
          <h2>that</h2>
        </div>
        <div className="about  w-[55%] flex justify-center items-center max-md:hidden p-4  bg-[#F4F4F4] rounded-t-[10px] rounded-b-[10px] h-[65%] ">
          {["About", "Services", "Work", "Benefits", "FAQs", "Contact"].map(
            (value, index) => {
              return (
                <div
                  key={index}
                  className=" animation font-normal hover:after:h-[0.1vh]  hover:after:w-0 hover:after:bg-[black] hover:after:absolute hover:after:top-[62%] bg-[#F4F4F4] h-[100%] w-[100%]  justify-center flex items-center text-[#2A2A2A] "
                >
                  {value}
                </div>
              );
            }
          )}
        </div>
        <button className=" max-md:absolute max-md:right-[10%] max-md:w-[30%] bg-[#2A2A2A] rounded-full  max-md:font-light max-md:text-[1rem]  w-[10%] font-bold flex justify-center items-center h-[64%] max-md:hover:border-2 max-md:hover:border-solid max-md:hover:bg-transparent  max-md:hover:border-black max-md:hover:text-black ">
          See Plans
        </button>
      </div>
    </>
  );
}
