"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { Product } from "@/interfaces/Product";

export const batteries: Product[] = [
  {
    id: 1,
    name: "Phoenix TX 3500",
    brand: "Phoenix",
    model: "TX 3500",
    type: "Tubular Battery",
    capacity: "280 AH",
    price: 64500,
    image: "/p3.png",
    category: "Tubular Battery",
  },
  {
    id: 2,
    name: "Phoenix TX 3000",
    brand: "Phoenix",
    model: "TX 3000",
    type: "Tubular Battery",
    capacity: "245 AH",
    price: 60000,
    image: "/p3.png",
    category: "Lithium-ion Battery",
  },
  {
    id: 3,
    name: "Phoenix TX 2500",
    brand: "Phoenix",
    model: "TX 2500",
    type: "Tubular Battery",
    capacity: "230 AH",
    price: 51000,
    image: "/p3.png",
    category: "Tubular Battery",
  },
  {
    id: 4,
    name: "Phoenix TX 1800",
    brand: "Phoenix",
    model: "TX 1800",
    type: "Tubular Battery",
    capacity: "185 AH",
    price: 39500,
    image: "/p3.png",
    category: "Tubular Battery",
  },
  {
    id: 5,
    name: "OSAKA TA-1800",
    brand: "OSAKA",
    model: "TA-1800",
    type: "Tubular UPS & Solar Battery",
    capacity: "N/A",
    price: 56500,
    image: "/p3.png",
    category: "Lithium-ion Battery",
  },
];


const BatterySlider = () => {
  const tabs = ["Top 20", "Tubular Battery", "Lithium-ion Battery"];
  const [activeTab, setActiveTab] = useState("Top 20");

  const filtered = batteries.filter(
    (battery) => activeTab === "Top 20" ? battery : battery.category === activeTab
  );

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
     <div className="flex flex-col md:flex-row items-center justify-between overflow-x-scroll md:overflow-x-hidden">
         <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
        SunCharge Batteries
      </h2>

      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 w-fit md:px-4 py-1 rounded-full text-xs md:text-sm cursor-pointer  outline-none ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-transparent text-gray-700 hover:text-yellow-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
     </div>

      <Swiper
        modules={[Pagination,Autoplay]}
         autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
      >
        {filtered.map((battery, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl hover:shadow-xl shadow p-4 text-center w-full h-full flex flex-col items-center relative group mb-10">
              <div className="text-sm font-semibold text-secondary mb-1">
                {battery.brand}, {battery.model}, {battery.capacity}
              </div>
              <Image
                src={battery.image}
                alt={battery.name}
                height={400}
                width={400}
                className="w-40 h-28 object-contain mb-3"
              />
              <div className="text-xs text-gray-500 mb-2">{battery.type}</div>
              <div className="text-lg font-bold text-gray-800">
                {battery.price}
              </div>
              <button className="mt-2 absolute right-2 bottom-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-white cursor-pointer">
                <AiOutlineShoppingCart />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BatterySlider;
