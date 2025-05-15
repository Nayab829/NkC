
import Image from "next/image";


export default function GetQuote() {
  return (
    <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-white p-8 gap-8 ">
      {/* Text Section */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Get <span className="text-secondary">an estimate</span>
        </h2>
        <p className="text-gray-700 mb-4">
          Ready to switch to solar? Let’s make it simple!
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>
            Fill out our quick and easy form with your details and energy requirements.
          </li>
          <li>
            Our experts will provide a customized quote tailored to your specific needs.
          </li>
          <li>
            Enjoy transparent pricing and expert recommendations to make the best choice.
          </li>
        </ul>
        <p className="text-gray-700">
          Take the first step towards clean energy today.{' '}
          <span className="font-semibold text-gray-900">Quote now!</span>
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-md">
        <Image
          src="/bottom.jpg"
          alt="Renewable Energy Solutions"
          width={600}
          height={300}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
