"use client";

import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import montserratAlternates from "./fonts"; // Import Montserrat Alternates font

const SystemSettings: React.FC = () => {
  return (
    <div className={`${montserratAlternates.className} flex flex-col items-center min-h-[88vh] bg-[#FAF9F6] p-6`}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl flex items-center justify-between px-4 md:px-0"
      >
        <Link 
          href="/dashboard"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-full transition"
        >
          <FaArrowLeft /> Back
        </Link>
        <h1 className="text-lg md:text-xl font-semibold text-center">
          System Settings{" "}
          <span className="text-gray-500">
            — {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </h1>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        className="flex flex-col items-center justify-center gap-4 mt-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[ 
          { href: "/payment-method", label: "Change payment method" },
          { href: "/change-username", label: "Change username" },
          { href: "/change-password", label: "Change password" },
        ].map((item, index) => (
          <Link key={index} href={item.href} className="w-full flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[250px] md:w-[300px] bg-blue-500 text-white cursor-pointer py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition"
            >
              {item.label}
            </motion.button>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default SystemSettings;
