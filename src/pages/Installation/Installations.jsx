import React, { useState, useEffect } from "react";
import Installation from "../Installations/Installation";
import { getInstalledApp } from "../../utility/AddToInstall";

const Installations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const apps = getInstalledApp();
    setInstalledApps(apps);
  }, []);

  const parseDownloads = (downloadStr) => {
    if (!downloadStr) return 0;
    const str = downloadStr.toString().toUpperCase();
    if (str.includes("B")) return parseFloat(str) * 1000000000;
    if (str.includes("M")) return parseFloat(str) * 1000000;
    if (str.includes("K")) return parseFloat(str) * 1000;
    return parseFloat(str) || 0;
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...installedApps];

    if (order === "high-low") {
      sorted.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else if (order === "low-high") {
      sorted.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else {
      sorted = getInstalledApp();
    }

    setInstalledApps(sorted);
  };

  const handleAppsUpdate = (updatedApps) => {
    setInstalledApps(updatedApps);
    setSortOrder("");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
        Your Installed Apps
      </h1>
      <p className="text-center text-[#627382] mt-2 mb-6 text-sm sm:text-base">
        Explore all the apps you've installed from our store.
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700">
          {installedApps.length} Apps Found
        </h2>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label
            htmlFor="sort"
            className="text-sm text-gray-600 whitespace-nowrap"
          >
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 text-gray-700 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto"
          >
            <option value="">Default</option>
            <option value="high-low">Download (High → Low)</option>
            <option value="low-high">Download (Low → High)</option>
          </select>
        </div>
      </div>

      <Installation
        installedApps={installedApps}
        setInstalledApps={handleAppsUpdate}
      />
    </div>
  );
};

export default Installations;
