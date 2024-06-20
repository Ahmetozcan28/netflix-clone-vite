import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" px-4p max-w-[1000px] mx-auto mb-6 -mt-24 ">
      <div className="flex mb-4 text-2xl gap-x-8 cursor-pointer">
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaYoutube />
        </div>
      </div>
      <ul className=" grid grid-cols-4 gap-x-[100px] text-footer text-sm mb-2 ">
        <li className="flex flex-col gap-y-2">
          <a>Sesli Betimleme</a>
          <a>Yatırımcı İlişkileri</a>
          <a>Yasal Hükümler</a>
        </li>
        <li className="flex flex-col gap-y-2">
          <a>Yardım Merkezi</a>
          <a>İş İmkanları</a>
          <a>Çerez Tercihleri</a>
        </li>
        <li className="flex flex-col gap-y-2">
          <a>Hediye Kartları </a>
          <a>Kullanım Koşulları</a>
          <a>Kurumsal Bilgiler</a>
        </li>
        <li className="flex flex-col gap-y-2">
          <a>Medya Merkezi </a>
          <a>Gizlilik</a>
          <a>Bize Ulaşın</a>
        </li>
      </ul>
      <button className="text-sm text-footer border border-footer p-1.5 block mt-2 hover:text-white">Hizmet Kodu</button>
      <span className=" text-footer text-xs mt-3 block">© 1997-2024 AhmetFlix, Inc.</span>
     
    </footer>
  );
}
