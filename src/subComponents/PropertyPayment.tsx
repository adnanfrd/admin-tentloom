"use client";
import Link from "next/link";
import { FileText, ChevronDown } from "lucide-react";
import { useState } from "react";
import montserratAlternates from "@/components/fonts";

const paymentsData = [
  { name: "Terry Neal", property: "Jelly Apartments", amount: "$2,000.00", status: "Payment confirmed", date: "2023-01-03" },
  { name: "Tom Corie", property: "Lift Apartments", amount: "$2,000.00", status: "Payment confirmed", date: "2023-01-03" },
  { name: "Tom Corie", property: "Lift Apartments", amount: "$2,000.00", status: "Payment confirmed", date: "2023-01-03" },
  { name: "Arie Carol", property: "Trent Apartments", amount: "$1,500.00", status: "Payment confirmed", date: "2023-01-03" },
];

const PropertyPayment = () => {
  const [payments, setPayments] = useState(paymentsData);
  const [sortType, setSortType] = useState("");
  const [selectedSort, setSelectedSort] = useState("");


  const sortPayments = (type: string) => {
    let sortedPayments = [...payments];
  
    if (type === "name") {
      sortedPayments.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "property") {
      sortedPayments.sort((a, b) => a.property.localeCompare(b.property));
    } else if (type === "newest") {
      sortedPayments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (type === "alphabetical") {
      sortedPayments.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    setSelectedSort(type); // Track selected sort type
    setPayments(sortedPayments);
  };
  

  return (
    <div className={`${montserratAlternates.className} min-h-screen flex flex-col items-center bg-[#FAF9F6] p-6 sm:p-10`}>
      
      {/* Header Section */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-8">
        
        {/* Back Button - Always at Start */}
        <div className="w-full sm:w-auto flex justify-start">
          <Link
            href="/payment-overview"
            className="flex items-center text-gray-600 border border-gray-400 rounded-full px-3 py-1 text-sm sm:text-base hover:bg-gray-100 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>

        {/* Title - Always at Centre */}
        <div className="w-full sm:w-auto flex justify-center">
          <h1 className="text-xl sm:text-2xl font-semibold text-center">
            Property’s Payment <span className="text-gray-500 text-lg sm:text-xl">— August 21, 2023</span>
          </h1>
        </div>

        {/* Sort Option with Icon and Dropdown */}
        <div className="w-full sm:w-auto flex justify-end relative">
          <button 
            className="flex items-center border border-gray-400 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-gray-100 transition cursor-pointer"
            onClick={() => setSortType(sortType ? "" : "dropdown")}
          >
            Sort <ChevronDown className="ml-2 w-4 h-4" />
          </button>

          {sortType === "dropdown" && (
  <div className="absolute right-1 mt-10 w-56 bg-[#FAF8F0] border rounded-md shadow-lg z-10 p-2">
    <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
      <input 
        type="checkbox" 
        checked={selectedSort === "alphabetical"} 
        onChange={() => sortPayments("alphabetical")} 
        className="mr-2"
      />
      Alphabetical Order
    </label>
    
    <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
      <input 
        type="checkbox" 
        checked={selectedSort === "name"} 
        onChange={() => sortPayments("name")} 
        className="mr-2"
      />
      By Name
    </label>

    <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
      <input 
        type="checkbox" 
        checked={selectedSort === "property"} 
        onChange={() => sortPayments("property")} 
        className="mr-2"
      />
      By Property Name
    </label>

    <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
      <input 
        type="checkbox" 
        checked={selectedSort === "newest"} 
        onChange={() => sortPayments("newest")} 
        className="mr-2"
      />
      Newest to Oldest
    </label>
  </div>
)}

        </div>

      </div>

      {/* Payment Cards */}
      <div className="w-full max-w-3xl space-y-6">
        {payments.map((payment, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:justify-between bg-[#FAF8F0] p-6 rounded-2xl shadow-md border border-gray-400 gap-4 sm:gap-6"
          >
            {/* Left Side - Icon & Details */}
            <div className="flex items-center gap-4 sm:gap-6">
              <FileText className="w-10 h-10 sm:w-14 sm:h-14 text-blue-500" />
              <div>
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-900">{payment.name}</h2>
                <p className="text-base sm:text-lg text-gray-700">{payment.property}</p>
                <p className="text-blue-600 text-sm sm:text-lg font-medium">{payment.status}</p>
              </div>
            </div>

            {/* Right Side - Amount & Date */}
            <div className="text-center sm:text-right">
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{payment.amount}</p>
              <p className="text-sm sm:text-lg text-gray-600">{payment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPayment;
