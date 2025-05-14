'use client';

import Image from 'next/image';
import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';


const PromoProducts = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10  max-w-7xl mx-auto">
      {/* Left Product - Solar Panel */}
      <div className="flex items-center gap-10 bg-gray-100 rounded-xl shadow p-6">
        <Image src="/solar.png" width={500} height={500} alt="Jinko Solar Panel" className="w-20 md:w-64 object-contain" />
        <div className="">
          <h3 className="text-xs md:text-sm font-light text-gray-500">JINKO TIGER</h3>
          <h2 className="text-base md:text-lg font-semibold text-gray-800 leading-tight">N-TYPE<br />MONO-FACIAL<br />SOLAR PANEL</h2>
          <div className="mt-2 text-sm font-bold text-black flex items-center justify-end gap-1">
            Shop Now
        <BiArrowToRight size={14} className="text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Right Product - Inverter */}
      <div className="flex items-center gap-10 bg-gray-100 rounded-xl shadow p-6">
        <Image src="/inverter.png" width={500} height={500} alt="SolarMax Inverter" className="w-20  md:w-64 object-contain" />
        <div className="">
          <h3 className="text-xs md:text-sm font-light text-gray-500">SOLARMAX</h3>
          <h2 className="text-base md:text-lg font-semibold text-gray-800 leading-tight">
            FALCON DUAL<br />PV6000 PLUS
          </h2>
          <div className="mt-2 text-sm font-medium text-gray-500">FROM</div>
          <div className="text-2xl font-bold text-gray-800 flex items-center justify-end gap-1">
            Rs230K
            <BsArrowRight size={18} className="text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoProducts;
