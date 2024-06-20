import React from "react";
import { logout } from "../../firebase";
import Navbar from "../../components/navbar";
import CinemaFrame from "../../components/CinemaFrame";
import FilmCard from "../../components/FilmCard";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <CinemaFrame />
        <div className="flex flex-col gap-y-20">
          <div>
            <FilmCard
              title={"Sıradaki Önerimiz"}
              filmPlayList={"now_playing"}
            />
          </div>
          <div>
            <FilmCard title={"Komediler"} filmPlayList={"top_rated"} />
          </div>
          <div>
            <FilmCard title={"Listem"} filmPlayList={"popular"} />
          </div>
          <div>
            <FilmCard
              title={"Bugün Sizin İçin Seçtiklerimiz"}
              filmPlayList={"upcoming"}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
