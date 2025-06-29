"use client";

import { useTransactionStore } from "@/store/transaction-store";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import clsx from "clsx";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 5;

type Transaction = {
  name: string;
  quantity: number;
  category: string;
};

export default function DaftarTransaksiPage() {
  const {
    transactions,
    removeTransaction,
    clearTransactions,
    editTransaction,
  } = useTransactionStore();

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Transaction>({
    name: "",
    quantity: 0,
    category: "Peminjaman",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Semua");
  const [sortField, setSortField] = useState<"name" | "quantity" | "category">(
    "name"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState<number | null>(
    null
  );
  const [confirmEditOpen, setConfirmEditOpen] = useState(false);
  const [confirmDeleteAllOpen, setConfirmDeleteAllOpen] = useState(false);

  const filteredTransactions = transactions
    .filter(
      (tx) =>
        tx.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (categoryFilter === "Semua" || tx.category === categoryFilter)
    )
    .sort((a, b) => {
      if (sortField === "name") return a.name.localeCompare(b.name);
      if (sortField === "quantity") return b.quantity - a.quantity;
      return a.category.localeCompare(b.category);
    });

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto w-full max-w-7xl bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-xl shadow space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">Daftar Semua Transaksi</h1>

          {/* Filter */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            <Input
              type="text"
              placeholder="Cari transaksi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-1/3"
            />
            <Select
              value={categoryFilter}
              onValueChange={(val) => setCategoryFilter(val)}
            >
              <SelectTrigger className="w-full lg:w-60">
                <SelectValue placeholder="Filter kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Semua">Semua</SelectItem>
                <SelectItem value="Peminjaman">Peminjaman</SelectItem>
                <SelectItem value="Pengembalian">Pengembalian</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={sortField}
              onValueChange={(val) =>
                setSortField(val as "name" | "quantity" | "category")
              }
            >
              <SelectTrigger className="w-full lg:w-60">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nama</SelectItem>
                <SelectItem value="quantity">Jumlah</SelectItem>
                <SelectItem value="category">Kategori</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          {paginatedTransactions.length === 0 ? (
            <p className="text-gray-500">Tidak ada transaksi.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">No</th>
                    <th className="p-3 border">Nama</th>
                    <th className="p-3 border">Jumlah</th>
                    <th className="p-3 border">Kategori</th>
                    <th className="p-3 border text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransactions.map((tx, idx) => {
                    const absoluteIndex = (currentPage - 1) * ITEMS_PER_PAGE + idx;
                    return (
                      <tr key={idx} className="border-t">
                        <td className="p-3 border">{absoluteIndex + 1}</td>
                        <td className="p-3 border break-words max-w-xs">{tx.name}</td>
                        <td className="p-3 border text-center">{tx.quantity}</td>
                        <td className="p-3 border text-center">
                          <span
                            className={clsx(
                              "px-2 py-1 rounded-full text-xs font-semibold",
                              tx.category === "Pengembalian"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            )}
                          >
                            {tx.category}
                          </span>
                        </td>
                        <td className="p-3 border text-center space-x-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              setEditingIndex(absoluteIndex);
                              setEditForm(tx);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => setConfirmDeleteIndex(absoluteIndex)}
                          >
                            Hapus
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setConfirmDeleteAllOpen(true)}
                  disabled={transactions.length === 0}
                  className="w-full md:w-auto"
                >
                  Hapus Semua
                </Button>

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      size="sm"
                      variant={page === currentPage ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Edit Form */}
          {editingIndex !== null && (
            <div className="mt-8 p-4 border rounded bg-gray-50 space-y-4">
              <h2 className="font-semibold text-lg">Edit Transaksi</h2>
              <Input
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                placeholder="Nama Transaksi"
                required
              />
              <Input
                type="number"
                value={editForm.quantity}
                min={1}
                onChange={(e) => setEditForm({ ...editForm, quantity: +e.target.value })}
                placeholder="Jumlah"
                required
              />
              <Select
                value={editForm.category}
                onValueChange={(val) => setEditForm({ ...editForm, category: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Peminjaman">Peminjaman</SelectItem>
                  <SelectItem value="Pengembalian">Pengembalian</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="w-full sm:w-auto" onClick={() => setConfirmEditOpen(true)}>
                  Simpan Perubahan
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => setEditingIndex(null)}
                >
                  Batal
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal: Konfirmasi Hapus Satu */}
      <Dialog open={confirmDeleteIndex !== null} onOpenChange={() => setConfirmDeleteIndex(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yakin ingin menghapus transaksi ini?</DialogTitle>
            <DialogDescription>Tindakan ini tidak dapat dibatalkan.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDeleteIndex(null)}>
              Batal
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (confirmDeleteIndex !== null) {
                  removeTransaction(confirmDeleteIndex);
                  toast.success("Transaksi dihapus!");
                  setConfirmDeleteIndex(null);
                }
              }}
            >
              Ya, Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Konfirmasi Edit */}
      <Dialog open={confirmEditOpen} onOpenChange={setConfirmEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yakin ingin menyimpan perubahan?</DialogTitle>
            <DialogDescription>Perubahan akan langsung diterapkan.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmEditOpen(false)}>
              Batal
            </Button>
            <Button
              onClick={() => {
                if (editingIndex !== null) {
                  editTransaction(editingIndex, editForm);
                  toast.success("Transaksi berhasil diperbarui!");
                  setEditingIndex(null);
                  setConfirmEditOpen(false);
                }
              }}
            >
              Ya, Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Konfirmasi Hapus Semua */}
      <Dialog open={confirmDeleteAllOpen} onOpenChange={setConfirmDeleteAllOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yakin ingin menghapus semua transaksi?</DialogTitle>
            <DialogDescription>
              Tindakan ini akan menghapus seluruh data transaksi.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDeleteAllOpen(false)}>
              Batal
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                clearTransactions();
                toast.success("Semua transaksi telah dihapus.");
                setConfirmDeleteAllOpen(false);
              }}
            >
              Ya, Hapus Semua
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}