import React from "react";
import playStore from "../../assets/Primary Button_2.png";
import appStore from "../../assets/Apple Primary Button.png";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto mt-20 px-4">
        {/* Banner Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            We Build <br /> <span className="text-purple-400">Productive</span>{" "}
            Apps
          </h1>
          <p className="text-[#627382] mt-3 max-w-2xl mx-auto text-sm md:text-base">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>

        {/* App Store Buttons */}
        <div className="flex items-center justify-center gap-5 mt-10 flex-wrap">
          <Link to="https://play.google.com/store/games?hl=en" target="_blank">
            <img
              src={playStore}
              alt="Google Play"
              className="w-36 md:w-40 hover:scale-105 transition-transform duration-200"
            />
          </Link>
          <Link to="https://www.apple.com/app-store/" target="_blank">
            <img
              src={appStore}
              alt="App Store"
              className="w-36 md:w-40 hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center mt-10">
          <img
            src={hero}
            alt="Hero Banner"
            className="w-full max-w-3xl mx-auto object-contain"
          />
        </div>
      </div>

      <div className=" bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-14 px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted By Millions, Built For You
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-sm md:text-base text-white/80 mb-1">
              Total Downloads
            </p>
            <h3 className="text-4xl md:text-5xl font-bold">29.6M</h3>
            <p className="text-sm md:text-base text-white/70 mt-1">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base text-white/80 mb-1">
              Total Reviews
            </p>
            <h3 className="text-4xl md:text-5xl font-bold">906K</h3>
            <p className="text-sm md:text-base text-white/70 mt-1">
              46% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base text-white/80 mb-1">
              Active Apps
            </p>
            <h3 className="text-4xl md:text-5xl font-bold">132+</h3>
            <p className="text-sm md:text-base text-white/70 mt-1">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
