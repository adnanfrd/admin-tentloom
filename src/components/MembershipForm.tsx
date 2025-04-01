'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import montserratAlternates from './fonts';
import { Printer, Upload, FileText } from 'lucide-react';

const paymentOptions = [
  { value: 'banking', label: 'Banking Method', imgSrc: '/bankingmethod.png' },
  { value: 'cashapp', label: 'Cash App', imgSrc: '/cashapp.png' },
  { value: 'paypal', label: 'PayPal', imgSrc: '/paypal.png' },
  { value: 'zelle', label: 'Zelle', imgSrc: '/zelle.jpeg' },
  { value: 'applepay', label: 'Apple Pay', imgSrc: '/applepay.png' },
];

const MembershipForm: FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [signature, setSignature] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(date);
  }, []);

  return (
    <div className={`${montserratAlternates.className} p-8 min-h-screen bg-[#FAF9F6] flex flex-col items-center font-inter`}>
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-8 gap-4">
        <Link
          href="/dashboard"
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
        >
          ← Back to home
        </Link>

        <h1 className="text-lg md:text-xl font-semibold text-gray-800 flex flex-col md:flex-row items-center gap-2">
          Super Admin <span className="text-gray-500">— {currentDate}</span>
        </h1>

        <Link
          href="/payment-overview"
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
        >
          Payment overview
        </Link>
      </div>

      <div className="w-full max-w-lg bg-[#faf8f0] border border-gray-300 rounded-xl shadow-lg p-8">
        {['Owner name', 'Property name', 'Tenants amount', 'Transaction fee', 'Total amount'].map((label, index) => (
          <div key={index} className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input
              type="text"
              placeholder={label}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        ))}

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Charge Option</label>
          <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            <option value="">Select charge option</option>
            <option value="annual">Annual Charge</option>
            <option value="monthly">Monthly Charge</option>
          </select>
        </div>

        <div className="mb-5 relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Their payment method</label>
          <div
            className="w-full p-3 border rounded-lg bg-[#FAF8F0] cursor-pointer flex items-center justify-between"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex items-center gap-2">
              <Image src={selectedPayment.imgSrc} alt={selectedPayment.label} width={24} height={24} />
              <span>{selectedPayment.label}</span>
            </div>
            <span className="text-gray-500">▼</span>
          </div>

          {dropdownOpen && (
            <ul className="absolute w-full bg-[#FAF9F6] border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
              {paymentOptions.map((option) => (
                <li
                  key={option.value}
                  className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedPayment(option);
                    setDropdownOpen(false);
                  }}
                >
                  <Image src={option.imgSrc} alt={option.label} width={24} height={24} />
                  <span>{option.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-5 relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">Signature</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Signature"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        
        {/* Reset Button */}
      
          <button
            onClick={() => setSignature("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <div className='border py-1 px-2 rounded-lg cursor-pointer'>
            reset
            </div>
          </button>
    
      </div>
    </div>
      </div>

      <div className="mt-8 w-full max-w-lg space-y-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-md transition">
          <Printer className="w-5 h-5" /> Print
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-md transition">
          <Upload className="w-5 h-5" /> Upload documents
        </button>

        <Link href="/membership-subscription/generate-lease" className="w-full">
          <button className="w-full flex mb-4 items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-md transition">
            <FileText className="w-5 h-5" /> Generate lease
          </button>
        </Link>

        <button className="w-full flex  items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-md transition">
          <FileText className="w-5 h-5" /> Generate activation number
        </button>
      </div>
    </div>
  );
};

export default MembershipForm;
