import Link from "next/link";
import montserratAlternates from "./fonts";

const PaymentOverview = () => {
  return (
    <div
      className={`${montserratAlternates.className} min-h-[88vh] flex flex-col items-center bg-[#FAF9F6] p-6 sm:p-10`}
    >
      {/* Header Section */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6">
        {/* Back Button - Aligned to Start */}
        <Link
          href="/dashboard"
          className="flex items-center text-gray-600 border border-gray-400 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-gray-100 transition w-full sm:w-auto justify-center"
        >
          ⬅ Back to home
        </Link>

        {/* Title - Centered on All Screens */}
        <h1 className="text-lg sm:text-xl font-semibold text-center w-full sm:w-auto">
          Super Admin{" "}
          <span className="text-gray-500 text-base">— August 21, 2023</span>
        </h1>

        {/* Payment Overview Button - Aligned to End */}
        <Link href="/payment-overview">
          <button className="border border-gray-400 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-gray-100 transition w-full sm:w-auto">
            Payment Overview
          </button>
        </Link>
      </div>

      {/* Payment Buttons */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-md">
        <Link href="/payment-overview/property-payments">
          <button className="w-full bg-blue-500 text-white cursor-pointer px-8 py-4 sm:py-6 rounded-lg text-base sm:text-lg shadow-md hover:bg-blue-600 transition">
            Property's Payments
          </button>
        </Link>

        <Link href="/payment-overview/tenants-payments">
          <button className="w-full bg-blue-500 text-white cursor-pointer px-8 py-4 sm:py-6 rounded-lg text-base sm:text-lg shadow-md hover:bg-blue-600 transition">
            Tenant's Payments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentOverview;
