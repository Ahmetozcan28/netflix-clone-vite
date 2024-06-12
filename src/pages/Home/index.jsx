import React from "react";
import { logout } from "../../firebase";
import Navbar from "../../components/navbar";
import CinemaFrame from "../../components/CinemaFrame";
export default function Home() {
  return (
    <>
      <div className="">
        <div className="fixed top-0 z-10 w-full">
          <Navbar />
        </div>
        <CinemaFrame  />
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
