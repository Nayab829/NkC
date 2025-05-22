"use client";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTh, FaThList, FaTimes } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

const products: Product[] = [
  {
    id: 1,
    name: "Canadian Solar HiKu 590W Solar Panel",
    category: "Solar Panels",
    type: "Solar Panel",
    price: 48000,
    image: "/p1.png",
  },
  {
    id: 2,
    name: "4.00mm Tin Copper with XLPE and EVA Coatings",
    category: "Electrical Accessories",
    type: "Wire",
    price: 20000,
    image: "/p4.png",
  },
  {
    id: 3,
    name: "6.00mm Tin Copper Double PVC Cable – 99.99% Pure",
    category: "Electrical Accessories",
    type: "Wire",
    price: 28000,
    image: "/p4.png",
  },
  {
    id: 4,
    name: "Astronergy 580W N-Type Bi-Facial Solar Panel",
    category: "Solar Panels",
    type: "Solar Panel",
    price: 16530,
    oldPrice: 16780,
    discount: 1,
    image: "/p1.png",
  },
  {
    id: 5,
    name: "SolarEdge 10kW Inverter with HD-Wave Technology",
    category: "Inverter",
    type: "Inverter",
    price: 42000,
    oldPrice: 44000,
    discount: 5,
    image: "/p2.jpeg",
  },
  {
    id: 6,
    name: "Tesla Powerwall 2 Solar Battery",
    category: "Battery",
    type: "Battery",
    price: 80000,
    oldPrice: 85000,
    discount: 6,
    image: "/p5.webp",
  },
  {
    id: 7,
    name: "Longi 550W Monocrystalline Solar Panel",
    category: "Solar Panels",
    type: "Solar Panel",
    price: 15800,
    image: "/p1.png",
  },
  {
    id: 8,
    name: "Huawei SUN2000 5kW Hybrid Inverter",
    category: "Inverter",
    type: "Inverter",
    price: 35000,
    image: "/p2.jpeg",
  },
  {
    id: 9,
    name: "Narada 12V Deep Cycle Solar Battery",
    category: "Battery",
    type: "Battery",
    price: 30000,
    image: "/p3.png",
  },
  {
    id: 10,
    name: "Jinko 545W Mono PERC Solar Panel",
    category: "Solar Panels",
    type: "Solar Panel",
    price: 16200,
    image: "/p1.png",
  },
  {
    id: 11,
    name: "GoodWe GW5000N-ES Inverter",
    category: "Inverter",
    type: "Inverter",
    price: 34000,
    image: "/p2.jpeg",
  },
  {
    id: 12,
    name: "Pylontech Lithium-ion Battery 48V",
    category: "Battery",
    type: "Battery",
    price: 75000,
    image: "/p3.png",
  },
  {
    id: 13,
    name: "Canadian Solar HiKu 590W Solar Panel",
    category: "Solar Panels",
    type: "Solar Panel",
    price: 16900,
    image: "/p1.png",
  },
  {
    id: 14,
    name: "Growatt 6kW Solar Inverter",
    category: "Inverter",
    type: "Inverter",
    price: 37000,
    image: "/p2.jpeg",
  },
  {
    id: 15,
    name: "AGM 200Ah Solar Battery",
    category: "Battery",
    type: "Battery",
    price: 32000,
    image: "/p3.png",
  },
  {
    id: 16,
    name: "REC Alpha Pure-R 600W Solar Panel",
    category: "Solar Panels",
    type: "Solar Panel",
    price: 17500,
    image: "/p1.png",
  },
  {
    id: 17,
    name: "InfiniSolar 3kW On-Grid Inverter",
    category: "Inverter",
    type: "Inverter",
    price: 31000,
    image: "/p2.jpeg",
  },
  {
    id: 18,
    name: "Luminous Solar Tubular Battery 150Ah",
    category: "Battery",
    type: "Battery",
    price: 28000,
    image: "/p3.png",
  },
  {
    id: 19,
    name: "Trina Solar Vertex S+ 410W Panel",
    category: "Solar Panels",
    type: "Solar Panel",
    price: 14500,
    image: "/p1.png",
  },
  {
    id: 20,
    name: "Voltronic Axpert VM III 5kW Inverter",
    category: "Inverter",
    type: "Inverter",
    price: 36000,
    image: "/p2.jpeg",
  },
];

export default function ShopPage() {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-secondary mb-4">
        <Link href={"/"}>Home</Link>
        &gt; <span className="text-black font-semibold">Shop</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Shop</h1>

      {/* Top Controls */}
      <div className="flex flex-row justify-between items-center gap-4 mb-8 bg-gray-200 px-4 py-3">
        <button
          onClick={() => setShowFilters(true)}
          className="p-2 cursor-pointer"
        >
          <FaFilter />
        </button>
        {showFilters && (
          <div className="fixed inset-0 z-40 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setShowFilters(false)}
            ></div>

            {/* Sidebar */}
            <div className="relative w-64 h-full bg-white shadow-lg z-50 p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-600 hover:text-black cursor-pointer"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-3 py-1 rounded-full border text-sm ${
                      selectedCategory === cat
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowFilters(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <button
            className={`p-1 rounded cursor-pointer  ${
              viewType === "grid" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setViewType("grid")}
          >
            <FaTh />
          </button>
          <button
            className={`p-1 rounded cursor-pointer ${
              viewType === "list" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setViewType("list")}
          >
            <FaThList />
          </button>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-4">
          {/* Sorting Dropdown */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-white px-4 py-1 pr-8 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-primary text-sm"
            >
              <option value="">Default sorting</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 text-xs">
              ▼
            </div>
          </div>

          {/* Show Count Dropdown */}
          {/* <div className="relative">
            <select className="appearance-none bg-white px-4 py-1 pr-8 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-primary text-sm">
              <option>Show 20</option>
              <option>Show 50</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 text-xs">
              ▼
            </div>
          </div> */}
        </div>
      </div>

      {/* Product Grid/List */}
      <div
        className={`${
          viewType === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            : "flex flex-col gap-6"
        }`}
      >
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-10 border-t pt-4 text-sm text-gray-600">
        <p>Showing 1–25 of 86 results</p>
        <div className="flex items-center gap-2">
          <span>1</span>
          <span className="text-gray-400">of 4</span>
          <button className="px-2 py-1 border rounded">&rarr;</button>
        </div>
      </div>
    </div>
  );
}
