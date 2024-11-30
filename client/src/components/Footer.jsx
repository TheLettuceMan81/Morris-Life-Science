import React from "react";

function Footer() {
  return (
    <footer className="py-10 px-6 w-full bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">
          Let's Build a Healthier Future Together
        </h3>
        <p className="text-lg mb-6">
          Explore our medicines and services, and discover how we can help you
          achieve better health.
        </p>
        <a
          href="/medicines"
          className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          View Medicines
        </a>
      </div>
    </footer>
  );
}

export default Footer;
