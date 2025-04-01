"use client";

import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import montserratAlternates from "../components/fonts"; // Import Montserrat Alternates font

const ChangeUsername: React.FC = () => {
  return (
    <div className={`${montserratAlternates.className} flex flex-col items-center justify-center min-h-[88vh] bg-[#FAF9F6] p-6`}>
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full flex items-center justify-between px-4 md:px-0">
          <Link 
            href="/system-settings"
            className="flex items-center gap-2 text-gray-600 hover:text-black border border-gray-300 px-4 py-2 rounded-full transition"
          >
            <FaArrowLeft /> Back to settings
          </Link>
          <h1 className="text-lg md:text-xl font-semibold">
            Settings{" "}
            <span className="text-gray-500">
              — {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </h1>
        </div>

        {/* Centered Form Container */}
        <div className="w-full flex flex-col items-center justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg shadow-md hover:bg-blue-600 transition"
          >
            Change username
          </motion.button>

          {/* Username Input Section */}
          <motion.div
            className="bg-[#FAF8F0] border border-blue-500 rounded-lg p-6 mt-6 w-full max-w-md shadow-lg "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-2">Your current username is:</p>
            <p className="text-gray-900 font-semibold">@example</p>

            <label htmlFor="username" className="block text-gray-700 mt-4">
              New Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="@Username3434"
              className="w-full mt-2 p-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-full text-lg mt-6 shadow-md hover:bg-blue-600 transition"
            >
              Save
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChangeUsername;
