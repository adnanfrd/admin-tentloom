"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import montserratAlternates from "./fonts";
import { gsap } from "gsap";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className={`${montserratAlternates.className} flex items-center justify-center min-h-[88vh] bg-[#FAF9F6] px-4`}>
      <motion.div
        ref={containerRef}
        className="bg-[#FAF8F0] p-6 sm:p-10 border border-gray-300 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-black text-lg sm:text-xl font-semibold">Admin Username</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-base sm:text-lg"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-lg sm:text-xl font-semibold">Admin Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-base sm:text-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-4 text-white cursor-pointer bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 text-lg sm:text-xl"
          >
            Log In →
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Login;
