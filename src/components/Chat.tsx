import Link from "next/link";
import { Search } from "lucide-react";
import montserratAlternates from "./fonts";

const Chat = () => {
  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] flex flex-col p-6`}>
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto mb-4">
        <Link
          href="/dashboard"
          className="flex items-center text-gray-600 border rounded-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          ⬅ Back
        </Link>
        <h1 className="text-xl font-semibold text-center">
          Chat <span className="text-gray-500">— August 21, 2023</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl mx-auto">
        <div className="w-full lg:w-1/3 space-y-4">
          {[
            { name: "Trent Apartments", user: "Drew Neal", message: "Cool!" },
            { name: "Jelly Apartments", user: "Trent Carie", message: "Hey!" },
            { name: "Lift Apartments", user: "Kelly Casie", message: "Okay!" },
          ].map((chat, index) => (
            <div
              key={index}
              className="bg-cream p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                {chat.name}
              </span>
              <p className="text-sm mt-2">
                <strong>{chat.user}:</strong> {chat.message}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 bg-cream p-4 rounded-lg border border-blue-300 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="font-semibold">Trent Carie</span>
            </div>
            <Search className="w-5 h-5 text-gray-500" />
          </div>

          <div className="mt-2 text-sm">
            <p>
              <strong>Apt#:</strong> <span className="text-gray-600">225</span>
            </p>
            <p>
              <strong>Property Name:</strong>{" "}
              <span className="text-gray-600">Trent Apartments</span>
            </p>
          </div>

          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm mt-4 hover:bg-blue-600">
            View whole description
          </button>

          <div className="mt-4 space-y-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                  Lorem ipsum dolor sit • 5:50PM
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
