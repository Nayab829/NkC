"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { AiOutlineShoppingCart } from "react-icons/ai";

const categories = ["Top 20", "LONGi", "Jinko", "JA Solar", "Canadian"];

const products = [
  {
    title: "Jinko N-Type Bifacial 590w",
    brand: "Jinko",
    category: "Solar Panels",
    image: "/p1.png",
    oldPrice: 18000,
    newPrice: 17700,
    discount: "-2%",
  },
  {
    title: "Jinko N-Type Bifacial 585w",
    brand: "Jinko",
    category: "Solar Panels",
    image: "/p1.png",
    oldPrice: 17800,
    newPrice: 17696,
    discount: "-1%",
  },
  {
    title: "Canadian 615w Bi-Facial N Type",
    brand: "Canadian",
    category: "Solar Panels",
    image: "/p1.png",
    oldPrice: 20000,
    newPrice: 19988,
    discount: "-0%",
  },
  {
    title: "Hi-MO 7 (N-Type Bifacial)",
    brand: "LONGi",
    category: "Solar Panels",
    image: "/p1.png",
    oldPrice: 18000,
    newPrice: 17816,
    discount: "-1%",
  },
  {
    title: "Canadian 585w Bi-Facial",
    brand: "Canadian",
    category: "Solar Panels",
    image: "/p1.png",
    oldPrice: 0,
    newPrice: 18428,
    discount: "NEW",
  },
];

const ProductSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState("Top 20");

  const filteredProducts =
    selectedCategory === "Top 20"
      ? products
      : products.filter((p) => p.brand === selectedCategory);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto mb-10">
      <div className="flex items-center flex-col md:flex-row justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-amber-300">
          Solar Power Solutions
        </h2>
        <div className="flex items-center space-x-3 md:space-x-6 border-b border-gray-300 pb-2 mb-6 overflow-x-scroll md:overflow-x-hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 md:px-4 py-1 rounded-full text-xs md:text-sm border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-white border-yellow-400"
                  : "border-transparent text-gray-700 hover:text-yellow-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
      >
        {filteredProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="hover:bg-white rounded-md p-5 hover:shadow-2xl relative group cursor-pointer mb-10">
              {/* Discount/NEW Badge */}
              <span
                className={`absolute top-2 left-2 text-xs font-bold text-white px-2 py-1 rounded ${
                  product.discount === "NEW" ? "bg-red-500" : "bg-green-600"
                }`}
              >
                {product.discount}
              </span>

              {/* Image */}
              <div className="w-full h-48 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <p className="text-sm text-gray-400">
                  {product.brand}, {product.category}
                </p>
                <h3 className="text-md font-semibold text-blue-700 hover:underline cursor-pointer">
                  {product.title}
                </h3>

                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-gray-500 font-bold text-lg">
                    Rs {product.newPrice.toLocaleString()}
                  </span>
                  {product.oldPrice !== 0 && (
                    <span className="line-through text-sm text-gray-400">
                      Rs {product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Cart Icon */}
              <button className="absolute bottom-4 right-4 bg-gray-200 group-hover:bg-yellow-400 p-3 rounded-full transition cursor-pointer">
                <AiOutlineShoppingCart />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
