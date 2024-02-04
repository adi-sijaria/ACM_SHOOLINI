"use client";
import React, { useEffect, useRef, useState } from "react";
import { operation_team_members } from "@/utils/db";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./caurosal.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";

const OperationTeam = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    if (window.innerWidth >= 1220) {
      setSlidesPerView(3); // Display 4 slides for screens XL and greater
    } else {
      setSlidesPerView(1); // Display 1 slide for screens smaller than XL
    }
  }, []);

  return (
    <div id="operation" className=" pb-5 md:px-10 sm:px-4 px-1">
      <div className=" mx-[5%] text-center mt-2 bg-gradient-to-r from-[#87c8ee] to-[#4086e2] text-white font-bold shadow-md md:text-[32px] sm:text-[16px]">
        Operation Team
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
        initialSlide={1}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {operation_team_members.map((e) => {
          return (
            <SwiperSlide>
              <div className=" bg-gradient-to-r from-[#87c8ee] via-white to-[#4086e2] flex flex-col gap-1 p-4 rounded-xl">
                <img src={`/assets/images/${e.link}`} />
                <div className=" bg-slate-200 w-full px-6 rounded-xl mt-2">
                  <h2 className=" font-semibold text-[18px] text-black md:text-[24px]">
                    {e.name}
                  </h2>
                  <p className=" text-[16px] mt-[-1px] md:text-[22px] ">
                    {e.position}
                  </p>
                  <br />
                  <a href={e.profile_link} target="blank"> 
                    <p className=" text-[16px]  md:text-[22px] underline ">
                      Linkedin
                    </p>
                    <p className=" text-[16px]  md:text-[22px] ">
                      {e.contact}
                    </p>
                    <p className=" text-[16px]  md:text-[22px] ">
                      {e.mail}
                    </p>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
        <div className=" bg-gradient-to-r from-[#87c8ee] via-white to-[#4086e2] flex flex-col gap-1 p-4 rounded-xl">
            <img src="/assets/images/m2.png" />
            <div className=" bg-slate-200 w-full px-10 rounded-xl mt-2">
              <h2 className=" font-semibold text-[18px] text-black md:text-[24px]">
                John Doe
              </h2>
              <p className=" text-[16px] mt-[] md:text-[22px] ">Here</p>
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
              <p className=" text-[16px] mt-[] md:text-[22px] ">Here</p>
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
              <p className=" text-[16px] mt-[] md:text-[22px] ">Here</p>
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
              <p className=" text-[16px] mt-[] md:text-[22px] ">Here</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default OperationTeam;
