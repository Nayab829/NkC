"use client";

import { useState } from "react";

import Image from "next/image";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  const [category, setCategory] = useState("All Categories");
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="px-4 max-w-7xl mx-auto">
      {/* Top Contact Bar */}
      {/* <div className="bg-gray-100 text-sm py-2 px-4 flex justify-between text-gray-700">
        <div>
          <span>(+92) 333 530 0166</span>
          <span className="mx-2">|</span>
          <span>info@asolarenery.com.pk</span>
        </div>
        <div className="space-x-4 hidden sm:block">
          <Link href="#">Track Your Order</Link>
          <span>|</span>
          <Link href="#">Shop</Link>
          <span>|</span>
          <Link href="#">My Account</Link>
        </div>
      </div> */}

      {/* Main Nav */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200 relative">
        {/* menu on  mobile */}
        <div className="relative md:hidden">
          <FaBars size={20} onClick={() => setShowMenu(!showMenu)} />
          {showMenu && (
            <ul className="bg-white absolute left-0 top-full mt-2 w-[200px] p-2 shadow-2xl rounded-xl transition-all duration-300">
              {[
                { text: "Home", link: "/" },
                { text: "Shop", link: "/shop" },
                { text: "About Us", link: "/about" },
                { text: "Services", link: "/services" },
                { text: "Projects", link: "/projects" },
                { text: "Contact Us", link: "/contact" },
              ].map((item, index) => {
                return (
                  <li
                    onClick={() => setShowMenu(false)}
                    key={index}
                    className="pr-8 py-1 pl-4 hover:bg-gray-100 border-b border-gray-200"
                  >
                    <Link href={item.link}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Logo */}
        <div className="">
          <Image src="/nkc logo .png" alt="logo" width={100} height={100} />
        </div>
        <div className="items-center relative group hidden md:flex">
          <p className="font-semibold menu">Explore Solar</p>
          <MdKeyboardArrowDown size={20} />
          <ul className="bg-white absolute top-full mt-2 w-[200px] p-2 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {[
              { text: "Home", link: "/" },
              { text: "Shop", link: "/shop" },
              { text: "About Us", link: "/about" },
              { text: "Services", link: "/services" },
              { text: "Projects", link: "/projects" },
              { text: "Contact Us", link: "/contact" },
            ].map((item, index) => {
              return (
                <li
                  key={index}
                  className="pr-8 py-1 pl-4 hover:bg-gray-100 border-b border-gray-200"
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Desktop Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-3xl mx-4 border-2 border-primary rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search for Products"
            className="flex-1 px-5 py-2 outline-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-2 border-l border-gray-300 outline-none text-sm"
          >
            <option>All Categories</option>
            <option>Panels</option>
            <option>Inverters</option>
          </select>
          <button className="bg-primary cursor-pointer px-4 flex items-center justify-center text-white">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 md:space-x-6  text-gray-800 ">
          {/* Mobile Search Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowSearch(true)}
              className="cursor-pointer hover:scale-105"
            >
              <IoSearch size={28} />
            </button>
          </div>
          <FaRegHeart
            size={28}
            className="cursor-pointer hidden md:block hover:scale-105 "
          />
          <LuUserRound size={28} className="cursor-pointer hover:scale-105" />
          <div className="relative flex items-center space-x-1 cursor-pointer">
            <AiOutlineShoppingCart size={28} className="hover:scale-105" />
            <span className="text-sm font-medium hidden sm:inline">Rs 0</span>
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Search Sidebar */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-50 flex justify-end">
          <div className="bg-white w-full h-full p-6 relative shadow-lg transition-all">
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-4 cursor-pointer right-4 text-gray-600 text-xl"
            >
              <FaTimes size={30} />
            </button>
            <h2 className="text-xl font-semibold mb-6">Search Products</h2>
            <div className="border-2 border-primary rounded-full flex overflow-hidden">
              <input
                type="text"
                placeholder="Search for Products"
                className="flex-1 px-2 py-2 outline-none"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-l border-gray-300 px-1 text-sm outline-none"
              >
                <option>All Categories</option>
                <option>Panels</option>
                <option>Inverters</option>
              </select>
              <button className="bg-primary px-2 flex cursor-pointer items-center justify-center text-white">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
