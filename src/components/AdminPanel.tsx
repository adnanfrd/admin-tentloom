import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import montserratAlternates from "./fonts";

const admins = [
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
];

const AdminPanel = () => {
  return (
    <div className={`${montserratAlternates.className} min-h-[88vh] bg-[#FAF9F6] flex flex-col items-center p-6`}>
      
      {/* Header Section */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-6">
        
        {/* Back Button */}
        <Link href="/dashboard">
          <button className="flex cursor-pointer items-center gap-2 text-gray-600 border rounded-full px-5 py-1 text-base hover:bg-gray-100 transition">
            <ArrowLeft size={20} /> Back
          </button>
        </Link>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-semibold text-center mt-4 sm:mt-0">
          Admin Panel <span className="text-gray-500">— August 21, 2023</span>
        </h1>

      </div>

      {/* Admin Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {admins.map((admin, index) => (
          <Link href={admin.link} key={index}>
            <div className="bg-[#FAF8F0] p-6 sm:p-8 rounded-xl shadow-md border border-gray-300 flex justify-center items-center cursor-pointer hover:shadow-lg transition">
              <button className="bg-blue-500 text-white px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg shadow hover:bg-blue-600">
                Admin {index + 1}
              </button>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default AdminPanel;
