"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { Product } from "@/interfaces/Product";

export const inverters: Product[] = [
  {
    id: 1,
    name: "SOFAR 1100~ 3300TL-G3 Series",
    brand: "SOFAR",
    model: "1100~3300TL-G3",
    type: "On Grid Inverter",
    price: 270000,
    image: "/p2.jpeg",
    category: "Inverter",
    desc: "On Grid Inverter, Sofar, Solar Inverter",
  },
  {
    id: 2,
    name: "GOODWE Three Phase Inverter 10kW(G-3 Series)",
    brand: "GOODWE",
    model: "10kW (G-3)",
    type: "On Grid Inverter",
    price: 205000,
    image: "/p2.jpeg",
    category: "Inverter",
    desc: "On Grid Inverter, Solar Inverter",
  },
  {
    id: 3,
    name: "Solis 10kW On-Grid Solar Inverter",
    brand: "Solis",
    model: "10kW",
    type: "On Grid Inverter",
    price: 203000,
    image: "/p2.jpeg",
    category: "Inverter",
    desc: "On Grid Inverter, Solar Inverter, Solis",
  },
  {
    id: 4,
    name: "Solis 15kW 3P On-Grid Solar Inverter",
    brand: "Solis",
    model: "15kW 3P",
    type: "On Grid Inverter",
    price: 243000,
    image: "/p2.jpeg",
    category: "Inverter",
    desc: "On Grid Inverter, Solar Inverter, Solis",
  },
  {
    id: 5,
    name: "Solis 20kW 3P On-Grid Solar Inverter",
    brand: "Solis",
    model: "20kW 3P",
    type: "On Grid Inverter",
    price: 305000,
    image: "/p2.jpeg",
    category: "Inverter",
    desc: "On Grid Inverter, Solar Inverter, Solis",
  },
];



export default function InverterSlider() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        EcoSmart Inverters
      </h2>


      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {inverters.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded hover:bg-white hover:shadow-md p-4 text-center h-[350px] mb-10 relative group">
              <p className="text-xs text-gray-500 mb-2">{item.desc}</p>
              <h3 className="font-semibold text-sm text-secondary hover:underline mb-3">{item.title}</h3>
              <Image height={400} width={400} src={item.image} alt={item.name} className="h-36 mx-auto mb-4 object-contain" />
              <p className="text-lg font-semibold">{item.price}</p>
              <button className="mt-2 absolute right-2 bottom-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-white">
                <AiOutlineShoppingCart/>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
