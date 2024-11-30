import React from "react";

const MedicineCard = ({ medicine }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold text-gray-800">{medicine.name}</h3>
      <p className="text-gray-600">Category: {medicine.category}</p>
      <p className="text-gray-600">Price: ₹{medicine.price}</p>
    </div>
  );
};

export default MedicineCard;
