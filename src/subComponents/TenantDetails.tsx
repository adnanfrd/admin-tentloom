import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import montserratAlternates from "@/components/fonts";

const TenantDetails = () => {
  return (
    <div className={`${montserratAlternates.className} min-h-[88vh] flex flex-col items-center justify-center bg-[#FAF9F6] px-6 py-10`}>
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
                Butter Apartments<span className="text-gray-500">— August 21, 2023</span>
              </h1>
      
            </div>

      <div className="bg-[#FAF8F0] p-12 rounded-2xl shadow-lg border border-gray-300 w-full max-w-2xl">
        <div className="flex justify-center mb-4">
          <span className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow">
            Contact Details
          </span>
        </div>

        <div className="space-y-4 text-lg">
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Name:</span>
            <span className="text-green-700">Drew Casey</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Account Number:</span>
            <span className="text-green-700">fvb5214</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Apt #:</span>
            <span className="text-green-700">20</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Status:</span>
            <span className="text-green-700 font-semibold">Active Tenant</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Contact:</span>
            <span className="text-green-700 underline">323-705-6551</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TenantDetails;
