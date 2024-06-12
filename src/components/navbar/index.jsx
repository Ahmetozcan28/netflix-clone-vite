import React from "react";
import netflixLogo from "../../assets/logo/netflix.png";
import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import profilePicture from "../../assets/profile/profilePicture.png";
import search from "../../assets/netflix-svg/search.svg";
import notification from "../../assets/netflix-svg/notification.svg";
import { logout } from "../../firebase";

export default function Navbar() {
  return (
    <div className="px-14 h-[68px] flex items-center justify-between ">
      <div className="flex items-center gap-x-10">
        <a href="#">
          <img src={netflixLogo} alt="Netflix" className="w-[92px] h-[25px]" />
        </a>
        <ul className="flex gap-x-5 text-white text-sm font-semibold">
          <li className="  block hover:opacity-80 duration-300">
            <a href="#">Ana Sayfa</a>
          </li>
          <li className=" text-[#e5e5e5] hover:opacity-80 duration-300">
            <a href="#">Diziler</a>
          </li>
          <li className="text-[#e5e5e5] hover:opacity-80 duration-300">
            <a href="#">Filmler</a>
          </li>
          <li className="text-[#e5e5e5] hover:opacity-80 duration-300">
            <a href="#">Yeni ve Popüler</a>
          </li>
          <li className="text-[#e5e5e5] hover:opacity-80 duration-300 ">
            <a href="#">Listem</a>
          </li>
          <li className="text-[#e5e5e5] hover:opacity-80 duration-300">
            <a href="#">Dile Göre Göz At</a>
          </li>
        </ul>
      </div>
      <div className="flex text-white items-center gap-x-5 ">
        <div className="w-6 h-6 scale-105">
          <img src={search} />
        </div>
        <div className="font-semibold text-sm"> Çocuk</div>
        <div className=" w-6 h-6">
          <img src={notification} />
        </div>
        <div className="flex items-center gap-x-2 group relative">
          <img
            className=" rounded"
            width={32}
            height={32}
            src={profilePicture}
          />
          <div className=" group-hover:rotate-180 transition-all">
            <FaCaretDown />
          </div>
          <div className="absolute hidden group-hover:flex group-hover:flex-col w-[218px] bg-black bg-opacity-95 top-0  right-0 translate-y-10  mt-2 ">
            <div className=" absolute -top-4  right-6 rotate-180 text-2xl w-14 ">
              <FaCaretDown />
            </div>
            <div className="p-3 pt-4 flex flex-col gap-y-3">
              <div className="flex gap-x-3 items-center font-semibold text-sm">
                <img
                  className=" rounded"
                  width={32}
                  height={32}
                  src={profilePicture}
                />
                <p>Kont Ahmet</p>
              </div>{" "}
              <div className="flex gap-x-3 items-center font-semibold text-sm">
                <img
                  className=" rounded"
                  width={32}
                  height={32}
                  src={profilePicture}
                />
                <p>Kont Ahmet</p>
              </div>
              <div className="flex gap-x-3 items-center font-semibold text-sm">
                <img
                  className=" rounded"
                  width={32}
                  height={32}
                  src={profilePicture}
                />
                <p>Kont Ahmet</p>
              </div>
              <div className="flex gap-x-3 items-center font-semibold text-sm">
                <img
                  className=" rounded"
                  width={32}
                  height={32}
                  src={profilePicture}
                />
                <p>Kont Ahmet</p>
              </div>
            </div>
            <button
              onClick={() => {
                logout();
              }}
              className=" hover:underline text border-t w-full text-sm h-14"
            >
              Netflix oturumunu kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
