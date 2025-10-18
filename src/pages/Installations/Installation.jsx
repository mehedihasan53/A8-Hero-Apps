import React, { useEffect, useState } from "react";
import { getInstalledApp, removeFromInstall } from "../../utility/AddToInstall";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = getInstalledApp();
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id, title) => {
    removeFromInstall(id);
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    toast.info(`${title} has been uninstalled.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  if (installedApps.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600 bg-white">
        <h2 className="text-2xl font-semibold mb-2">No Installed Apps</h2>
        <p>Install some apps to see them listed here.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        My Installed Apps
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="border border-gray-200 rounded-2xl p-4 shadow-md bg-white flex flex-col items-center text-center"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{app.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{app.companyName}</p>

            <button
              onClick={() => handleUninstall(app.id, app.title)}
              className="mt-4 px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
