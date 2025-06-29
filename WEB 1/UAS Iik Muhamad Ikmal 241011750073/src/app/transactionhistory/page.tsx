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
        className="min-h-screen bg-gray-100 p-6"
        style={{
          backgroundImage: "url('/images/gb.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Form Transaksi Buku</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nama Transaksi</Label>
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

            <div>
              <Label htmlFor="quantity">Jumlah</Label>
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

            <div>
              <Label>Kategori</Label>
              <Select
                value={form.category}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Peminjaman">Peminjaman</SelectItem>
                  <SelectItem value="Pengembalian">Pengembalian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full mt-2">
              Simpan Transaksi
            </Button>

            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
              <p className="text-gray-600 text-sm mb-2">
                Lihat transaksi yang sudah tersimpan?
              </p>
              <Link href="/transaction/register" passHref>
                <Button variant="outline" className="text-sm">
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
