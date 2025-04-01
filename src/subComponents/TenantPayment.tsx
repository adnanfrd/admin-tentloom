"use client";
import { useState } from "react";
import Link from "next/link";
import { FileText, ChevronDown } from "lucide-react";
import montserratAlternates from "@/components/fonts";

const initialPayments = [
  {
    property: "City Apartments",
    aptNumber: "225",
    tenant: "Terry Cosie",
    amount: "$1,500.00",
    status: "Payment confirmed",
    date: "09/3/2023",
  },
  {
    property: "Jelly Apartments",
    aptNumber: "225",
    tenant: "Amanda John",
    amount: "$1,400.00",
    status: "Payment confirmed",
    date: "10/2/2023",
  },
  {
    property: "Trent Apartments",
    aptNumber: "225",
    tenant: "Tom Corie",
    amount: "$2,000.00",
    status: "Payment confirmed",
    date: "11/3/2023",
  },
  {
    property: "Lift Apartments",
    aptNumber: "225",
    tenant: "Arie Carol",
    amount: "$1,500.00",
    status: "Payment confirmed",
    date: "12/3/2023",
  },
];

const TenantPayment = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [selectedSort, setSelectedSort] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortPayments = (type: string) => {
    const sortedPayments = [...payments];
  
    switch (type) {
      case "alphabetical":
        sortedPayments.sort((a, b) => a.tenant.localeCompare(b.tenant));
        break;
      case "name":
        sortedPayments.sort((a, b) => a.tenant.localeCompare(b.tenant));
        break;
      case "property":
        sortedPayments.sort((a, b) => a.property.localeCompare(b.property));
        break;
      case "newest":
        sortedPayments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        sortedPayments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "highestAmount":
        sortedPayments.sort((a, b) => 
          parseFloat(b.amount.replace(/[$,]/g, "")) - parseFloat(a.amount.replace(/[$,]/g, ""))
        );
        break;
      case "lowestAmount":
        sortedPayments.sort((a, b) => 
          parseFloat(a.amount.replace(/[$,]/g, "")) - parseFloat(b.amount.replace(/[$,]/g, ""))
        );
        break;
      default:
        return;
    }
  
    setSelectedSort(type);
    setPayments(sortedPayments);
    setDropdownOpen(false);
  };
  

  return (
    <div className={`${montserratAlternates.className} min-h-screen flex flex-col items-center bg-[#FAF9F6] p-6 sm:p-10`}>
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-8">
        <div className="w-full sm:w-auto flex justify-start">
          <Link href="/payment-overview" className="flex items-center text-gray-600 border border-gray-400 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-gray-100 transition">⬅ Back to Home</Link>
        </div>

        <div className="w-full sm:w-auto flex justify-end">
          <h1 className="text-xl sm:text-2xl font-semibold text-right">Tenant’s Payment <span className="text-gray-500 text-lg sm:text-xl">— August 21, 2023</span></h1>
        </div>

        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-700 border border-gray-400 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-gray-100 transition">
            Sort <ChevronDown className="ml-2 w-4 h-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-1 mt-10 w-56 bg-[#FAF8F0] border rounded-md shadow-lg z-10 p-2">
              <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" checked={selectedSort === "alphabetical"} onChange={() => sortPayments("alphabetical")} className="mr-2" /> Alphabetical Order
              </label>
              <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" checked={selectedSort === "name"} onChange={() => sortPayments("name")} className="mr-2" /> By Name
              </label>
              <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" checked={selectedSort === "property"} onChange={() => sortPayments("property")} className="mr-2" /> By Property Name
              </label>
              <label className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" checked={selectedSort === "newest"} onChange={() => sortPayments("newest")} className="mr-2" /> Newest to Oldest
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-6">
        {payments.map((payment, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center sm:justify-between bg-[#FAF8F0] p-6 rounded-2xl shadow-md border border-gray-400 gap-4 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <FileText className="w-10 h-10 sm:w-14 sm:h-14 text-blue-500" />
              <div>
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-900">{payment.property}</h2>
                <p className="text-base sm:text-lg text-gray-700">Apt# {payment.aptNumber}</p>
                <p className="text-base sm:text-lg text-gray-700">{payment.tenant}</p>
                <p className="text-blue-600 text-sm sm:text-lg font-medium">{payment.status}</p>
              </div>
            </div>
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

export default TenantPayment;
