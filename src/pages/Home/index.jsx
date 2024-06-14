import React from "react";
import { logout } from "../../firebase";
import Navbar from "../../components/navbar";
import CinemaFrame from "../../components/CinemaFrame";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import film from "../../assets/film/film1.webp";
import film2 from "../../assets/film/film2.jpg";
import film3 from "../../assets/film/film3.webp";
import film4 from "../../assets/film/film4.jpg";
import film5 from "../../assets/film/film5.jpg";
import FilmCard from "../../components/FilmCard";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="">
        <Navbar />
        <CinemaFrame />
        <div className="flex flex-col gap-y-20">
          <div>
            <FilmCard title={"Sıradaki Önerimiz"} filmPlayList={"now_playing"} />
          </div>
          <div>
            <FilmCard title={"Komediler"} filmPlayList={"top_rated"} />
          </div>
          <div>
            <FilmCard title={"Listem"} filmPlayList={"popular"} />
          </div>
          <div>
            <FilmCard title={"Bugün Sizin İçin Seçtiklerimiz"} filmPlayList={"upcoming"} />
          </div>
        </div>

        <div className="h-[300px]"></div>

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
