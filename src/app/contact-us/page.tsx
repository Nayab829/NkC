"use client"; // for app router

import { useState, ChangeEvent, FormEvent } from "react";

type FormFields = {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormFields>;

export default function ContactPage() {
  const [form, setForm] = useState<FormFields>({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <nav className="text-sm text-gray-600 mb-4">
        <span className="text-secondary">Home</span> &gt;{" "}
        <span>Contact Us</span>
      </nav>

         <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">Contact Us</h1>
    
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left - Form */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-600">Leave us a Message</h2>
          <p className="text-gray-600 mb-6">
            We're here to help! Fill out the form and we'll get back to you.
          </p>

          {submitted && (
            <p className="text-green-600 font-medium mb-4">
              Your message has been sent successfully!
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name*"
                  className="border border-gray-300 p-2 w-full rounded outline-primary"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name*"
                  className="border border-gray-300 p-2 w-full rounded outline-primary"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject*"
                className="border border-gray-300 p-2 w-full rounded outline-primary"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message*"
                rows={5}
                className="border min-h-[250px] resize-none border-gray-300 p-2 w-full rounded outline-primary"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-[#5f9bc9]" : "bg-secondary hover:bg-[#395266]"
              } text-white px-6 py-2 rounded transition cursor-pointer`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right - Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-600">Office Location</h2>
          <p className="text-gray-700 mb-4">
            <p>Solar Energy</p>
            
            Shop No. 2053/1-3, Adjacent to City Bakers,
            <br />
            Main Peshawar Road, Rawalpindi.
          </p>

          <h3 className="font-semibold text-xl text-gray-600 mt-6 mb-2">Customer Service</h3>
          <p className="text-gray-700 mb-2">
            Support: (+92) 333 530 0166
            <br />
            WhatsApp: (+92) 318 8330140
            <br />
            Email:{" "}
            <a
              href="mailto:info@solarenergy.com.pk"
              className="text-secondary font-semibold"
            >
              info@solarenergy.com.pk
            </a>
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-2 text-gray-600">Working Hours</h3>
          <p className="text-gray-700 mb-4">
            Monday to Friday: 09:00 am – 09:00 pm
            <br />
            Saturday to Sunday: 09:00 am – 11:00 pm
          </p>

          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps?q=33.5882,73.0046&z=15&output=embed"
              className="w-full h-64  rounded"
              allowFullScreen
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
