import React from "react";

const Event = () => {
  return (
    <div className=" flex md:flex-row flex-col gap-5 md:gap-0 w-full my-5 justify-around">
      <div className=" gap-5 flex flex-col lg:mx-20 ">
        <div className=" whitespace-nowrap rounded-lg mr-16  px-4 py-1 text-center mt-2 bg-gradient-to-r from-[#87c8ee] to-[#4086e2] text-white font-bold shadow-md md:text-[32px] sm:text-[28px] text-[24px]">
          What’s Happening around
        </div>
        <div className=" w-[60vh] h-[70vh] whitespace-nowrap  rounded-lg  px-4 py-1 flex flex-col justify-end text-left mt-2 bg-gradient-to-r from-[#87c8ee] to-[#4086e2] text-white font-bold shadow-md md:text-[32px] sm:text-[28px] text-[24px]">
          <h2>Event Name</h2>
          <p>Details</p>
        </div>
      </div>
      <div>
        <img src="/assets/images/advertise.png" className=" h-[80vh]" />
      </div>
    </div>
  );
};

export default Event;
