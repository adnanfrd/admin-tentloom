import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import montserratAlternates from "@/components/fonts";

const FirstAdmin = () => {
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
          1st Admin<span className="text-gray-500">— August 21, 2023</span>
        </h1>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          {
            name: "Jelly Apartments LLC",
            owner: "Jim Neal",
            properties: 2,
            subscription: "$100.00",
            link: "/apartments",
          },
          {
            name: "Lift Apartments LLC",
            owner: "Derrick Meels",
            properties: 1,
            subscription: "$800.00",
            link: "/apartments/lift",
          },
          {
            name: "City Apartments LLC",
            owner: "Jerry Jones",
            properties: 1,
            subscription: "$100.00",
            link: "/apartments/city",
          },
        ].map((apt, index) => (
          <div
            key={index}
            className="bg-[#FAF8F0] p-8 rounded-2xl shadow-lg border border-gray-300 min-h-[220px] flex flex-col justify-between"
          >
            <Link href={apt.link} className="bg-blue-400 text-center rounded-2xl text-white px-4 py-2 text-xl font-bold ">
              {apt.name}
            </Link>

            <p className="text-lg mt-4 flex justify-between">
              <strong>Owner:</strong> {apt.owner}
            </p>
            <p className="text-lg flex justify-between">
              <strong>Properties:</strong> {apt.properties}
            </p>
            <p className="text-lg flex justify-between">
              <strong>Contact Info:</strong> (Not provided)
            </p>
            <p className="text-lg flex justify-between">
              <strong>Monthly Subscription:</strong>{" "}
              <span className="text-green-600 font-bold">{apt.subscription}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mt-10">
        <button className="w-full bg-blue-500 text-white px-8 py-4 rounded-xl text-xl shadow-md hover:bg-blue-600 transition">
          Compliance
        </button>
        <Link href="/support/escalated-disputes/permissions">
          <button className="w-full bg-blue-500 text-white px-8 py-4 rounded-xl text-xl shadow-md hover:bg-blue-600 transition">
            System Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FirstAdmin;
