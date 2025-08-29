"use client";

import React from "react";

const statsData = [
  { value: "80.3M", label: "Total Revenue" },
  { value: "45.7M", label: "Tax Collected" },
  { value: "12.4M", label: "Active Users" },
  { value: "98.5%", label: "System Uptime" },
  { value: "24/7", label: "Customer Support" },
];

const StatsBar = () => {
  return (
    <div className="w-full py-12 flex justify-center p-16">
      <div className="w-full max-w-6xl bg-gradient-to-r from-blue-900 via-blue-350 to-yellow-500 rounded-lg shadow-lg py-4">
        <div className="flex justify-around items-center text-center text-white font-semibold">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-lg md:text-xl">{stat.value}</span>
              <span className="text-xs opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
