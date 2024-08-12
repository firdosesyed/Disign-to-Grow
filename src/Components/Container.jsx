import React from "react";

export default function Container() {
  return (
    <>
      <div className="big h-[95vh] max-md:h-[75vh]  max-md:absolute  max-md: max-md:top-[180%] w-[100%]  p-6 absolute bottom-[0] top-[170%] ">
        <div className="img  h-[35vh] w-[100%]  flex items-center justify-center">
          <img
            className="h-[21%] max-md:h-[20%] max-md:w-[9%] rotate-90  w-[5%] "
            src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66562b5d2583e746c2d4f983_Rectangle%201.svg   "
            alt=""
          />

          <img
            className="h-[21%] w-[5%]   max-md:h-[20%] max-md:w-[9%] -rotate-90 "
            src=" https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66562b5d624da51b9bbcaba5_Rectangle%203.svg

 "
            alt=""
          />
          <h2 className=" w-[30%] text-center left-[38%] flex absolute top-[40%] font-medium text-3xl max-md:w-[70%] max-md:left-[20%] ">
            Here’s how you get it:
          </h2>
        </div>
        <div className="boxes max-md:h-[100%]  max-md:w-[100%] max-md:gap-6 max-md:relative max-md:flex-col relative flex items-center justify-around h-[90%] p-6 w-[100%]  overflow-x-hidden max-md:overflow-visible top-[25%]  ">
          <div className="box-1 max-md:absolute  max-md:w-[100%]  bg-[#ECFFA0] flex  rounded-2xl flex-col justify-between p-8 h-[100%] w-[31%]">
            <div className="small  bg-white rounded-lg  max-md:w-[8vw] max-md:h-[8vh] h-[8vh] w-[3.6vw] flex justify-center items-center text-black relative ">
              <img
                className="h-[50%] w-[60%] max-md:h-[90%] max-md:absolute max-md:w-[80%] absolute "
                src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/666fd5983a305793e9285af6_fluent_meet-now-16-regular.svg"
                alt=""
              />
            </div>
            <h2 className="w-[90%] max-md:text-[1.4rem]  absolute left-[11%] top-[11vh]  font-normal text-2xl  max-md:top-[11%] max-md:left-[21%] ">
              {" "}
              Start right away!
            </h2>
            <h3 className="w-[105%] max-md:w-[100%] ">
              Select one of our plans and book a free discovery call to learn
              how we can work together. If all good, we'll kick off in the same
              day.
            </h3>
          </div>
          <div className="box-2  max-md:absolute  max-md:w-[100%] max-md:top-[110%] bg-[#D1DEF8] flex  rounded-2xl flex-col justify-between p-8 h-[100%] w-[31%]">
            <div className="small  max-md:w-[8vw] max-md:h-[8vh] bg-white rounded-lg  h-[8vh] w-[3.6vw] flex justify-center items-center text-black relative ">
              <img
                className="h-[50%] w-[60%] absolute  max-md:h-[90%] max-md:absolute max-md:w-[80%]"
                src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66577d7d66443f42561dbadf_carbon_magic-wand-filled.svg"
                alt=""
              />
            </div>
            <h2 className="w-[90%] max-md:text-[1.4rem] max-md:top-[11%] max-md:left-[21%] absolute left-[43%] top-[11vh] font-normal text-2xl  ">
              {" "}
              Request designs
            </h2>
            <h3 className="w-[95%]">
              Request as many designs as you want and sit back, as we craft your
              designs and deliver first drafts in under 48 hours.
            </h3>
          </div>
          <div className="box-3  max-md:absolute  max-md:w-[100%] max-md:top-[220%] bg-[#8882EE] flex  rounded-2xl flex-col justify-between p-8 h-[100%] w-[31%]">
            <div className="small  max-md:w-[8vw] max-md:h-[8vh] bg-white rounded-lg  h-[8vh] w-[3.6vw] flex justify-center items-center text-black relative ">
              <img
                className="h-[50%] w-[60%] absolute  max-md:h-[90%] max-md:absolute max-md:w-[80%] "
                src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66577d7e40a8e78ea9482522_fa_repeat.svg"
                alt=""
              />
            </div>
            <h2 className="w-[90%]  max-md:text-[1.4rem] max-md:top-[11%] max-md:left-[21%] absolute left-[74.9%] top-[11vh] font-normal text-2xl text-white  ">
              {" "}
              Finilize
            </h2>
            <h3 className="w-[100%] text-white">
              Even though we always do our best to hit the goal with the first
              take, you can ask for as many iterations as needed. No additional
              costs.
            </h3>
          </div>
        </div>
        <div className="About-sec  max-md:top-[250%] p-4 h-[19vh] max-md:w-[80%] w-[100%]  relative top-[30%]    ">
          <h2 className=" h-[100%] max-md:leading-6 w-[87%] text-3xl max-md:text-[18px]  max-md:w-[135%] max-md:ml-[0%]  ">
            At DesignThat, we go beyond the ordinary to ensure satisfaction of
            every step of the processes, as our subscription model is designed
            with you in mind.
          </h2>
        </div>
      </div>
    </>
  );
}
