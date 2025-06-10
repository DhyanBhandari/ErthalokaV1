'use client';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaGlobe, FaSeedling } from 'react-icons/fa';

const items = [
  { icon: <FaLeaf className="text-accent-green" />, text: 'ErthaKriya – Demonstration Farms, etc.' },
  { icon: <FaUsers className="text-accent-blue" />, text: 'ErthaVani – Awareness drives and events' },
  { icon: <FaGlobe className="text-accent-purple" />, text: 'Erthagrama – Rural development initiatives' },
  { icon: <FaSeedling className="text-accent-yellow" />, text: 'ErthaCANnect – Ecosystem connections' },
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
