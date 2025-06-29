"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Filter from "../../components/filter";
import HeroSection from "../../components/hero";
import NavbarHome from "../../components/navbarhome";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import data from "./data.json";

type Card = {
  name: string;
  image: string;
  rating: string;
  type: string;
};

export default function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [filteredCards, setFilteredCards] = useState<Card[]>(data.cards);
  
  // Di komponen Home
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let result = [...data.cards];

    // Filter berdasarkan pencarian
    if (searchQuery) {
      result = result.filter(
        (card) =>
          card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter berdasarkan kategori
    if (selectedCategories.length > 0) {
      result = result.filter((card) => selectedCategories.includes(card.type));
    }

    setFilteredCards(result);
  }, [searchQuery, selectedCategories]);

  return (
    <>
      <NavbarHome />
      <HeroSection />
      <div
        id="cards-view"
        className="py-10 bg-gradient-to-tl from-[#c31432] to-[#240b36]"
      >
        <motion.h2
          className="text-4xl font-bold pt-7 text-white text-center mb-10 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          OUR GALLERY
        </motion.h2>

        <motion.div className="flex w-full justify-center gap-2 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        >
            <Filter
              show={showFilter}
              setShow={setShowFilter}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              setSearchQuery={setSearchQuery}
              setSortOption={setSortOption}
            />
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredCards.map((member, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-64 h-96 relative bg-white shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-2/3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FF0000] text-white py-1 px-3 text-sm font-bold rounded">
                    {member.rating}
                  </div>
                </div>
                <div className="h-1/2 bg-white p-4">
                  <div className="text-lg font-bold">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.type}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </>
  );
}
