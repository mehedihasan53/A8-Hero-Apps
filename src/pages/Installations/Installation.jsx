import React from "react";
import { removeFromInstall } from "../../utility/AddToInstall";
import { Download, Star } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = ({ installedApps, setInstalledApps }) => {
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-gray-600 bg-white">
        <h2 className="text-2xl font-semibold mb-2">No Installed Apps</h2>
        <p>Install some apps to see them listed here.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mb-12">
      {installedApps.map((app) => (
        <div
          key={app.id}
          className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-sm transition"
        >
          <div className="flex items-center gap-4">
            <img
              src={app.image}
              alt={app.title}
              className="w-16 h-16 rounded-lg object-cover bg-gray-200"
            />
            <div>
              <h3 className="text-[15px] font-medium text-gray-800">
                {app.title}
              </h3>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs font-medium">
                  <Download className="w-3 h-3" /> {app.downloads}
                </span>
                <span className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs font-medium">
                  <Star className="w-3 h-3 fill-orange-400 text-orange-400" />{" "}
                  {app.ratingAvg}
                </span>
                <span className="text-gray-500 text-xs">{app.size} MB</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleUninstall(app.id, app.title)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-md transition"
          >
            Uninstall
          </button>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Installation;
