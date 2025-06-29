"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/components/types";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (product: Omit<Product, "id">) => void;
}

const CreateModal = ({ isOpen, onClose, onCreate }: CreateModalProps) => {
  const [newProduct, setNewProduct] = useState({
    image: "",
    description: "",
    stock: 0,
    price: 0,
  });

  useEffect(() => {
    if (isOpen) {
        setNewProduct({
            image: "",
            description: "",
            stock: 0,
            price: 0,
        });
    }
  }, [isOpen]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setNewProduct(prev => ({
          ...prev,
          image: loadEvent.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProduct.image && newProduct.description && newProduct.stock && newProduct.price) {
      onCreate(newProduct);
      onClose();
    //   reset form fields
      setNewProduct({
        image: "",
        description: "",
        stock: 0,
        price: 0,
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-2xl mx-4 my-8 overflow-y-auto" style={{ maxHeight: "90vh" }}>
        <h3 className="text-lg leading-6 font-medium underline text-gray-900 mb-4">Create Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="new-image" className="block mb-2">Product Image:</label>
            <input
              type="file"
              id="new-image"
              onChange={handleImageChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="new-description" className="block mb-2">Description:</label>
            <textarea
              id="new-description"
              className="w-full p-2 border rounded-md"
              value={newProduct.description}
              onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="new-stock" className="block mb-2">Stock:</label>
            <input
              type="number"
              id="new-stock"
              className="w-full p-2 border rounded-md"
              value={newProduct.stock}
              onChange={(e) => setNewProduct(prev => ({ ...prev, stock: Number(e.target.value) }))}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="new-price" className="block mb-2">Price:</label>
            <input
              type="number"
              id="new-price"
              className="w-full p-2 border rounded-md"
              value={newProduct.price}
              onChange={(e) => setNewProduct(prev => ({ ...prev, price: Number(e.target.value) }))}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-700"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;