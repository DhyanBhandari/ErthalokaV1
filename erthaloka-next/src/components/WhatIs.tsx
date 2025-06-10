'use client';
import { motion } from 'framer-motion';
const LeafIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-accent-green"
  >
    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.503 2.503 0 0112 11.5z" />
  </svg>
);

const UsersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-accent-blue"
  >
    <path d="M16 14c2.21 0 4 1.79 4 4v2h-2v-2c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2H4v-2c0-2.21 1.79-4 4-4h8zm-4-2a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

const GlobeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-accent-purple"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M12 4a8 8 0 100 16V4z" />
  </svg>
);

const SeedlingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-accent-yellow"
  >
    <path d="M12 2a7 7 0 00-7 7v2h2V9a5 5 0 015-5h2V2h-2zM7 13v5a2 2 0 002 2h6v-2H9v-5H7z" />
    <path d="M17 13h-2v7h2v-7z" />
  </svg>
);

const items = [
  { icon: LeafIcon, text: 'ErthaKriya – Demonstration Farms, etc.' },
  { icon: UsersIcon, text: 'ErthaVani – Awareness drives and events' },
  { icon: GlobeIcon, text: 'Erthagrama – Rural development initiatives' },
  { icon: SeedlingIcon, text: 'ErthaCANnect – Ecosystem connections' },
];

export default function WhatIs() {
  return (
    <section id="what" className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8 text-accent-green text-center"
      >
        What is ErthaLoka?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-gray-200 mb-8 text-center"
      >
        A holistic platform connecting interconnected habitats for sustainability.
      </motion.p>
      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md"
          >
            {item.icon}
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
