import React from "react";

const ContactUs = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h2>
    <div className="bg-white p-6 shadow-md rounded">
      <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
      <p className="text-gray-700">
        <strong>Phone:</strong>{" "}
        <a href="tel:6265115253" className="text-blue-600 hover:underline">
          6265115253
        </a>
      </p>
      <p className="text-gray-700">
        <strong>Email:</strong> info@morrislifesciences.com
      </p>
      <p className="text-gray-700">
        <strong>Location:</strong> Nagpur, India
      </p>
    </div>
  </div>
);

export default ContactUs;
