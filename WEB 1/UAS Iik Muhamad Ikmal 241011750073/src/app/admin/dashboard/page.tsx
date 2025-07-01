"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import AdminNavbar from "@/components/navbarAdmin";
import Pagination from "@/components/pagination";
import Footer from "@/components/footer";
import { Product } from "@/components/types";
import CreateModal from "@/components/modals/create";
import EditModal from "@/components/modals/edit";
import DeleteModal from "@/components/modals/delete";
import toast, { Toaster } from 'react-hot-toast';

const initialProducts: Product[] = [
  {
    id: 1,
    image: "/images/okt.jpg",
    description:
      "Orangutan conservation\nComing soon 19 May 2025\nForest in Kalimantan - Indonesia",
    price: 2400000,
    stock: 100,
  },
  {
    id: 2,
    image: "/images/mrk.jpg",
    description:
      "Merak Perfrom\nComing soon 08 July 2025\nTMII in Jakarta - Indonesia",
    price: 1100000,
    stock: 100,
  },
  {
    id: 3,
    image: "/images/lomb.jpg",
    description:
      "Enjoy The Beauty of Nature\nComing soon 20 September 2025\nButon Land in Sulawesi - Indonesia",
    price: 750000,
    stock: 100,
  },
  {
    id: 4,
    image: "/images/hkt.jpg",
    description:
      "Nature Conservation\nComing soon 15 December 2025\nMajalengka in JABAR - Indonesia",
    price: 550000,
    stock: 100,
  },
];

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const addNewProduct = (newProductData: Omit<Product, "id">) => {
    setProducts([
      ...products,
      { ...newProductData, id: Math.max(...products.map((p) => p.id)) + 1 },
    ]);
    toast.success('Data has been added', { 
      // icon: '✅',
      style: {
        background: '#4CAF50',
        color: '#fff',
      },
      position: 'top-center'
    });
  };

  const handleSaveEdit = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setIsEditModalOpen(false);
    toast('Data has been updated', { 
      // icon: 'ℹ️',
      style: {
        background: '#2196F3',
        color: '#fff',
      },
      position: 'top-center'
    });
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.id !== productToDelete.id)
      );
      setIsModalOpen(false);
      toast.error('Data has been deleted', { 
        // icon: '❌',
        style: {
          background: '#F44336',
          color: '#fff',
        },
        position: 'top-center'
      });
    }
  };

  // Handle Create
  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  // Handle Edit
  const handleEditClick = (product: Product) => {
    setProductToEdit(product);
    setIsEditModalOpen(true);
  };

  // Handle Delete
  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <Toaster />
      <AdminNavbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-2xl sm:text-3xl font-semibold text-gray-700 underline">
            Hello Admin
          </div>
          <div className="mb-8 flex flex-wrap sm:flex-nowrap items-center gap-2">
            <input
              type="text"
              className="w-full sm:w-96 p-2 border rounded-md hover:border-cyan-500 hover:drop-shadow-lg"
              placeholder="Type any products here"
            />
            <button
              type="button"
              className="w-full sm:w-auto p-2 text-xl font-semibold rounded-md bg-gray-300 hover:bg-gray-500 text-black hover:ring-2 hover:ring-blue-500 hover:drop-shadow-lg"
              onClick={handleCreateClick}
            >
              Create
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="text-left bg-gray-300">
                  <th className="p-3">IMAGE</th>
                  <th className="p-3">DESCRIPTION</th>
                  <th className="p-3 hidden sm:table-cell">STOCK</th>
                  <th className="p-3 hidden sm:table-cell">PRICE</th>
                  <th className="p-3">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product: Product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-3">
                      <div className="h-16 w-16 sm:h-24 sm:w-24 relative">
                        <Image
                          src={product.image}
                          alt="Product"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </td>
                    <td className="p-3 whitespace-pre-line">
                      {product.description}
                    </td>
                    <td className="p-3 text-xl hidden sm:table-cell">
                      {product.stock}
                    </td>
                    <td className="p-3 text-xl font-semibold hidden sm:table-cell">
                      IDR {product.price ? product.price.toLocaleString() : "0"}
                    </td>
                    <td className="p-3 flex flex-col items-center justify-center space-y-2 sm:items-start mt-4">
                      <button
                        className="flex items-center font-semibold text-black hover:text-[#00B4DB]"
                        onClick={() => handleEditClick(product)}
                      >
                        <AiFillEdit className="mr-1" />
                        <span>Edit</span>
                      </button>
                      <button
                        className="flex items-center font-semibold text-black hover:text-[#e52d27]"
                        onClick={() => handleDeleteClick(product)}
                      >
                        <AiFillDelete className="mr-1" />
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={addNewProduct}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        product={productToEdit}
        onSave={handleSaveEdit}
      />

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
      <Footer />
    </>
  );
}