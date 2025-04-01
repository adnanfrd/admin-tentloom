"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";
import montserratAlternates from "./fonts";
import Link from "next/link";

const NewProperty: React.FC = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className={`${montserratAlternates.className} min-h-[88vh] flex flex-col items-center justify-start bg-[#FAF9F6] p-6`}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex items-center justify-between px-6 md:px-12"
      >
        <Link
          href="/dashboard"
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition-all duration-300"
        >
          ← Back to home
        </Link>
        <h1 className="text-lg md:text-xl font-semibold text-center">
          <span className="font-bold">New Property</span>{" "}
          <span className="text-gray-500">
            — {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </h1>
      </motion.div>

      {/* Card Section */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#FAF8F0] border border-gray-200 rounded-lg shadow-lg p-10 w-full max-w-2xl transform hover:scale-[1.05] transition-all duration-300 mt-8"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <span className="bg-[#709BFF] text-white px-5 py-2 rounded-full text-sm font-medium">
            New Property
          </span>
        </motion.div>

        {/* Property Details */}
        <div className="space-y-5 text-gray-700 text-lg">
          {[
            { label: "Owner", value: "John Neal" },
            { label: "Apt", value: "Jelly Apartment LLC" },
            { label: "Address", value: "508 Queens Way Arkam City, NY 90456" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-between"
            >
              <span className="font-semibold">{item.label}:</span>
              <span className="text-green-600 text-right">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NewProperty;
