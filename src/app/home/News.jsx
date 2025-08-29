"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const newsItems = [
    {
      title: "Annual Tax Report Released",
      date: "July 18, 2025",
      description:
        "Access government services online with our digital platform for faster processing.",
      image: "/news1.png",
    },
    {
      title: "New E-Tax System Launched",
      date: "August 5, 2025",
      description:
        "The Ministry of Revenues has launched a new e-tax system to streamline tax filing and payments.",
      image: "/news-etax.png",
    },
    {
      title: "Tax Amnesty Program Announced",
      date: "September 10, 2025",
      description:
        "A new tax amnesty program has been announced to encourage compliance and boost revenue collection.",
      image: "/news3.jpg",
    },
    {
      title: "Customs Regulations Updated",
      date: "October 22, 2025",
      description:
        "Recent updates to customs regulations aim to facilitate trade and enhance border security.",
      image: "/news4.jpg",
    },
    {
      title: "Public Consultation on Tax Policies",
      date: "November 15, 2025",
      description:
        "The Ministry invites public feedback on proposed changes to tax policies to ensure transparency and inclusivity.",
      image: "/news5.jpg",
    },
    {
      title: "Digital Services Expansion",
      date: "December 1, 2025",
      description:
        "Expansion of digital services to provide more online options for taxpayers and improve service delivery.",
      image: "/news6.jpg",
    },
    {
      title: "Training Programs for Tax Officials",
      date: "January 12, 2026",
      description:
        "New training programs have been introduced to enhance the skills and knowledge of tax officials.",
      image: "/news7.jpg",
    },
    {
      title: "Collaboration with International Tax Bodies",
      date: "February 20, 2026",
      description:
        "The Ministry is strengthening collaboration with international tax bodies to improve tax administration and compliance.",
      image: "/news8.jpg",
    },
  ];

  // Auto-scroll every 5s unless paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        scrollRight();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const scrollLeft = () => {
    if (containerRef.current) {
      const newIndex =
        currentIndex === 0 ? newsItems.length - 3 : currentIndex - 1;
      setCurrentIndex(newIndex);
      containerRef.current.scrollTo({
        left: newIndex * 360,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const newIndex =
        currentIndex >= newsItems.length - 3 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      containerRef.current.scrollTo({
        left: newIndex * 360,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" bg-white flex flex-col items-center p-16">
      <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>

      <div
        className="relative w-full max-w-6xl"
        onMouseEnter={() => setIsPaused(true)} // pause on hover
        onMouseLeave={() => setIsPaused(false)} //resume when leave
      >
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-200 duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={containerRef}
          className="flex overflow-hidden space-x-6 scroll-smooth"
        >
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg w-[350px] flex-shrink-0 transform transition duration-500 hover:scale-105"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="rounded-t-xl object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-blue-800 to-blue-300 p-4 text-white h-[180px] flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{news.title}</h3>
                  <p className="text-sm opacity-90">{news.description}</p>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span className="opacity-80">{news.date}</span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-3 py-1 rounded-full text-xs">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-200 duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
