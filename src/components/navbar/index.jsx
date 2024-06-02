import React from "react";
import netflixLogo from "../../assets/logo/netflix.png";
export default function Navbar() {
  return (
    <div className="px-14 pt-5 bg-black flex items-center justify-between ">
      <div className="flex items-center gap-x-10">
        <a href="#">
          <img src={netflixLogo} alt="Netflix" className="w-24 h-7" />
        </a>
        <ul className="flex gap-x-5 text-white ">
          <li className=" font-normal block ">
            <a href="#">Ana sayfa</a>
          </li>
          <li className=" text-[#e5e5e5]">
            <a href="#">Diziler</a>
          </li>
          <li className="text-[#e5e5e5]">
            <a href="#">Filmler</a>
          </li>
          <li className="text-[#e5e5e5]">
            <a href="#">Yeni ve Popüler</a>
          </li>
          <li className="text-[#e5e5e5]">
            <a href="#">Listem</a>
          </li>
          <li className="text-[#e5e5e5]">
            <a href="#">Dillere Göre Göz At</a>
          </li>
        </ul>
      </div>
      <div className="flex text-white items-center gap-x-5">
        <div>search </div>
        <div> Çocuk</div>
        <div>bildirim</div>
        <div>profil</div>
      </div>
    </div>
  );
}
