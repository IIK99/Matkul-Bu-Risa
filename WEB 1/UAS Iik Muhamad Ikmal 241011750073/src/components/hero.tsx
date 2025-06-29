"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1470&q=80",
    title: "Perpustakaan Digital",
    description:
      "Akses ribuan buku di ujung jari Anda. Belajar kapan saja, di mana saja.",
    buttonText: "Mulai Sekarang",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1470&q=80",
    title: "Dunia Ada di Dalam Buku",
    description:
      "Bacalah setiap hari. Pengetahuan adalah kunci menuju masa depan yang cerah.",
    buttonText: "Kunjungi Koleksi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1470&q=80",
    title: "Ayo ke Perpustakaan!",
    description:
      "Temukan inspirasi, ilmu, dan petualangan dalam setiap lembar buku.",
    buttonText: "Lihat Buku Populer",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <audio autoPlay loop hidden>
              <source src="/audios/hm.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 z-10 text-white">
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              className="text-md md:text-xl max-w-lg mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[index].description}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="#cards-view"
                className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              >
                {slides[index].buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
