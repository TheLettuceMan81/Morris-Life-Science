import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="w-full bg-blue-600 text-white py-6 px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Welcome to Morris Life Sciences
        </h1>
        <p className="text-base md:text-lg text-center max-w-2xl">
          Providing top-quality medicines and healthcare solutions to meet your
          needs.
        </p>
      </header>

      <section className="py-6 px-4 w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
          Who We Are
        </h2>
        <p className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
          Our company, which has been in the pharmaceutical industry for more
          than 15 years, is committed to providing excellence and innovation.
          Our goal is to help millions of people live better lives by offering
          high-quality medications and healthcare solutions.
        </p>
      </section>

      <section className="py-6 px-4 w-full bg-white shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">
              Pharmaceutical Excellence
            </h3>
            <p className="text-gray-700">
              Delivering top-quality medicines for various health needs with
              precision and care.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">
              Research & Innovation
            </h3>
            <p className="text-gray-700">
              Pioneering advancements in healthcare through cutting-edge
              research and development.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">
              Patient-Centric Care
            </h3>
            <p className="text-gray-700">
              Focusing on improving the health and well-being of patients with
              effective solutions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
