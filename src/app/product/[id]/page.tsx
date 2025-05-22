"use client";
import { Product } from "@/interfaces/Product";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const SingleProductPage = () => {
  const params = useParams();
  const id = params.id;

  
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
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found.</div>;
  }
  const [thumbnail, setThumbnail] = React.useState(product.image);
  return (
    product && (
      <div className="max-w-7xl mx-auto md:my-16 w-full px-6">
        <p>
          <Link href={`/`}>Home</Link> /<Link href={`/shop`}> Products</Link> /
          <span> {product.category}</span> /
          <span className="text-primary"> {product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <div
                onClick={() => setThumbnail(product.image)}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <img src={product.image} alt={`Thumbnail `} />
              </div>
            </div>

            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img src={thumbnail} alt="Selected product" />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                Rs: ${product.price}
              </p>
              <p className="text-2xl font-medium">Rs: ${product.price}</p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            {/* <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul> */}

            <div className="flex items-center mt-10 gap-4 text-base">
              <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                Add to Cart
              </button>
              <button className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SingleProductPage;
