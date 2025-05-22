import React from "react";

interface SolarBannerProps {
  header: string;
  subtitle: string;
}

const Banner: React.FC<SolarBannerProps> = ({ header, subtitle }) => {
  return (
    <section className="relative overflow-hidden md:h-[50vh] rounded-xl  p-6 md:p-10 flex items-center ">
      {/* Text Content */}
      <div className="z-10 max-w-xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-green-600">
          {header}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center">
          {subtitle}
        </p>
      </div>

      {/* Background graphics */}
      <div className="absolute inset-0 bg-[url('/banner.png')]  z-0" />
    </section>
  );
};

export default Banner;
