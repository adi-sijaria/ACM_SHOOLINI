import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="md:h-[84vh] sm:min-h-[70vh] min-h-[30vh]"
      style={{
        backgroundImage: 'url("/assets/images/bg.png")',
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
};

export default Banner;
