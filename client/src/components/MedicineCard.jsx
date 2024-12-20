import React, { useState } from "react";

const MedicineCard = ({ medicine, onUpdate, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMedicine, setUpdatedMedicine] = useState(medicine);

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
        setUpdatedMedicine({ ...updatedMedicine, image: resizedImage });
      };
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = () => {
    onUpdate(updatedMedicine);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedMedicine.name}
              onChange={(e) =>
                setUpdatedMedicine({ ...updatedMedicine, name: e.target.value })
              }
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            <input
              type="text"
              value={updatedMedicine.category}
              onChange={(e) =>
                setUpdatedMedicine({
                  ...updatedMedicine,
                  category: e.target.value,
                })
              }
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            <input
              type="number"
              value={updatedMedicine.price}
              onChange={(e) =>
                setUpdatedMedicine({
                  ...updatedMedicine,
                  price: e.target.value,
                })
              }
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            <button
              onClick={handleUpdate}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold text-gray-800">{medicine.name}</h3>
            {medicine.image && (
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-48 object-contain mt-4 mb-4"
              />
            )}
            <p className="text-gray-600">Category: {medicine.category}</p>
            <p className="text-gray-600">Price: ₹{medicine.price}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-4"
            >
              Edit
            </button>
            <button
              onClick={() => onRemove(medicine.id)}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 mt-4 ml-2"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MedicineCard;