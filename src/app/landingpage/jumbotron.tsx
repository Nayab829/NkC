'use client';

import BatterySlider from '@/components/BatterySlider';
import GetQuote from '@/components/GetQuote';
import InverterSlider from '@/components/InverterSlider';
import ProductSlider from '@/components/ProductSlider';
import PromoProducts from '@/components/PromoProducts';
import Image from 'next/image';
import Link from 'next/link';

const Jumbotron = () => {
  return (
  <>
    <section className="bg-gradient-to-r from-yellow-100 via-white to-blue-100 py-16 px-6 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto md:h-[60vh]">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Power Your Future With <span className="text-primary">Solar Energy</span>
          </h1>
          <p className="text-gray-600 mt-6 md:text-lg text-sm ">
            Save money and the planet by switching to clean, renewable energy. Discover high-performance solar panels, inverters, and complete solutions at NKC Solar Energy.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <Link href="/shop">
              <span className="px-6 py-2 md:py-3 bg-primary hover:bg-primary text-white font-medium rounded-full transition">
                Shop Now
              </span>
            </Link>
            <Link href="/contact">
              <span className="px-6 py-2 md:py-3 border-2 border-primary text-primary hover:bg-yellow-100 font-medium rounded-full transition">
                Contact Us
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <Image
            src="/bg.jpg"
            alt="Solar Panels"
            width={800}
            height={1000}
            className="w-full"
          />
        </div>
      </div>
    </section>
    <ProductSlider/>
    <InverterSlider/>
    <PromoProducts/>
    <BatterySlider/>
    <GetQuote/>
    </>
  );
};

export default Jumbotron;
