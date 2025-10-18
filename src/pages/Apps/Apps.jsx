import React, { useState, Suspense } from "react";
import { useLoaderData } from "react-router";
import AllApp from "./AllApp";
import noAppFound from "../../assets/App-Error.png";

const Apps = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-5xl font-bold text-center">Our All Applications</h1>
      <p className="text-center text-[#627382] mt-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search + Total count  */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <span className="text-gray-700 font-medium">
          Total Apps: {filteredApps.length}
        </span>
        <input
          type="text"
          placeholder="Search apps..."
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Suspense
        fallback={<span className="loading loading-dots loading-lg"></span>}
      >
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {filteredApps.map((app) => (
              <AllApp key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-10">
            <img
              src={noAppFound}
              alt="No App Found"
              className="w-72 h-72 object-contain"
            />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Apps;
