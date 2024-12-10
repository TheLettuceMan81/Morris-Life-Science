import React from "react";
import logo from "../assets/logo.jpg";
const About = () => (
  <div className="p-8 bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
        About Us
      </h2>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-3xl text-blue-600 font-semibold mb-6 text-center">
          Morris Life Sciences Pvt. Ltd.
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At Morris Life Sciences, we have been making strides in the
          pharmaceutical industry for over{" "}
          <strong className="text-blue-500">15 years</strong>. Our commitment to
          excellence and innovation drives us to deliver high-quality
          medications and healthcare solutions that transform lives.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          With a dedicated team and state-of-the-art facilities, we are focused
          on making a positive impact on the health and well-being of
          communities worldwide. We strive to empower healthier, happier lives.
        </p>
        <div className="bg-blue-50 p-6 rounded-md">
          <p className="text-gray-800 text-lg">
            <strong>Our Headquarters:</strong> Nagpur, India
          </p>
          <p className="text-gray-800 text-lg mt-2">
            <strong>Mission:</strong> To promote health and well-being through
            innovative and accessible healthcare solutions.
          </p>
        </div>
        <div className="mt-6 text-center">
          <img
            src={logo}
            alt="Morris Life Sciences"
            className="rounded-md shadow-lg mx-auto"
          />
          <p className="text-sm text-gray-500 mt-2">
            Building healthier communities, one innovation at a time.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
