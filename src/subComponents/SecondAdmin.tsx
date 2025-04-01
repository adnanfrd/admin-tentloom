import Link from "next/link";
import montserratAlternates from "@/components/fonts";
import { ArrowLeft } from "lucide-react";

const AdminData = [
  {
    name: "Jelly Apartments LLC",
    owner: "Jim Neal",
    properties: 2,
    subscription: "$100.00",
  },
  {
    name: "Lift Apartments LLC",
    owner: "Derrick Meels",
    properties: 1,
    subscription: "$800.00",
  },
  {
    name: "City Apartments LLC",
    owner: "Jerry Jones",
    properties: 1,
    subscription: "$100.00",
  },
];

const SecondAdmin = () => {
  return (
  <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] flex flex-col items-center p-6`}>
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
                2d Admin<span className="text-gray-500">— August 21, 2023</span>
              </h1>
      
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {AdminData.map((apt, index) => (
          <div
            key={index}
            className="bg-[#FCF8E3] p-8 rounded-2xl shadow-lg border border-gray-300 min-h-[200px] flex flex-col justify-between"
          >
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
              {apt.name}
            </span>
            <p className="text-lg mt-4 flex justify-between">
              <strong>Owner:</strong>{" "}
              <span className="text-green-600">{apt.owner}</span>
            </p>
            <p className="text-lg flex justify-between">
              <strong>Properties:</strong> {apt.properties}
            </p>
            <p className="text-lg flex items-center gap-1 justify-between">
              <strong>Contact Info:</strong> 📄
            </p>
            <p className="text-lg flex justify-between">
              <strong>Monthly Subscription:</strong>{" "}
              <span className="text-green-600">{apt.subscription}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
        {["Create Or Remove Properties", "Compliance", "System Settings"].map(
          (btn, index) => (
            <button
              key={index}
              className="w-full bg-blue-400 text-white px-6 py-4 rounded-2xl text-lg shadow-md hover:bg-blue-500 transition"
            >
              {btn}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SecondAdmin;
