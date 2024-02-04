import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="relative h-50">
        <img
          src="/assets/images/footerback.jpg"
          alt="Background Image"
          className="w-full h-[65vh] "
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row items-center justify-around  ">
          <div className="text-white text left-0 font-bold  ">
            <p className="xl:text-7xl md:text-3xl text-[20px] m-2 leading-3">
              Reach us At
            </p>
            <p className="xl:text-2xl md:text-xl text-[12px] m-2">
              096252 33301
            </p>

            <p className="xl:text-2xl md:text-xl text-[12px] m-2">
              Solan-Oachghat-Kumarhatti Highway, ​Bajhol,
              <br /> Himachal Pradesh 173229
            </p>

            <p className="xl:text-2xl md:text-xl text-[12px] m-2">
              deanacademics@shooliniuniversity.com
            </p>
          </div>
          <div className=" hidden md:block relative">
            <img
              src="/assets/images/fi2.png"
              alt="Background Image"
              className="w-[30vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
