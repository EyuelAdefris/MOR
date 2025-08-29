"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Link,
  ScrollText,
  FileText,
  Calendar,
  BookOpen,
  HelpCircle,
  ListChecks,
  UserCheck,
} from "lucide-react";

const links = [
  { name: "How to E-filing", icon: FileText },
  { name: "TIN Verification", icon: UserCheck },
  { name: "Tax Forms and Guides", icon: BookOpen },
  { name: "Taxpayer Obligation", icon: ListChecks },
  { name: "Tax Calendar", icon: Calendar },
  { name: "Taxpayer Educational Materials", icon: BookOpen },
  { name: "Complaint & Inquiry System", icon: HelpCircle },
  { name: "Tax Types", icon: FileText },
];

const proclamations = {
  new: [
    {
      title: "Mental Health Awareness Month",
      date: "May 15, 2024",
      description:
        "Recognizing the importance of mental health awareness and supporting community wellness initiatives throughout our city.",
    },
    {
      title: "Small Business Week",
      date: "May 12, 2024",
      description:
        "Celebrating local entrepreneurs and their contributions to our community’s economic growth and vitality.",
    },
    {
      title: "Earth Day Environmental Action",
      date: "April 22, 2024",
      description:
        "Promoting environmental stewardship and sustainable practices for a greener future in our community.",
    },
  ],
  updated: [
    {
      title: "Tax Policy Update",
      date: "March 10, 2024",
      description:
        "New revisions to the national tax policy aimed at improving compliance and reducing processing times.",
    },
    {
      title: "Audit Guidelines Released",
      date: "April 5, 2024",
      description:
        "Updated audit guidelines released to help taxpayers comply efficiently and understand new procedural changes.",
    },
    {
      title: "E-Filing System Maintenance",
      date: "April 20, 2024",
      description:
        "Scheduled maintenance of the e-filing system to improve stability and security. Services may be temporarily unavailable.",
    },
  ],
};

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="w-full flex justify-center p-16">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Important Links */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 text-white font-semibold px-4 py-3 flex items-center gap-2 ">
            <Link size={18} />
            Important Links
          </div>
          <ul>
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-3 cursor-pointer group transition-all duration-300 hover:-translate-x-1 hover:bg-blue-50"
                >
                  {/* Left side with icon + text */}
                  <div className="flex items-center gap-2">
                    <Icon
                      size={18}
                      className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300"
                    />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                      {link.name}
                    </span>
                  </div>
                  {/* Right arrow */}
                  <ChevronRight
                    size={18}
                    className="text-gray-500 transition-colors duration-300 group-hover:text-blue-600"
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Proclamations */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 text-white font-semibold px-4 py-3 flex items-center gap-2">
            <ScrollText size={18} />
            Proclamations
          </div>

          {/* Tabs */}
          <div className="flex justify-center items-center bg-gray-100 p-3">
            <div className="bg-white rounded-full shadow-inner flex w-560 p-1">
              <button
                onClick={() => setActiveTab("new")}
                className={`flex-1 px-3 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === "new"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                New
              </button>
              <button
                onClick={() => setActiveTab("updated")}
                className={`flex-1 px-3 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === "updated"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Updated
              </button>
            </div>
          </div>

          {/* Content */}
          <div>
            {proclamations[activeTab].map((item, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
