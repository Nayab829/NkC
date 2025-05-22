"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    title: "Support 24/7",
    content:
      "Our dedicated support team is available around the clock to assist you with any inquiries, issues, or updates related to your solar system. We ensure peace of mind with prompt and professional service whenever you need it.",
  },
  {
    title: "Best Quality",
    content:
      "Customized solar energy systems designed for optimal performance. We use premium materials and advanced technology to deliver long-lasting and reliable solutions tailored to your energy needs.",
  },
  {
    title: "Fastest Delivery",
    content:
      "We value your time. Our streamlined processes and experienced logistics team ensure quick and efficient delivery of all equipment, minimizing delays and getting your solar solution up and running swiftly.",
  },
  {
    title: "Maximize Efficiency",
    content:
      "Our systems are engineered for peak performance and energy conversion. With advanced design and expert installation, we ensure you get the most out of every ray of sunlight.",
  },
  {
    title: "Customer Care",
    content:
      "From initial consultation to post-installation support, we’re with you every step of the way. Our customer-first approach ensures a smooth, transparent, and satisfying experience.",
  },
  {
    title: "Over 200 Satisfied Customers",
    content:
      "Join a growing community of more than 200 happy clients who have trusted us to power their homes and businesses with clean energy. Their satisfaction fuels our commitment to excellence.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleFaq = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Quote Info + Image */}
        <div>
          <div className="relative mb-8">
            <Image
              src="/about2.png"
              alt="Solar Panel"
              width={500}
              height={350}
              className="rounded-lg w-full h-auto md:h-[400px]"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get a Quote</h2>
          <p className="text-sm text-gray-600 mb-4">
            Ready to switch to solar? Let’s make it simple!
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
            <li>
              Fill out our quick and easy form with your details and energy
              requirements.
            </li>
            <li>
              Our experts will provide a customized quote tailored to your
              specific needs.
            </li>
            <li>
              Enjoy transparent pricing and expert recommendations to make the
              best choice.
            </li>
          </ul>
          <p className="text-sm text-gray-700">
            Take the first step towards clean energy today.{" "}
            <span className="font-bold text-black cursor-pointer hover:underline">
              Click here to get your free quote now!
            </span>
          </p>
        </div>

        {/* Right: FAQ Accordion */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            What can we do for you ?
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-3">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded ${
                        activeIndex === index
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {activeIndex === index ? (
                        <FaMinus size={16} />
                      ) : (
                        <FaPlus size={16} />
                      )}
                    </span>
                    <span
                      className={`text-gray-500 hover:text-gray-700 cursor-pointer font-semibold ${
                        activeIndex === index
                          ? "text-gray-900"
                          : "text-gray-700"
                      }`}
                    >
                      {faq.title}
                    </span>
                  </div>
                </button>
                {activeIndex === index && faq.content && (
                  <p className="text-sm text-gray-600 mt-2 ml-11">
                    {faq.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
