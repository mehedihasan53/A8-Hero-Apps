import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import noAppFound from "../../assets/App-Error.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";
import { Download, Star, ThumbsUp } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { addToInstall, getInstalledApp } from "../../utility/AddToInstall";

const DetailsApp = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const appsData = useLoaderData();
  const singleApp = appsData.find((app) => app.id === appId);

  if (!singleApp) {
    return (
      <div className="flex justify-center items-center mt-10">
        <img
          src={noAppFound}
          alt="No App Found"
          className="w-72 h-72 object-contain"
        />
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratings,
    downloads,
    ratingAvg,
  } = singleApp;

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getInstalledApp();
    const alreadyInstalled = installedApps.some((a) => a.id === appId);
    setInstalled(alreadyInstalled);
  }, [appId]);

  const handleInstall = () => {
    const success = addToInstall(singleApp);
    if (success) {
      setInstalled(true);
      toast.success(`${title} installed successfully!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.info(`${title} is already installed!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const ratingsData = ratings.map((item) => ({
    name: item.name,
    value: item.count,
  }));

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 bg-white min-h-screen text-gray-800">
      <div className="flex flex-col md:flex-row items-center gap-10 border-b border-gray-300 pb-10">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-contain rounded-2xl shadow-lg"
        />

        <div className="flex-1 space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          <p className="text-gray-500">
            Developed by{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              {companyName}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-8 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <Download className="text-green-500 w-5 h-5" />
              <div>
                <p className="text-gray-500 text-[16px]">Downloads</p>
                <p className="text-3xl font-bold">{downloads}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 w-5 h-5" />
              <div>
                <p className="text-gray-500 text-[16px]">Average Rating</p>
                <p className="text-3xl font-bold">{ratingAvg}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThumbsUp className="text-purple-500 w-5 h-5" />
              <div>
                <p className="text-gray-500 text-[16px]">Total Reviews</p>
                <p className="text-3xl font-bold">{reviews}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-6 py-2.5 rounded-lg font-semibold transition ${
              installed
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="bg-white mt-10 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-5 text-gray-800">
          Ratings Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={ratingsData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#555" />
            <YAxis stroke="#555" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f9f9f9",
                color: "#333",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <Bar
              dataKey="value"
              fill="#ff8c00"
              barSize={30}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10 leading-relaxed text-gray-700">
        <h3 className="text-xl font-semibold mb-3">Description</h3>
        <p>{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DetailsApp;
