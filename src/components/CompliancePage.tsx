'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import montserratAlternates from './fonts';

const CompliancePage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={`${montserratAlternates.className} min-h-[88vh] bg-[#FAF9F6] px-4 sm:px-6 py-6 flex flex-col items-center`}>
      {/* Header Section */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <h1 className="text-lg sm:text-xl font-semibold">
          Compliance <span className="text-gray-500">— {currentDate}</span>
        </h1>
      </div>

      {/* Compliance Card */}
      <div className="mt-6 bg-cream rounded-lg shadow-md p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <div className="flex justify-center">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm">Compliance</span>
        </div>
        <div className="mt-4 text-gray-800 space-y-3">
          <p className="flex justify-between"><strong>Regulation:</strong> <span className="text-green-600">Fair Housing Act Compliance</span></p>
          <p className="flex justify-between"><strong>Details:</strong> <span className="text-green-600">Ensure all rental agreements.</span></p>
          <p className="flex justify-between"><strong>Status:</strong> <span className="text-green-600">Up to Date</span></p>
          <p className="flex justify-between"><strong>Last Updated:</strong> <span className="text-green-600">August 10, 2023</span></p>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
