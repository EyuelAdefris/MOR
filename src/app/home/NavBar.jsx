"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search, ArrowRight, Bell } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [openMenu, setOpenMenu] = useState(null);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState(null);
  const [hasNotifications, setHasNotifications] = useState(false); // State for notifications
  const [bellClicked, setBellClicked] = useState(false); // State for bell animation

  const navItems = [
    { name: "Home", link: "#" },
    {
      name: "News",
      dropdown: ["News", "Events"],
    },
    {
      name: "Services",
      dropdown: ["Tax Services", "Customs Services", "Online Services"],
    },
    {
      name: "About Us",
      dropdown: ["Mission", "Vision", "Leadership"],
    },
    {
      name: "Laws",
      dropdown: ["Tax Laws", "Customs Laws", "Regulations"],
    },
    { name: "FAQs", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "/usa flag.png", label: "EN" },
    { code: "et", name: "አማርኛ", flag: "/ethio flag.jpg", label: "አማ" },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (languageCode) => {
    setIsEnglish(languageCode === "en");
    setIsLanguageOpen(false);
  };

  const handleDropdownItemClick = (mainItem, subItem) => {
    setActive(`${mainItem}-${subItem}`);
    setOpenMenu(null);
    console.log(`Selected: ${mainItem} -> ${subItem}`);
  };

  // Handle bell icon click
  const handleBellClick = () => {
    setBellClicked(true);
    setHasNotifications(false); // Clear notifications on click

    // Reset animation after 500ms
    setTimeout(() => {
      setBellClicked(false);
    }, 500);
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-2 flex items-center justify-between relative">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold text-blue-600 text-sm sm:text-base">
          Ministry of Revenues
        </span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#0274BB]">
        {navItems.map((item) =>
          item.dropdown ? (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setOpenMenu(item.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-1 px-3 py-1 rounded-xl transition ${
                  active === item.name || active?.startsWith(`${item.name}-`)
                    ? "bg-[#0274BB] text-white"
                    : "hover:bg-[#E9F4F4] hover:text-[#0274BB]"
                }`}
              >
                {item.name}
                <ChevronDown className="w-5 h-5 text-[#F8B115]" />
              </button>

              {/* Dropdown */}
              {openMenu === item.name && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 z-50 border border-gray-200">
                  <ul className="py-1">
                    {item.dropdown.map((subItem) => {
                      const fullItemId = `${item.name}-${subItem}`;
                      return (
                        <li key={subItem}>
                          <button
                            onClick={() =>
                              handleDropdownItemClick(item.name, subItem)
                            }
                            onMouseEnter={() =>
                              setActiveDropdownItem(fullItemId)
                            }
                            onMouseLeave={() => setActiveDropdownItem(null)}
                            className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-all duration-200 ${
                              active === fullItemId
                                ? "bg-[#0274BB] text-white font-medium"
                                : activeDropdownItem === fullItemId
                                ? "bg-yellow-200 text-[#0274BB] font-semibold"
                                : "text-gray-700 hover:bg-blue-50 hover:text-[#0274BB]"
                            }`}
                          >
                            <span>{subItem}</span>
                            {(activeDropdownItem === fullItemId ||
                              active === fullItemId) && (
                              <ArrowRight className="w-4 h-4 text-[#0274BB]" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setActive(item.name)}
              className={`px-3 py-1 rounded-xl transition ${
                active === item.name
                  ? "bg-[#0274BB] text-white"
                  : "hover:bg-[#E9F4F4] hover:text-[#0274BB]"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* Right: Search + Bell + Language */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setHasNotifications(!hasNotifications); // Toggle state
              setBellClicked(true);

              // Reset animation
              setTimeout(() => setBellClicked(false), 500);
            }}
            className={`p-2 rounded-full transition-all duration-300 ${
              bellClicked ? "bg-blue-100 scale-125" : "hover:bg-red-100"
            }`}
            title={hasNotifications ? "Notifications On" : "Notifications Off"}
          >
            <Bell
              className={`w-5 h-5 transition-colors duration-300 ${
                hasNotifications
                  ? "text-blue-500 fill-blue-200" // 🔵 Blue when enabled
                  : "text-red-500 fill-red-200" // 🔴 Red when disabled
              } ${bellClicked ? "animate-ring" : ""}`}
            />
            {hasNotifications && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center gap-1 cursor-pointer p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Image
              src={isEnglish ? "/usa flag.png" : "/ethio flag.jpg"}
              alt={isEnglish ? "English" : "አማርኛ"}
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span className="text-sm text-[#0274BB] font-semibold">
              {isEnglish ? "EN" : "አማ"}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#F8B115] transition-transform ${
                isLanguageOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Language Dropdown */}
          {isLanguageOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 z-50 border border-gray-200">
              <ul className="py-2">
                {languages.map((language) => (
                  <li key={language.code}>
                    <button
                      onClick={() => selectLanguage(language.code)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-blue-50 hover:text-[#0274BB]"
                    >
                      <Image
                        src={language.flag}
                        alt={language.name}
                        width={16}
                        height={16}
                        className="rounded-sm"
                      />
                      <span className="flex-1">{language.name}</span>
                      <span className="text-xs text-gray-500 font-medium">
                        {language.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Add CSS for the bell animation */}
      <style jsx>{`
        @keyframes ring {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(-15deg);
          }
          75% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-ring {
          animation: ring 0.5s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
