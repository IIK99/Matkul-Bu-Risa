import { create } from "zustand";
import { persist } from "zustand/middleware";

type Transaction = {
  name: string;
  quantity: number;
  category: string;
};

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  editTransaction: (index: number, updated: Transaction) => void;
  removeTransaction: (index: number) => void;
  clearTransactions: () => void;
};


export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({
      transactions: [],
      addTransaction: (tx) =>
        set((state) => ({
          transactions: [...state.transactions, tx],
        })),
        editTransaction: (index: number, updated: Transaction) =>
  set((state) => {
    const newTx = [...state.transactions];
    newTx[index] = updated;
    return { transactions: newTx };
  }),
      removeTransaction: (index) =>
        set((state) => ({
          transactions: state.transactions.filter((_, i) => i !== index),
        })),
      clearTransactions: () => set({ transactions: [] }),
    }),
    {
      name: "transaction-storage", // key untuk localStorage
    }
  )
);