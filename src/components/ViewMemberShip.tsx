"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaSort, FaArrowLeft } from "react-icons/fa";
import montserratAlternates from "./fonts";
import { sortBy } from "lodash";
import Link from "next/link";

const memberships = [
  {
    owner: "Andrew Johns",
    property: "Andrew Johns Apt",
    properties: 2,
    monthlyPayment: "$800",
    units: 5,
    date: "2023-08-21",
  },
  {
    owner: "Mitchel Smith",
    property: "Mitchel Smith Apt",
    properties: 1,
    monthlyPayment: "$1200",
    units: 3,
    date: "2023-08-22",
  },
  {
    owner: "Robert Avery",
    property: "Robert Avery Apt",
    properties: 3,
    monthlyPayment: "$1000",
    units: 5,
    date: "2023-08-20",
  },
  {
    owner: "Daniel Wilson",
    property: "Daniel Wilson Apt",
    properties: 3,
    monthlyPayment: "$900",
    units: 5,
    date: "2023-08-19",
  },
];

export default function MembershipPage() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [chargeOption, setChargeOption] = useState("Monthly Charge");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortedMemberships = sortBy(memberships, [(item) => {
    if (sortOption === "name") return item.owner;
    if (sortOption === "property") return item.property;
    if (sortOption === "newest") return -new Date(item.date);
    return item;
  }]);

  const filteredMemberships = sortedMemberships.filter((membership) =>
    membership.owner.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`${montserratAlternates.className} p-6 max-w-[100%] mx-auto bg-[#FAF9F6]`}>
      <div className="flex justify-between items-center mb-4">
       <Link href="/dashboard">
       <button className="flex items-center cursor-pointer border py-1 px-3 rounded-3xl gap-2 text-gray-600 hover:text-gray-900">
          <FaArrowLeft /> Back
        </button>
       </Link>
        <h1 className="text-lg font-semibold">View Memberships — August 21, 2023</h1>
        <div className="flex items-center gap-2 relative">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-64 shadow-sm focus:outline-none"
            />
          </div>
          <button
            className="border p-2 rounded-lg shadow-sm flex items-center gap-2"
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            <FaSort /> Sort
          </button>
          {isSortOpen && (
            <motion.div
              className="absolute right-0 mt-2 bg-white border shadow-lg p-4 rounded-lg w-48"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="alphabetical"
                  onChange={() => setSortOption("name")}
                />
                Alphabetical order
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="byName"
                  onChange={() => setSortOption("name")}
                />
                By name
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="byProperty"
                  onChange={() => setSortOption("property")}
                />
                By property name
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="newest"
                  onChange={() => setSortOption("newest")}
                />
                From new to old
              </label>
              <button
                className="w-full bg-blue-500 text-white p-2 rounded-lg mt-2 hover:bg-blue-600"
                onClick={() => setIsSortOpen(false)}
              >
                Apply
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FAF9F6]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredMemberships.map((membership, index) => (
          <motion.div
            key={index}
            className="border-2 border-blue-300 rounded-lg p-4 shadow-md bg-[#FAF9F6]"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className=" text-gray-900">Owner of the property: {membership.owner}</h2>
            <p className="text-gray-900">Name of the property: {membership.property}</p>
            <p className="text-gray-900"># of properties: {membership.properties}</p>
            <p className="text-gray-900">Monthly payment: {membership.monthlyPayment}</p>
            <p className="text-gray-900"># of units: {membership.units}</p>
            
            <label className="block mt-2 text-gray-700 font-medium">Charge Option</label>
            <select
              className="border p-2 rounded-lg w-full"
              value={chargeOption}
              onChange={(e) => setChargeOption(e.target.value)}
            >
              <option>Monthly Charge</option>
              <option>Annual Charge</option>
            </select>

            <label className="block mt-2 text-gray-700 font-medium">Change payment amount</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="border p-2 rounded-lg w-full"
            />

            <button className="w-full bg-blue-500 text-white p-2 rounded-lg mt-2 hover:bg-blue-600">Save</button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}