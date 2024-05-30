import React from "react";
import NetflixLogo from "./../../assets/logo/netflix.png";
export default function LoginCard() {
  return (
    <>
      <div className=" z-10 relative h-screen py-5 px-8p bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/5b967f31-0270-4902-a3d8-2c619409b86d/TR-tr-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')] ">
        <div className="-z-20 absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black to-black opacity-40"></div>
        <img className=" w-24 h-7" src={NetflixLogo} alt="Netflix" />
        <div className=" w-full max-w-[450px] bg-black bg-opacity-70">
          <h1 className="text-white">Sign Up</h1>
          <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign Up</button>
            <div>
              <div>
                <input type=" checkbox" />
                <label>Remember me</label>
              </div>
              <p>Need Help ? </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
