"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

interface FilterSidebarProps {
  show: boolean;
  setShow: (show: boolean) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  setSearchQuery: (query: string) => void;
  setSortOption: (option: string) => void;
}

export default function Filter({
  show,
  setShow,
  setSearchQuery,
  selectedCategories,
  setSelectedCategories,
}: FilterSidebarProps) {
  return (
    <>
      <div
        className={`absolute top-16 lg:static inset-y-0 left-0 lg:translate-x-0 transform ${
          show ? "translate-x-0" : "-translate-x-full lg:translate-x-0 "
        } flex-col lg:flex w-64 lg:w-[270px] h-[85vh] lg:h-[500px] border-2 border-gray-200 bg-white rounded-md z-20 transition-transform duration-500 ease-in-out overflow-y-auto`}
      >
        <div className="flex items-center justify-between bg-blue-400 px-4 py-2 rounded-t-md sticky top-0 z-10">
          <h2 className="font-extrabold text-2xl tracking-wide">Filter</h2>
          <IoCloseOutline
            className="lg:hidden w-10 h-10 cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="px-4 py-2 mt-3 flex flex-col gap-2">
          <span className="font-medium text-lg">Search</span>
          <div className="h-12 w-full bg-gradient-primary rounded-lg border border-gray-200 hover:border-gray-800 p-[1px]">
            <form className="h-full w-full bg-white rounded-lg flex justify-between items-center">
              <div className="w-[95%] px-3">
                <input
                  type="text"
                  placeholder="Find by title"
                  className="w-full text-base focus:outline-none focus:ring-0"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="h-full w-[20%] bg-blue-400 flex justify-center bg-gradient-primary rounded-e-lg">
                <button
                  type="submit"
                  className="h-full w-9 flex justify-center items-center p-[1px]"
                >
                  <FiSearch className="h-6 w-6 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* category */}
        <hr className="my-2" />
        <div className="px-4 py-2 flex flex-col gap-2">
          <span className="font-medium text-lg">Categories</span>
          <ul className="space-y-2">
            {[
              "Psikologi/Filsafat",
              "Fiqih",
              "Up Skill",
              "Self Improvement",
            ].map((cat, i) => (
              <li key={i} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-0"
                  checked={selectedCategories.includes(cat)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories([...selectedCategories, cat]);
                    } else {
                      setSelectedCategories(
                        selectedCategories.filter((c) => c !== cat)
                      );
                    }
                  }}
                />
                <label className="text-sm capitalize">{cat}</label>
              </li>
            ))}
          </ul>
        </div>
        <hr className="h-[1.2px] bg-gray-300 my-3" />

        {/* sort */}
        <div className="px-4 py-2 flex flex-col gap-2 mb-7">
          <label htmlFor="sort" className="font-medium text-lg">
            Sort
          </label>
          <select className="bg-white border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2">
            <option value="">Random</option>
            <option value="ASCENDING">Date Lates</option>
            <option value="DISCENDING">date Lowes</option>
            <option value="HIGHEST">Highest Priced</option>
            <option value="LOWEST">Lowest Priced</option>
          </select>
        </div>
      </div>
      <FiSearch
        className={`h-10 w-20 p-2 rounded-sm mt-48 absolute left-0 text-white bg-sky-600 lg:hidden ${
          show ? "hidden" : ""
        } `}
        onClick={() => setShow(true)}
      />
    </>
  );
}
