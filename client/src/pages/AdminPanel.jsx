import React, { useState } from "react";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Medicine:", formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Admin Panel</h2>
      <form
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Medicine Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="block w-full border border-gray-100-300 rounded-md px-4 py-2 mb-4"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
