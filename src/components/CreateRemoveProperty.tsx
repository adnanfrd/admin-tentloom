"use client";

import { useState } from "react";
import Link from "next/link";
import montserratAlternates from "./fonts";

const CreateRemoveProperty = () => {
  const [property, setProperty] = useState({
    name: "",
    tenants: "",
    tenantsPaid: "",
    tenantsUnpaid: "",
    monthlyAmount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] px-6 py-4 flex flex-col items-center`}>
      {/* Header Section */}
<div className="w-full flex flex-col md:flex-row items-center justify-between max-w-4xl px-4 md:px-0 text-center md:text-left">
  <Link
    href="/dashboard"
    className="flex items-center space-x-2 text-gray-600 hover:text-black border border-gray-300 px-4 py-2 rounded-full mb-3 md:mb-0"
  >
    ⬅ Back to home
  </Link>
  <h1 className="text-lg sm:text-xl font-semibold">
    Create Or Remove Properties{" "}
    <span className="text-gray-500 block md:inline">
      — {new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </span>
  </h1>
</div>


      {/* Form Section */}
      <div className="mt-8 w-full max-w-4xl bg-[#FAF8F0] p-6 rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-lg font-semibold text-center mb-4">Create New Property</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Property Name"
            value={property.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            name="tenants"
            placeholder="Tenants"
            value={property.tenants}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            name="tenantsPaid"
            placeholder="Tenants Paid"
            value={property.tenantsPaid}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            name="tenantsUnpaid"
            placeholder="Tenants Unpaid"
            value={property.tenantsUnpaid}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="monthlyAmount"
            placeholder="Monthly Amount"
            value={property.monthlyAmount}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-full shadow-md hover:bg-blue-600 transition">
            Create Property
          </button>
        </form>
      </div>

      {/* Remove Property Section */}
      <div className="mt-8 w-full max-w-4xl bg-[#FAF8F0] p-6 rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-lg font-semibold text-center mb-4">Remove Property</h2>
        <input
          type="text"
          placeholder="Enter Property Name "
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-full shadow-md hover:bg-red-600 transition">
          Remove Property
        </button>
      </div>
    </div>
  );
};

export default CreateRemoveProperty;
