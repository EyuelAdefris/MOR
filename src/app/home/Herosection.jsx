"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Facebook, Youtube, Send, MessageCircle } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Empowering Economic Growth Through Fair Taxation",
    description:
      "The Ministry of Revenues is dedicated to efficient and equitable tax administration, fostering economic growth and public prosperity.",
    image: "/aynalem3.jpg",
  },
  {
    id: 2,
    title: "Building Trust Through Transparency",
    description:
      "We ensure fair taxation practices that promote accountability and transparency in the nation's financial systems.",
    image: "/man.jpg",
  },
  {
    id: 3,
    title: "Driving Prosperity for All Citizens",
    description:
      "Our mission is to create an inclusive economy by strengthening tax systems and enabling sustainable development.",
    image: "/kllu.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Fixed Social Icons */}
      <div className="fixed top-1/3 left-2 z-100 flex flex-col space-y-4">
        <a
          href="tel:8199"
          className="relative flex items-center justify-center group"
        >
          {/* Phone icon with circle (default state) */}
          <span className="p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 group-hover:opacity-0 group-hover:scale-0">
            <Phone size={20} />
          </span>

          {/* Number (shown on hover only) */}
          <span className="absolute opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-yellow-400 font-bold text-lg">
            8199
          </span>
        </a>

        <a
          href="#"
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="#"
          className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <Youtube size={20} />
        </a>
        <a
          href="#"
          className="p-3 bg-sky-500 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <Send size={20} />
        </a>
        <a
          href="#"
          className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={20} />
        </a>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Image Container */}
          <div className="relative w-full h-full">
            <div className="relative p-4 w-full h-full flex items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === current}
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent flex items-center">
            <div className=" text-white max-w-xl pl-10 md:pl-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg ">{slide.description}</p>
              <button className="px-6 py-3 mt-4 bg-yellow-500 text-white font-semibold rounded-full shadow hover:bg-yellow-400 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-yellow-400 scale-125" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
