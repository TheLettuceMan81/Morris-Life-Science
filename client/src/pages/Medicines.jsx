import React, { useState, useEffect } from "react";
import MedicineCard from "../components/MedicineCard";
import Footer from "../components/Footer";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const storedMedicines = JSON.parse(localStorage.getItem("medicines")) || [];
    setMedicines(storedMedicines);
  }, []);

  const handleUpdate = (updatedMedicine) => {
    const updatedMedicines = medicines.map((medicine) =>
      medicine.id === updatedMedicine.id ? updatedMedicine : medicine
    );
    setMedicines(updatedMedicines);
    localStorage.setItem("medicines", JSON.stringify(updatedMedicines));
  };

  const handleRemove = (id) => {
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(updatedMedicines);
    localStorage.setItem("medicines", JSON.stringify(updatedMedicines));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Medicines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {medicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Medicines;