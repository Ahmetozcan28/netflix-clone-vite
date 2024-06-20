import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function FilmCard({ title, filmPlayList }) {
  const [film, setFilm] = useState([]);
  let film_Image_Path = "https://image.tmdb.org/t/p/w500";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTk1MzAwMDM0Y2VjMDI0ZGNkM2QzMDg1MDFjNmM2ZSIsInN1YiI6IjY2NTc0ZWEzYTVhMzg0Y2NlZWU0ZTVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L_sWaMzzADotIb_ea2S-qMtSe0PC3leT3zfMiH7H0k0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filmPlayList}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results[0]);
        setFilm(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="px-7 mx-auto -translate-y-60">
      <h1 className="text-2xl font-semibold mb-3">{title}</h1>
      <Slider className="  relative h-[12vw]" {...settings}>
        {film.map((film, index) => (
          <div key={index} className="group  w-[290px] h-[12vw] hover:h-[25vw] ">
            <img
              className=" cursor-pointer w-[290px] h-[12vw] object-cover  duration-300 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 "
              src={`${film_Image_Path}${film.poster_path}`}
              alt={film.original_title}
            />
            <div className=" opacity-0 absolute top-0  duration-300 z-20  delay-300  scale-0 group-hover:scale-110 group-hover:-translate-y-[8vw] group-hover:translate-x-[3vw] group-hover:opacity-100 ">
              <img
                className=" cursor-pointer object-cover transition shadow-xl rounded-t-md z-30 w-[390px] h-[20vw]"
                src={`${film_Image_Path}${film.poster_path}`}
              />
              <div className="z-30 bg-zinc-800 p-4 absolute w-full shadow-md roundend-b-md ">
              {film.original_title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
