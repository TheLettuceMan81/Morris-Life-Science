import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const width = 450;
        const height = 600;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const resizedImage = canvas.toDataURL("image/jpeg");
        setFormData({ ...formData, image: resizedImage });
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedicine = { ...formData, id: Date.now() };
    const storedMedicines = JSON.parse(localStorage.getItem("medicines")) || [];
    localStorage.setItem("medicines", JSON.stringify([...storedMedicines, newMedicine]));
    setFormData({ name: "", category: "", price: "", image: null });
    navigate("/medicines");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-6 bg-gray-100">
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
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
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
      <Footer />
    </div>
  );
};

export default AdminPanel;