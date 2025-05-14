"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";

const inverters = [
  {
    title: "SOFAR 1100~ 3300TL-G3 Series",
    desc: "On Grid Inverter, Sofar, Solar Inverter",
    price: "Rs 270,000",
    img: "/p2.jpeg",
  },
  {
    title: "GOODWE Three Phase Inverter 10kW(G-3 Series)",
    desc: "On Grid Inverter, Solar Inverter",
    price: "Rs 205,000",
    img: "/p2.jpeg",
  },
  {
    title: "Solis 10kW On-Grid Solar Inverter with Wifi Dongle",
    desc: "On Grid Inverter, Solar Inverter, Solis",
    price: "Rs 203,000",
    img: "/p2.jpeg",
  },
  {
    title: "Solis 15kW 3P On-Grid Solar Inverter with Wifi Dongle",
    desc: "On Grid Inverter, Solar Inverter, Solis",
    price: "Rs 243,000",
    img: "/p2.jpeg",
  },
  {
    title: "Solis 20kW 3P On-Grid Solar Inverter with Wifi Dongle",
    desc: "On Grid Inverter, Solar Inverter, Solis",
    price: "Rs 305,000",
    img: "/p2.jpeg",
  },
];


export default function InverterSlider() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        EcoSmart Inverters
      </h2>

      {/* Tabs */}
      {/* <div className="flex gap-4 mb-6 text-sm font-medium">
        <button className="px-4 py-1 border border-yellow-400 text-yellow-600 rounded-full bg-yellow-100">
          Top 20
        </button>
        <button className="text-gray-500 hover:text-black">On Grid Inverter</button>
        <button className="text-gray-500 hover:text-black">Hybrid Inverter</button>
      </div> */}

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
              <h3 className="font-semibold text-sm text-blue-700 hover:underline mb-3">{item.title}</h3>
              <img src="/p2.jpeg" alt={item.title} className="h-36 mx-auto mb-4 object-contain" />
              <p className="text-lg font-semibold">{item.price}</p>
              <button className="mt-2 absolute right-2 bottom-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 group-hover:bg-yellow-500 group-hover:text-white">
                <AiOutlineShoppingCart/>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
