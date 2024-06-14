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
        <div className="px-7 mx-auto -translate-y-60">
          <h1 className="text-2xl font-semibold mb-2">Sıradaki Önerimiz</h1>
          <Slider className="" {...settings}>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md"
                src={film}
                alt="film"
              />
            </div>
            <div>
              {" "}
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md "
                src={film2}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md  "
                src={film3}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md "
                src={film4}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover  bg-black rounded-md "
                src={film5}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md  "
                src={film3}
                alt="film"
              />
            </div>
          </Slider>
        </div>
        <div className="px-7 mx-auto -translate-y-[140px] ">
          <h1 className="text-2xl font-semibold mb-2">Komediler</h1>
          <Slider className="" {...settings}>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md"
                src={film}
                alt="film"
              />
            </div>
            <div>
              {" "}
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md "
                src={film2}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md  "
                src={film3}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md "
                src={film4}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover  bg-black rounded-md "
                src={film5}
                alt="film"
              />
            </div>
            <div>
              <img
                className="h-[170px] w-[300px] object-cover bg-black rounded-md  "
                src={film3}
                alt="film"
              />
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
