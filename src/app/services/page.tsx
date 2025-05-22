import Banner from "@/components/Banner";
import CompanyInfo from "@/components/CompanyInfo";
import FAQs from "@/components/FAQs";
import { FaHandHoldingUsd, FaSolarPanel, FaTools, FaUsers } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa6";

const services = [
  {
    title: "Solar Panel Installation",
    description:
      "Customized and seamless installation of solar panels for residential, commercial, and industrial setups.",
    icon: <FaSolarPanel size={80}/>, 
  },
  {
    title: "System Maintenance and Repairs",
    description:
      "Ensure your solar systems perform optimally with our expert maintenance and repair services.",
    icon: <FaTools  size={80}/>,
  },
  {
    title: "Energy Audits and Consulting",
    description:
      "Our energy specialists assess your energy needs to design tailored solar solutions that maximize efficiency.",
    icon: <FaUsers  size={80}/>,
  },
  {
    title: "Solar Financing Options",
    description:
      "Flexible financing plans to make switching to solar energy accessible and affordable.",
    icon:<FaHandHoldingUsd  size={80}/>,
  },
  {
    title: "Battery Storage Solutions",
    description:
      "Reliable battery systems to store excess energy for uninterrupted power.",
    icon: <FaCarBattery  size={80}/>,
  },
];

const ServicesPage = () => {
  return (
   <>
    <Banner
        header="Services"
        subtitle="Empowering Pakistan with the Energy of the Sun"
      />
    <section>
 <div className="py-16 bg-white text-center px-4 md:px-12 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {services.slice(0, 3).map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-secondary p-2 rounded-full shadow-sm">
                {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 max-w-xs">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {services.slice(3).map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-secondary p-2 rounded-full shadow-sm">
                {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 max-w-xs">
              {service.description}
            </p>
          </div>
        ))}
      </div>

     
    </div>
     <p className="text-blue-600 font-semibold text-base md:text-lg bg-gray-100 h-[20vh] text-center flex items-center justify-center p-4">
        Our dedicated team ensures you receive end-to-end support for all your solar energy needs.
      </p>
    </section>
    <CompanyInfo/>
    <FAQs/>
   </>
   
  );
};

export default ServicesPage;
