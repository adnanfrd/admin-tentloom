"use client";

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import montserratAlternates from "../components/fonts"; // Import Montserrat Alternates font

const paymentMethods = [
  { title: "Banking Method", imgSrc: "/bankingmethod.png", link: "/addpaymentbank" },
  { title: "CashApp", imgSrc: "/cashapp.png" },
  { title: "PayPal", imgSrc: "/paypal.png" },
  { title: "Venmo", imgSrc: "/venmo.png" },
  { title: "Zelle", imgSrc: "/zelle.jpeg" },
  { title: "ApplePay", imgSrc: "/applepay.png" },
];

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <div className={`${montserratAlternates.className} min-h-[80vh] bg-[#FCFBF7] px-6 py-10 flex flex-col items-center`}>
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex items-center justify-between px-4 md:px-0">
          <Link 
            href="/system-settings"
            className="flex items-center gap-2 text-gray-600 hover:text-black border border-gray-300 px-4 py-2 rounded-full transition"
          >
            <FaArrowLeft /> Back to settings
          </Link>
          <h1 className="text-lg md:text-xl font-semibold text-center">
            Payment Method{" "}
            <span className="text-gray-500">
              — {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </h1>
        </div>

        {/* Payment Methods Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              onClick={() => setSelectedMethod(method.title)}
              className={`flex items-center p-5 bg-white shadow-md rounded-xl cursor-pointer transition-all ${
                selectedMethod === method.title ? "ring-2 ring-blue-500" : "hover:shadow-lg"
              }`}
            >
              <div className="w-16 h-16 relative">
                <Image src={method.imgSrc} alt={method.title} layout="fill" />
              </div>
              <span className="ml-6 text-lg font-medium text-gray-800">{method.title}</span>

              {method.link && (
                <Link href={method.link} className="ml-auto text-blue-600 hover:underline">
                  Proceed
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
