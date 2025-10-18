import React, { Suspense } from "react";
import HomeApp from "./HomeApp";
import { Link } from "react-router";

const HomeApps = ({ homeApps }) => {
  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-5xl font-bold text-center">Trending Apps</h1>
      <p className="text-center text-[#627382] mt-3">
        Explore All Trending Apps on the Market developed by us
      </p>

      <Suspense
        fallback={
          <div className="flex justify-center mt-10">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {homeApps.map((apps) => (
            <div className="flex justify-center w-full sm:w-auto" key={apps.id}>
              <HomeApp apps={apps} />
            </div>
          ))}
        </div>
      </Suspense>

      <div className="flex justify-center mt-10">
        <Link
          to={"/apps"}
          className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-16"
        >
          View All Apps
        </Link>
      </div>
    </div>
  );
};

export default HomeApps;
