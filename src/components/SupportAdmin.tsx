"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import montserratAlternates from "./fonts"; // Import font from your global font component

const SupportAdmin: FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(date);
  }, []);

  const supportItems = [
    { name: "Resolve Escalated Disputes", link: "/support/escalated-disputes" },
    { name: "View Flagged Communications System-Wide", link: "/support/flagged-communications" },
  ];

  return (
    <div className={`${montserratAlternates.className} p-6 min-h-[80vh] bg-[#FAF9F6] flex flex-col`}>
      
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        {/* Back to Home Button */}
        <Link href="/dashboard">
          <button className="border cursor-pointer border-gray-300 text-gray-700 flex items-center gap-2 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
        </Link>

        {/* Title with Date */}
        <h1 className="text-lg font-semibold text-gray-800">
          Support <span className="text-gray-500">— {currentDate}</span>
        </h1>
      </div>

      {/* Support Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="bg-cream border border-gray-300 rounded-xl shadow-lg p-8 flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Link href={item.link}>
              <button className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-full text-base font-medium shadow-md hover:bg-blue-600 transition">
                {item.name}
              </button>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SupportAdmin;
