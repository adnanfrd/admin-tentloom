import Link from "next/link";
import montserratAlternates from "@/components/fonts";
import { ArrowLeft } from "lucide-react";

const Apartments = () => {
  return (
    <div className={`${montserratAlternates.className} min-h-[88vh] bg-[#FAF9F6] flex flex-col items-center p-6`}>
       {/* Header Section */}
             <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-6">
              
              {/* Back Button */}
              <Link href="/dashboard">
                <button className="flex cursor-pointer items-center gap-2 text-gray-600 border rounded-full px-3 py-1 text-base hover:bg-gray-100 transition">
                  <ArrowLeft size={20} /> Back
                </button>
              </Link>
      
              {/* Title */}
              <h1 className="text-xl sm:text-2xl font-medium text-center mt-4 sm:mt-0">
                Jelly Apartments LLC<span className="text-gray-500">— August 21, 2023</span>
              </h1>
      
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl mt-2">
        <div className="bg-[#FAF8F0] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[250px] flex flex-col">
          <Link
            href="/apartments/subapartments"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium self-start hover:bg-blue-600 transition"
          >
            Butter Apartments
          </Link>
          <p className="text-xl mt-5 flex justify-between">
            <strong>Tenants:</strong> 10
          </p>
          <p className="text-xl flex justify-between">
            <strong>Tenants Paid:</strong> 7
          </p>
          <p className="text-xl flex justify-between">
            <strong>Tenants Unpaid:</strong> 3
          </p>
          <p className="text-xl flex justify-between">
            <strong>Monthly Amount:</strong>{" "}
            <span className="text-green-600 font-bold">$800.00</span>
          </p>
        </div>

        <div className="bg-[#FAF8F0] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[250px] flex flex-col">
          <Link
            href="#"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium self-start hover:bg-blue-600 transition"
          >
            Cheese Apartments
          </Link>
          <p className="text-xl mt-5 flex justify-between">
            <strong>Tenants:</strong> 14
          </p>
          <p className="text-xl flex justify-between">
            <strong>Tenants Paid:</strong> 7
          </p>
          <p className="text-xl flex justify-between">
            <strong>Tenants Unpaid:</strong> 0
          </p>
          <p className="text-xl flex justify-between">
            <strong>Monthly Amount:</strong>{" "}
            <span className="text-green-600 font-bold">$500.00</span>
          </p>
        </div>

        <div className="bg-[#FAF8F0] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[150px] flex items-center justify-center">
          <Link
            href="#"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium hover:bg-blue-600 transition"
          >
            Disputes
          </Link>
        </div>

        <div className="bg-[#FAF8F0] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[150px] flex items-center justify-center">
          <Link
            href="#"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium hover:bg-blue-600 transition"
          >
            Platform Analytics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
