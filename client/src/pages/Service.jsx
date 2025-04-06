import React from "react";
import Footer from "../components/Footer";

const services = [
  {
    id: 1,
    title: "Property Buying",
    desc: "Find and purchase your dream home or commercial space with expert assistance and verified listings.",
    icon: "🏡",
  },
  {
    id: 2,
    title: "Property Selling",
    desc: "List your property for sale and connect with thousands of potential buyers through our platform.",
    icon: "💼",
  },
  {
    id: 3,
    title: "Rent/Lease Services",
    desc: "Rent or lease properties at competitive rates with legal agreements and tenant verification.",
    icon: "📝",
  },
  {
    id: 4,
    title: "Legal Assistance",
    desc: "Expert legal advice for property verification, sale deeds, registration, and dispute resolution.",
    icon: "⚖️",
  },
  {
    id: 5,
    title: "Home Loans Support",
    desc: "Partnered with top banks to provide easy home loan options with low interest rates and fast approval.",
    icon: "🏦",
  },
  {
    id: 6,
    title: "Property Valuation",
    desc: "Get accurate property value estimates for selling, refinancing, or investment purposes.",
    icon: "📊",
  },
  {
    id: 7,
    title: "Interior Designing",
    desc: "Turn your house into a home with premium interior designing services tailored to your style.",
    icon: "🛋️",
  },
  {
    id: 8,
    title: "Property Management",
    desc: "Full-service management for your rental properties including tenant handling and maintenance.",
    icon: "🔧",
  },
  {
    id: 9,
    title: "Real Estate Consultation",
    desc: "Personalized guidance for real estate investments, market trends, and project planning.",
    icon: "📍",
  },
  {
    id: 10,
    title: "Commercial Spaces",
    desc: "Explore office spaces, shops, and warehouses in prime business locations at the best prices.",
    icon: "🏢",
  },
  {
    id: 11,
    title: "Luxury Properties",
    desc: "Access high-end villas, penthouses, and estates with top-class amenities and privacy.",
    icon: "✨",
  },
  {
    id: 12,
    title: "Verified Listings",
    desc: "Browse only 100% verified listings with real images, documents, and updated prices.",
    icon: "✔️",
  },
];

const Service = () => {
  return (
    <>
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-4">Our Real Estate Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you are looking to buy, sell, or rent, we offer end-to-end real estate solutions to make your journey smooth and secure.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 border border-indigo-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300" href="/">
            Explore More Services
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Service;
