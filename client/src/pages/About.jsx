import React from "react";

const About = () => (
  <div>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">About Us</h2>
      <div className="bg-white p-6 shadow-md rounded">
        <h3 className="text-2xl text-blue-600 font-semibold mb-4">
          Morris Life Sciences Pvt. Ltd.
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Our company, which has been in the pharmaceutical industry for more
          than 15 years, is committed to providing excellence and innovation.
          Our goal is to help millions of people live better lives by offering
          high-quality medications and healthcare solutions.
        </p>
        <p className="text-gray-700 mt-4">
          Located in <strong>Nagpur, India</strong>, we take pride in our
          mission to promote health and well-being.
        </p>
      </div>
    </div>
  </div>
);

export default About;
