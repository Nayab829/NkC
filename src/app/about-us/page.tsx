import Banner from '@/components/Banner'
import CompanyInfo from '@/components/CompanyInfo'
import FAQs from '@/components/FAQs'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
    <Banner
        header="About Us"
        subtitle="Empowering Pakistan with the Energy of the Sun"
      />
      <section className="w-full bg-white">
      {/* Top 3-column text */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">What we really do?</h3>
          <p className="text-sm text-gray-600">
            At AsolarEnergy.com.pk, we are committed to revolutionizing the way energy is consumed by harnessing the power of the sun. 
            We specialize in delivering advanced solar solutions for residential, commercial, and industrial applications. 
            Our services include solar panel installations, energy audits, and sustainable energy solutions tailored to meet the unique needs of our clients. 
            By integrating cutting-edge technology and expert consultation, we empower individuals and businesses to reduce their carbon footprint 
            while enjoying significant energy savings.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-sm text-gray-600">
            We envision a cleaner, greener Pakistan powered by renewable energy. 
            Our mission is to lead the transition to sustainable energy by providing reliable, affordable, and innovative solar solutions. 
            Through dedication and forward-thinking, we aim to make renewable energy accessible to all, 
            creating a brighter future for generations to come.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">History of Beginning</h3>
          <p className="text-sm text-gray-600">
            The idea of AsolarEnergy.com.pk was born in 2023 with a simple yet powerful goal: to contribute to Pakistan’s sustainable energy landscape. 
            From humble beginnings, our team of energy enthusiasts joined hands to transform this vision into reality. 
            With the rising demand for clean energy, we began our journey to empower communities and businesses with solar solutions. 
            Our first milestone was the successful installation of our flagship solar project, which paved the way for countless success stories across the country.
          </p>
        </div>
      </div>

      {/* Bottom image */}
      <div className="w-full">
        <Image
          src="/banner2.jpg"
          alt="The Best Solar Energy"
          width={1600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
    <CompanyInfo/>
    <FAQs/>
    </div>
  )
}

export default page