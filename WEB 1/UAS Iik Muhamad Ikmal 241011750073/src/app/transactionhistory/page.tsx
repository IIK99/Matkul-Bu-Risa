"use client";

import { useState } from "react";
import { useTransactionStore } from "@/store/transaction-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { toast } from "sonner";

export default function TransaksiPage() {
  const { addTransaction } = useTransactionStore();

  const [form, setForm] = useState({
    name: "",
    quantity: 1,
    category: "Peminjaman",
  });
  const [errors, setErrors] = useState({
    name: false,
    quantity: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameEmpty = form.name.trim() === "";
    const quantityInvalid = form.quantity <= 0;

    if (nameEmpty || quantityInvalid) {
      setErrors({ name: nameEmpty, quantity: quantityInvalid });
      toast.error("Harap isi semua field dengan benar.");
      return;
    }

    addTransaction(form);
    toast.success("Transaksi berhasil disimpan!");
    setForm({ name: "", quantity: 1, category: "Peminjaman" });
    setErrors({ name: false, quantity: false });
  };

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen p-4 sm:p-6 md:p-10 bg-gray-100"
        style={{
          backgroundImage: "url('/images/gb.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto w-full max-w-xl bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Form Transaksi Buku
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Nama Transaksi */}
            <div className="flex flex-col">
              <Label htmlFor="name" className="mb-1">
                Nama Transaksi
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Contoh: Peminjaman Buku Filsafat Islam"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className={errors.name ? "border-red-500" : ""}
              />
            </div>

            {/* Jumlah */}
            <div className="flex flex-col">
              <Label htmlFor="quantity" className="mb-1">
                Jumlah
              </Label>
              <Input
                id="quantity"
                type="number"
                value={form.quantity}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    quantity: Number(e.target.value),
                  }))
                }
                className={errors.quantity ? "border-red-500" : ""}
              />
            </div>

            {/* Kategori */}
            <div className="flex flex-col">
              <Label htmlFor="category" className="mb-1">
                Kategori
              </Label>
              <Select
                value={form.category}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Peminjaman">Peminjaman</SelectItem>
                  <SelectItem value="Pengembalian">Pengembalian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tombol Simpan */}
            <Button type="submit" className="w-full mt-2">
              Simpan Transaksi
            </Button>

            {/* Navigasi ke Daftar Transaksi */}
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
              <p className="text-gray-600 text-sm mb-2">
                Lihat transaksi yang sudah tersimpan?
              </p>
              <Link href="/transaction/register" passHref>
                <Button variant="outline" className="text-sm w-full sm:w-auto">
                  ➤ Buka Daftar Transaksi
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
