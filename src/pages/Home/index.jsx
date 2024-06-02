import React from "react";
import { logout } from "../../firebase";
import Navbar from "../../components/navbar";
export default function Home() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar  />
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
    </>
  );
}
