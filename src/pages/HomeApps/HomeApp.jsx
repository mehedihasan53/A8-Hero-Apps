import React from "react";
import { Download, Star } from "lucide-react";

const HomeApp = ({ apps }) => {
  const { image, title, downloads, ratingAvg } = apps;

  return (
    <div className="max-w-xs w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-200">
      <div className="w-full h-40 flex items-center justify-center bg-gray-100">
        <img src={image} alt={title} className="w-28 h-28 object-contain" />
      </div>

      <div className="p-4">
        <h3 className="text-sm md:text-[15px] font-semibold text-gray-800 truncate text-left">
          {title}
        </h3>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-sm font-medium">
            <Download className="w-4 h-4" />
            <span>{downloads}</span>
          </div>

          <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-sm font-medium">
            <Star className="w-4 h-4 text-orange-400" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
