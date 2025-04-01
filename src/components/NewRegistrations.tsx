"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import montserratAlternates from "./fonts";
import gsap from "gsap";

const NewRegistrations = () => {
  const registrations = [
    {
      owner: "Jim Neal",
      tenant: "Terry Casie",
      apt: "Jelly Apartment LLC",
      aptNumber: "225",
      address: "508 Queens Way Akran City, NY 90456",
    },
    {
      owner: "Jim Neal",
      tenant: "Terry Casie",
      apt: "Jelly Apartment LLC",
      aptNumber: "225",
      address: "508 Queens Way Akran City, NY 90456",
    },
  ];

  const containerRef = useRef(null);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    const updateTime = () => {
      const date = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setCurrentDate(date);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${montserratAlternates.className} p-6 bg-[#FAF9F6] min-h-[88vh] flex flex-col items-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col md:flex-row justify-between items-center mb-6 px-4 md:px-12 text-center md:text-left"
      >
        <Link
          href="/dashboard"
          className="px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-all duration-300"
        >
          ⬅ Back to home
        </Link>
        <h2 className="text-lg md:text-xl font-semibold">
          New Registrations{" "}
          <span className="text-gray-500">— {currentDate}</span>
        </h2>
      </motion.div>

      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl"
      >
        {registrations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#FAF8F0] shadow-xl p-6 rounded-xl border w-full transform hover:scale-[1.03] transition-all duration-300"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#6c92f4] text-white rounded-lg mb-4 w-full text-sm transition-all duration-300"
            >
              New Registration
            </motion.button>

            <div className="text-sm space-y-2">
              <p className="flex justify-between">
                <strong>Owner:</strong>{" "}
                <span className="text-[#6c9254]">{item.owner}</span>
              </p>
              <p className="flex justify-between">
                <strong>Tenant:</strong>{" "}
                <span className="text-[#6c9254]">{item.tenant}</span>
              </p>
              <p className="flex justify-between">
                <strong>Apt:</strong>{" "}
                <span className="text-[#6c9254]">{item.apt}</span>
              </p>
              <p className="flex justify-between">
                <strong>Apt #:</strong>{" "}
                <span className="text-[#6c9254]">{item.aptNumber}</span>
              </p>
              <p className="flex justify-between">
                <strong>Address:</strong>{" "}
                <span className="text-[#6c9254]">{item.address}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewRegistrations;
