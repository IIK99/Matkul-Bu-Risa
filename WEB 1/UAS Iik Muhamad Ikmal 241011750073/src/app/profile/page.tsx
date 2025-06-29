"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Iik Muhammad Ikmal",
    role: "Developer & UI Designer",
    image: "/images/m.jpg",
    email: "iik@example.com",
    instagram: "https://instagram.com",
  },
];

export default function ProfilPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-green-100 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-center text-purple-700"
          >
            Tentang Aplikasi Perpustakaan Digital
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            Aplikasi ini dibuat untuk membantu pengelolaan transaksi perpustakaan secara digital. Dengan fitur peminjaman dan pengembalian buku, pengguna dapat mencatat dan melacak aktivitas mereka secara efisien. Antarmuka yang sederhana dan intuitif dirancang agar mudah digunakan oleh siswa, guru, maupun pustakawan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6"
          >
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
              <li>📚 Fitur pencatatan peminjaman dan pengembalian buku</li>
              <li>📊 Visualisasi transaksi dan statistik kunjungan</li>
              <li>🔍 Filter dan pencarian data transaksi</li>
              <li>📝 Formulir pengisian transaksi dengan validasi</li>
              <li>💾 Penyimpanan lokal dan support pengembangan backend</li>
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 text-gray-700"
          >
            Dengan adanya aplikasi ini, diharapkan pengelolaan perpustakaan menjadi lebih rapi, cepat, dan terdokumentasi dengan baik.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10"
          >
            <h2 className="text-xl font-bold mb-4 text-purple-700">Tim Pengembang</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-purple-50 p-4 rounded-lg shadow"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover mb-3"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="flex gap-4 mt-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-700 hover:text-purple-600"
                    >
                      <FaEnvelope size={18} />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-pink-500"
                    >
                      <FaInstagram size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}