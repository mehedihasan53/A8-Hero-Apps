import React from "react";
import playStore from "../../assets/Primary Button_2.png";
import appStore from "../../assets/Apple Primary Button.png";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="container mx-auto mt-20 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="rounded-xl p-8 lg:p-12 bg-gradient-to-br from-white/5 via-white/3 to-transparent shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Text + CTAs */}
          <div className="lg:w-1/2">
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              We Build
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>

            <p className="text-slate-400 mt-4 max-w-xl">
              At HERO.IO, we craft delightful, high-performance apps that help
              people get things done. Fast, beautiful, and built with modern
              best practices.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/apps"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                aria-label="Get started with HERO.IO"
              >
                Get Started
              </Link>

              <a
                href="https://play.google.com/store/games?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Download on Google Play (opens in a new tab)"
              >
                <img
                  src={playStore}
                  alt="Google Play Store"
                  className="w-32 md:w-36 hover:scale-105 transition-transform duration-200"
                />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Download on the App Store (opens in a new tab)"
              >
                <img
                  src={appStore}
                  alt="Apple App Store"
                  className="w-32 md:w-36 hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>

            <ul className="mt-6 flex gap-6 text-sm text-slate-300">
              <li>
                <strong className="text-white">29.6M</strong>
                <div>Downloads</div>
              </li>
              <li>
                <strong className="text-white">906K</strong>
                <div>Reviews</div>
              </li>
              <li>
                <strong className="text-white">132+</strong>
                <div>Active Apps</div>
              </li>
            </ul>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-3xl">
              <div
                className="absolute -inset-2 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-40 transform -rotate-3"
                aria-hidden="true"
              />
              <img
                src={hero}
                alt="Illustration of HERO.IO features"
                className="relative rounded-xl shadow-xl w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Trust Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-xl p-5 text-center shadow">
          <p className="text-sm text-slate-300">Total Downloads</p>
          <h3 className="text-2xl md:text-3xl font-bold">29.6M</h3>
          <p className="text-sm text-slate-400">21% more than last month</p>
        </div>

        <div className="bg-white/5 rounded-xl p-5 text-center shadow">
          <p className="text-sm text-slate-300">Total Reviews</p>
          <h3 className="text-2xl md:text-3xl font-bold">906K</h3>
          <p className="text-sm text-slate-400">46% more than last month</p>
        </div>

        <div className="bg-white/5 rounded-xl p-5 text-center shadow">
          <p className="text-sm text-slate-300">Active Apps</p>
          <h3 className="text-2xl md:text-3xl font-bold">132+</h3>
          <p className="text-sm text-slate-400">31 more will launch</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
