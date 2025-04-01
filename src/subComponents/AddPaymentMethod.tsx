"use client";

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import montserratAlternates from "../components/fonts"; // Import Montserrat Alternates font

export default function AddPaymentMethod() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FCFBF7] px-6 py-10 flex flex-col items-center`}>
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between px-4 md:px-0">
          <Link
            href="/payment-method"
            className="flex items-center gap-2 text-gray-600 hover:text-black border border-gray-300 px-4 py-2 rounded-full transition"
          >
            <FaArrowLeft /> Back
          </Link>
          <h1 className="text-lg md:text-xl font-semibold text-center">
            Payment Method{" "}
            <span className="text-gray-500">
              — {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </h1>
        </div>

        {/* Form Section */}
        <div className="mt-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          {[
            { label: "Name", name: "name" },
            { label: "Name of the Bank", name: "bankName" },
            { label: "Account Number", name: "accountNumber" },
            { label: "Routing Number", name: "routingNumber" },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none transition disabled:bg-gray-100"
                placeholder={field.label}
              />
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2 border border-gray-500 text-gray-800 rounded-lg hover:bg-gray-100 transition"
          >
            Edit
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
