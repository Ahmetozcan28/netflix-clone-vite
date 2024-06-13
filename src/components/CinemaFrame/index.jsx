import React, { useState, useEffect } from "react";
import banner from "../../assets/banner/ragnarok.webp";
import bannerTitle from "../../assets/banner/ragnaroktext.webp";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
export default function CinemaFrame() {
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScaled(true);
    }, 4000); // 4 saniye sonra çalışacak
    const timer2 = setTimeout(() => {
      setIsScaled(false);
    }, 10000); // 5 saniye sonra çalışacak
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }; // Component unmount olduğunda timer'ı temizle
  }, []);
  return (
    <div className="relative">
      <img className="w-full " src={banner} alt="banner-ragnarok" />
      <div className=" w-full absolute pl-6p bottom-0 top-1/2 -translate-y-1/2">
        <img
          className={`w-4/5 max-w-[420px] transition-all duration-1000 ${
            isScaled
              ? "scale-100 translate-y-20"
              : " scale-150 translate-x-28 mb-16 "
          }`}
          src={bannerTitle}
          alt=""
        />
        <p
          className={`max-w-[720px] text-lg mb-[20px] transition-all duration-700 ${
            isScaled ? " opacity-0 " : " opacity-100"
          }`}
        >
          İskandinav mitolojisine modern bir yorum getiren bu dizide tanrılar ve
          devler arasındaki bitmeyen savaş, çevre felaketleri ve lise dramasıyla
          iç içe geçiyor.
        </p>
        <div className="transition-all duration-2000 transition-delay-500 scale-0">
          Bu div 5 saniye gecikmeyle küçülecek.
        </div>
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
