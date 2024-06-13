import React from "react";
import { logout } from "../../firebase";
import Navbar from "../../components/navbar";
import CinemaFrame from "../../components/CinemaFrame";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="">
        <Navbar />
        <CinemaFrame />
        <div className="px-7 mx-auto -translate-y-60">
          <h1 className="text-3xl font-semibold">Trending</h1>
          <Slider className="" {...settings}>
            <div className="h-[170px] bg-black rounded-md">
             
            </div>
            <div className="h-[170px] bg-black rounded-md ml-3 ">
           
            </div>
            <div className="h-[170px] bg-black rounded-md ml-5 ">
              <h3>3</h3>
            </div>
            <div className="h-[170px] bg-black rounded-md ml-7 ">
              <h3>4</h3>
            </div>
            <div className="h-[170px] bg-black rounded-md ml-9 ">
              <h3>5</h3>
            </div>
            <div className="h-[170px] bg-black rounded-md ml-11 ">
              <h3>6</h3>
            </div>
          </Slider>
        </div>

        <div className="h-[1000px]"></div>

        <button
          onClick={() => {
            logout();
          }}
          className="border-2 border-black p-2 m-5"
        >
          Çıkış yap
        </button>
      </div>
    </>
  );
}
