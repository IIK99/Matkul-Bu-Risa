"use client";

import { AiFillDelete } from "react-icons/ai";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({ isOpen, onClose, onConfirm }: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm mx-auto">
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <AiFillDelete className="h-6 w-6 text-red-800" />
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Product</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">Are you sure you want to delete this product?</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-24 mr-2 hover:bg-red-700"
              onClick={onConfirm}
            >
              Delete
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 text-base font-medium rounded-md w-24 hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;