import { Product } from "@/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`} className="shadow-sm hover:shadow-xl rounded p-4 min-h-[320px] group relative">
      <p className="text-sm text-gray-500">{product.category}</p>
      <h2 className="font-semibold text-secondary mb-4">{product.name}</h2>
      <div className="relative">
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="w-full h-40 object-contain mb-4"
        />
        {product.discount && (
          <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded absolute bottom-0">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="mt-2 relative">
        {product.discount && product.oldPrice && (
          <span className="text-sm text-gray-400 line-through mr-2">
            Rs {product.oldPrice.toLocaleString()}
          </span>
        )}
        <span
          className={`text-lg font-bold  ${
            product.discount ? "text-primary" : "text-gray-500"
          }`}
        >
          Rs {product.price.toLocaleString()}
        </span>
      </div>
      {/* Cart Icon */}
      <button className="absolute bottom-2 right-2 bg-gray-200 group-hover:bg-primary group-hover:text-white p-3 rounded-full transition cursor-pointer">
        <AiOutlineShoppingCart />
      </button>
    </Link>
  );
};

export default ProductCard;
