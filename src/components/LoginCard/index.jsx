import { useState } from "react";
import NetflixLogo from "./../../assets/logo/netflix.png";
import { Link } from "react-router-dom";
export default function LoginCard() {
  const [signState, setSignState] = useState("Oturum Aç");
  return (
    <>
      <div className=" z-10 relative h-screen py-7 px-8p bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/5b967f31-0270-4902-a3d8-2c619409b86d/TR-tr-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-center ">
        <div className="-z-20 absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black to-black opacity-40"></div>
        <img className=" w-36 h-11 mb-5" src={NetflixLogo} alt="Netflix" />
        <div className=" w-full max-w-[450px] bg-black bg-opacity-80 py-12 px-16 mx-auto">
          <h1 className="text-white text-4xl font-bold tracking-normal mb-10 ">
            {signState}
          </h1>
          <form className=" w-[315px] flex flex-col gap-y-4">
            {signState === "Kayıt ol" ? (
              <>
                <label className="flex-1 relative block ">
                  <input
                    required
                    className="w-full h-[56px] px-4 pt-3  bg-input  text-white border rounded-md border-gray-500 peer"
                    type="text"
                  />
                  <span className="text-white text-opacity-70 flex tracking-wide items-center justify-center top-0  absolute transition-all h-full left-0 px-4  peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7 ">
                    Kullanıcı Adı
                  </span>
                </label>
                <label className="flex-1 relative block ">
                  <input
                    required
                    className="w-full h-[56px] px-4 pt-3  bg-input  text-white border rounded-md border-gray-500 peer"
                    type="email"
                  />
                  <span className="text-white text-opacity-70 flex tracking-wide items-center justify-center top-0  absolute transition-all h-full left-0 px-4  peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7 ">
                    E-posta
                  </span>
                </label>
                <label className="flex-1 relative block ">
                  <input
                    required
                    className="w-full h-[56px] px-4 pt-3  bg-input  text-white border rounded-md border-gray-500 peer"
                    type="password"
                  />
                  <span className="text-white text-opacity-70 flex tracking-wide items-center justify-center top-0  absolute transition-all h-full left-0 px-4  peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7 ">
                    Parola
                  </span>
                </label>
              </>
            ) : (
              <>
                <label className="flex-1 relative block ">
                  <input
                    required
                    className="w-full h-[56px] px-4 pt-3  bg-input  text-white border rounded-md border-gray-500 peer"
                    type="email"
                  />
                  <span className="text-white text-opacity-70 flex tracking-wide items-center justify-center top-0  absolute transition-all h-full left-0 px-4  peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7 ">
                    E-posta
                  </span>
                </label>
                <label className="flex-1 relative block ">
                  <input
                    required
                    className="w-full h-[56px] px-4 pt-3  bg-input  text-white border rounded-md border-gray-500 peer"
                    type="password"
                  />
                  <span className="text-white text-opacity-70 flex tracking-wide items-center justify-center top-0  absolute transition-all h-full left-0 px-4  peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7 ">
                    Parola
                  </span>
                </label>
              </>
            )}

            <button className=" w-full text-white font-semibold  h-10 bg-netflix rounded-md">
              {signState}
            </button>
            <a className="text-white text-center my-2 hover:underline transition" href="#">
              Parolayı mı unuttunuz?{" "}
            </a>
            <div className="text-white flex flex-col gap-y-4">
              <div className=" flex gap-x-3 items-center ">
                <input className="w-5 h-5" type="checkbox" />
                <label>Beni Hatırla</label>
              </div>
              {signState === "Oturum Aç" ? (
                <p className=" text-white text-opacity-70">
                  Netflix'e katılmak ister misiniz?{" "}
                  <Link
                    onClick={() => setSignState("Kayıt ol")}
                    className=" text-white mx-1 transition hover:underline"
                    to={"#"}
                  >
                    Şimdi kaydolun.
                  </Link>
                </p>
              ) : (
                <p className=" text-white text-opacity-70">
                  Netflix'e zaten kayıtlı mısınız?{" "}
                  <Link
                    onClick={() => setSignState("Oturum Aç")}
                    className=" text-white mx-1 transition hover:underline"
                    to={"#"}
                  >
                    Şimdi oturum aç.
                  </Link>
                </p>
              )}

              <p className="text-white  text-xs tracking-wide text-opacity-70">
                Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA
                tarafından korunuyor.
                <a href="#" className=" text-blue-500 transition hover:underline">
                  Daha fazla bilgi alın.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
