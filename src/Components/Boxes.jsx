import React from "react";

export default function Boxes() {
  return (
    <>
      <div className="h-[95vh] w-[80%]  max-md:h-[60vh]  absolute bottom-[0] top-[18vw] flex p-10 ">
        <div className="left img  h-[100%] w-[80%] ">
          <img
            className=" h-[90vh] max-md:absolute  max-md:h-[50vh]  max-md:top-[110%] max-md:left-[-5%]  max-md:right-[0] rotate-12 left-5  z-10 w-[95%] "
            src=" https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66562b5d2583e746c2d4f983_Rectangle%201.svg  "
            alt=""
          />
        </div>
        <div className="right-img  h-[100%]  max-md:h-[60vh]   w-[80%]">
          <img
            className="h-[90vh] max-md:absolute  max-md:top-[70%] max-md:left-[35%] max-md:right-0 bottom-[2vw] right-[10vw]   -rotate-12 w-[95%]   "
            src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66562b5d624da51b9bbcaba5_Rectangle%203.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
