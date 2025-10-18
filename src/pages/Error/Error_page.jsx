import React from "react";
import { Link } from "react-router-dom";
import errorPage from "../../assets/error-404.png";

const Error_page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-8">
      <img
        src={errorPage}
        alt="404 Error"
        className="w-56 sm:w-72 md:w-80 lg:w-96 mb-6 drop-shadow-md"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
        Page Not Found
      </h1>

      <p className="text-center text-gray-500 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 text-sm sm:text-base md:text-lg">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base md:text-lg"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default Error_page;
