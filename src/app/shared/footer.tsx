import { BsSend } from "react-icons/bs";

const Footer = () => {
  const linkSections = [
    {
      title: "Explore Solar",
      links: [
        "Home",
        "About",
        "Offers & Deals",
        "Terms and Condtions",
        "Contact Us",
        "FAQs",
      ],
    },
    {
      title: "Solar Essentials",
      links: [
        "Solar Panels",
        "Solar Inverters",
        "Batteries",
        "Charge Controllers",
        "Electrical Accessories",
      ],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];

  return (
    <div className="">
      {/* Newsletter Sign Up */}
      <div className="bg-primary text-gray-900">
        <div className="max-w-7xl mx-auto  px-6 py-6  flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BsSend size={30} />
            <div>
              <p className="font-semibold text-base">Sign up to Newsletter</p>
              <p className="text-sm">
                Stay updated with the latest news and exclusive offers!
              </p>
            </div>
          </div>
          <div className="w-full md:max-w-md">
            <div className="flex rounded-full gap-1 overflow-hidden bg-white">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-gray-800 text-white px-8 text-xs font-semibold">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img className="w-34 md:w-32" src="/nkc logo .png" alt="logo" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        <div className="flex flex-wrap md:gap-32 gap-5 w-full md:w-[60%] ">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2 md:text-xl">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-primary  transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © NKC All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
