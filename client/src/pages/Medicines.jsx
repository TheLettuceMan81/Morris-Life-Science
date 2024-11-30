import React, { useState, useEffect } from "react";
import MedicineCard from "../components/MedicineCard";

const mockMedicines = [
  { id: 1, name: "Paracetamol", category: "Pain Relief", price: "10" },
  { id: 2, name: "Amoxicillin", category: "Antibiotics", price: "15" },
  { id: 3, name: "Cetirizine", category: "Allergy", price: "8" },
];

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMedicines(mockMedicines);
    }, 1000);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Medicines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default Medicines;
