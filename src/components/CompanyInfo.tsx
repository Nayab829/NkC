import Image from 'next/image'
import React from 'react'

const CompanyInfo = () => {
  return (
<>
{/* company intro */}
     <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row  gap-10">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">History of the Company</h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            NKC was established in 2024 with a vision to become a leading name in Pakistan’s renewable energy sector.
            What started as a small initiative has quickly evolved into a trusted solar solutions provider. Over time, we've expanded our
            services, invested in state-of-the-art technology, and built a network of satisfied customers. Our growth is driven by a passion
            for renewable energy and a commitment to excellence. Each step we take is aimed at driving Pakistan closer to energy sustainability.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Cooperate with Us!</h3>
          <p className="text-sm md:text-base text-gray-600">
            We believe in partnerships that make a difference. Whether you're an individual, a business, or a government body,
            NKC welcomes collaboration opportunities. Together, we can design impactful solar energy projects that
            drive sustainability. Partnering with us means investing in expertise, trust, and innovation. Let’s work together to illuminate a brighter future.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <Image
            src="/about1.webp" 
            alt="Solar Energy Partnership"
            width={600}
            height={400}
            className="w-full md:h-[500px] h-auto rounded-xl "
          />
        </div>
      </div>
    </section>
</>
  )
}

export default CompanyInfo