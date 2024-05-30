import React from "react";
import { logout } from "../../firebase";
export default function Home() {
  return (
    <>
      <div>Home</div>
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
