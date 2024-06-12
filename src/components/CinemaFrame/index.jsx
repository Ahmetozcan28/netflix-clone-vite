import React from "react";
import banner from "../../assets/banner/ragnarok.webp";
import bannerTitle from "../../assets/banner/ragnaroktext.webp";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
export default function CinemaFrame() {
  return (
    <div className=" relative">
      <img className="w-full " src={banner} alt="banner-ragnarok" />
      <div className=" w-full absolute pl-6p bottom-0 top-1/2 -translate-y-1/2">
        <img
          className=" w-4/5 max-w-[420px] mb-[30px]"
          src={bannerTitle}
          alt=""
        />
        <p className=" max-w-[720px] text-lg mb-[20px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora,
          possimus doloribus esse unde rem earum, molestiae reprehenderit
          deleniti nulla voluptatibus obcaecati provident! Consectetur
          voluptates dolore reiciendis est magni consequatur.
        </p>
        <div className=" flex gap-x-10 h-[55px] mb-[50px]">
          <button className="flex font-semibold items-center justify-center gap-x-3 text-xl hover:opacity-70 rounded-md bg-white text-black w-[170px] h-full">
            <FaPlay className="h-8 w-8" /> Oynat
          </button>
          <button className="flex font-semibold bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] items-center justify-center gap-x-3 text-xl rounded-md  w-[270px] h-full">
            <FiInfo className="h-8 w-8" /> Daha fazla bilgi
          </button>
        </div>
      </div>
    </div>
  );
}
