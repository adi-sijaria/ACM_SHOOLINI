"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./caurosal.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Management = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    if (window.innerWidth >= 1220) {
      setSlidesPerView(3); // Display 4 slides for screens XL and greater
    } else {
      setSlidesPerView(1); // Display 1 slide for screens smaller than XL
    }
  }, []);

  return (
    <div className=" pb-5 md:px-10 sm:px-4 px-1">
      <div className=" mx-[5%] text-center mt-2 bg-gradient-to-r from-[#87c8ee] to-[#4086e2] text-white font-bold shadow-md md:text-[32px] sm:text-[16px]">
        Management Team
      </div>
      <Swiper
        id="carosal"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={"auto"}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-gradient-to-r from-[#87c8ee] via-white to-[#4086e2] flex flex-col gap-1 p-4 rounded-xl">
            <img src="/assets/images/m1.png" />
            <div className=" bg-slate-200 w-full px-10 rounded-xl mt-2">
              <h2 className=" font-semibold text-[18px] text-black md:text-[24px]">
                John Doe
              </h2>
              <p className=" text-[16px] mt-[-2px] md:text-[22px] ">Here</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-gradient-to-r from-[#87c8ee] via-white to-[#4086e2] flex flex-col gap-1 p-4 rounded-xl">
            <img src="/assets/images/m2.png" />
            <div className=" bg-slate-200 w-full px-10 rounded-xl mt-2">
              <h2 className=" font-semibold text-[18px] text-black md:text-[24px]">
                John Doe
              </h2>
              <p className=" text-[16px] mt-[-2px] md:text-[22px] ">Here</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-gradient-to-r from-[#87c8ee] via-white to-[#4086e2] flex flex-col gap-1 p-4 rounded-xl">
            <img src="/assets/images/m3.png" />
            <div className=" bg-slate-200 w-full px-10 rounded-xl mt-2">
              <h2 className=" font-semibold text-[18px] text-black md:text-[24px]">
                John Doe
              </h2>
              <p className=" text-[16px] mt-[-2px] md:text-[22px] ">Here</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-gradient-to-r from-[#87c8ee] via-white to-[#4086e2] flex flex-col gap-1 p-4 rounded-xl">
            <img src="/assets/images/m4.png" />
            <div className=" bg-slate-200 w-full px-10 rounded-xl mt-2">
              <h2 className=" font-semibold text-[18px] text-black md:text-[24px]">
                John Doe
              </h2>
              <p className=" text-[16px] mt-[-2px] md:text-[22px] ">Here</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-gradient-to-r from-[#87c8ee] via-white to-[#4086e2] flex flex-col gap-1 p-4 rounded-xl">
            <img src="/assets/images/m5.png" />
            <div className=" bg-slate-200 w-full px-10 rounded-xl mt-2">
              <h2 className=" font-semibold text-[18px] text-black md:text-[24px]">
                John Doe
              </h2>
              <p className=" text-[16px] mt-[-2px] md:text-[22px] ">Here</p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Management;