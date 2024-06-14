import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function FilmCard({title,filmPlayList}) {
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
      <Slider className="" {...settings}>
        {film.map((film, index) => (
          <div key={index} className=" ">
            <img
              className="w-[290px] h-[180px] object-cover transition-all bg-black rounded-md "
              src={`${film_Image_Path}${film.poster_path}`}
              alt={film.original_title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
