import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-4 my-8">
      <button
        className={`rounded-full border-2 border-gray-300 px-4 py-2 ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-100"
        }`}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <IoIosArrowBack />
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={`rounded-full border-2 border-gray-300 px-4 py-2 ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-100"
        }`}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
