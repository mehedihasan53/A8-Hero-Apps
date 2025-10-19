import React, { useState, useEffect } from "react";
import Installation from "../Installations/Installation";
import { getInstalledApp } from "../../utility/AddToInstall";

const Installations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [originalApps, setOriginalApps] = useState([]);

  useEffect(() => {
    const apps = getInstalledApp();
    setInstalledApps(apps);
    setOriginalApps(apps);
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);

    let appsToSort = [...originalApps];

    if (order === "high-low") {
      appsToSort.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "low-high") {
      appsToSort.sort((a, b) => a.downloads - b.downloads);
    }

    setInstalledApps(appsToSort);
  };

  const handleAppsUpdate = (updatedApps) => {
    setInstalledApps(updatedApps);
    setOriginalApps(updatedApps);
    setSortOrder("");
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Your Installed Apps
      </h1>
      <p className="text-center text-[#627382] mt-2 mb-6">
        Explore all the apps you've installed from our store.
      </p>

      {/* Top Section: Sort + App Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-700">
          {installedApps.length} Apps Found
        </h2>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-gray-600">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 text-gray-700 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Default</option>
            <option value="high-low">Download (High → Low)</option>
            <option value="low-high">Download (Low → High)</option>
          </select>
        </div>
      </div>

      {/* Installation Component */}
      <Installation
        installedApps={installedApps}
        setInstalledApps={handleAppsUpdate}
      />
    </div>
  );
};

export default Installations;
