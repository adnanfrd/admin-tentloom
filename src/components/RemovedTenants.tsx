"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import montserratAlternates from "./fonts";

const RemovedTenants = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className={`${montserratAlternates.className} min-h-[88vh] bg-[#FAF9F6] flex flex-col items-center px-4 py-6`}>      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex items-center justify-between px-6 md:px-12 "
      >
        <Link
          href="/dashboard"
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition-all duration-300"
        >
          ← Back to home
        </Link>
        <h1 className="text-lg md:text-xl font-semibold text-center">
          Removed <span className="font-bold">Tenants</span>{" "}
          <span className="text-gray-500">— {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</span>
        </h1>
      </motion.div>
      
      <div className="mt-20 w-full max-w-2xl">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#faf8f0] w-full rounded-xl shadow-xl p-8 border border-gray-200 transform hover:scale-[1.03] transition-all duration-300"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex justify-center"
          >
            <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Removed Tenants
            </span>
          </motion.div>

          <div className="mt-6 text-gray-800 text-base space-y-3">
            {[
              { label: "Owner", value: "Derrie Meez" },
              { label: "Tenant", value: "David Jackson" },
              { label: "Apt", value: "Lift Apartment LLC" },
              { label: "Apt #", value: "125" },
              { label: "Address", value: "508 Queens Way Arkam City, NY 90456" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-between text-lg"
              >
                <span className="font-semibold">{item.label}:</span>
                <span className="text-green-600">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RemovedTenants;