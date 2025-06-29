"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/components/types";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onSave: (product: Product) => void;
}

const EditModal = ({ isOpen, onClose, product, onSave }: EditModalProps) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setEditedProduct(prev => prev ? { 
          ...prev, 
          image: loadEvent.target?.result as string 
        } : null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProduct(prev => {
      if (!prev) return null;
      
      let newValue: string | number | null = value;
      if (name === "price" || name === "stock") {
        newValue = value === "" ? null : Number(value);
      }
      
      return { ...prev, [name]: newValue };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedProduct) {
      onSave(editedProduct);
      onClose();
    }
  };

  if (!isOpen || !editedProduct) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-2xl mx-4 my-8 overflow-y-auto" style={{ maxHeight: "90vh" }}>
        <h3 className="text-lg leading-6 font-medium underline text-gray-900 mb-4">Edit Product</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="image-upload" className="block mb-2">Product Image:</label>
          <input
            type="file"
            id="image-upload"
            onChange={handleImageChange}
          />
          
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">Description:</label>
            <textarea
              id="description"
              name="description"
              className="w-full p-2 border rounded-md"
              value={editedProduct.description}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="stock" className="block mb-2">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                className="w-full p-2 border rounded-md"
                value={editedProduct.stock ?? ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full p-2 border rounded-md"
                value={editedProduct.price ?? ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;