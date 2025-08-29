"use client";

import React from "react";
import Image from "next/image";

const ServicesPage = () => {
  const services = [
    {
      title: "E - Tax",
      description:
        "Access government services online with our digital platform for faster processing.",
      image: "/E-tax.png",
      buttonText: "Here",
    },
    {
      title: "E - Services",
      description:
        "Access government services online with our digital platform for faster processing.",
      image: "/E-service.png",
      buttonText: "Here",
    },
    {
      title: "Filling Complaint",
      description:
        "Access government services online with our digital platform for faster processing.",
      image: "/filling.png",
      buttonText: "Here",
    },
  ];

  return (
    <div className=" bg-white flex flex-col items-center mt- px-6 py-14">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg w-[350px] transition hover:scale-110 duration-400"
          >
            {/* Image Section */}
            <div className="relative h-45 w-full">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            {/* Content Section */}
            <div className="bg-gradient-to-b from-blue-800 to-blue-200 p-4 text-white h-[200px] flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm opacity-100">{service.description}</p>
              </div>
              <button className="w-[80] mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-2 py-2 rounded-full shadow-md transition">
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
