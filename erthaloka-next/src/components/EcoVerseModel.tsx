'use client';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaRecycle, FaHeart } from 'react-icons/fa';

const cards = [
  {
    title: 'People',
    color: 'text-accent-green',
    icon: <FaHandsHelping className="text-6xl" />,
    text: 'Empowering communities with knowledge and resources.',
  },
  {
    title: 'Planet',
    color: 'text-accent-blue',
    icon: <FaRecycle className="text-6xl" />,
    text: 'Sustainable practices to regenerate our environment.',
  },
  {
    title: 'Purpose',
    color: 'text-accent-purple',
    icon: <FaHeart className="text-6xl" />,
    text: 'Aligning efforts towards a shared regenerative future.',
  },
];

export default function EcoVerseModel() {
  return (
    <section id="model" className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-accent-blue text-center"
      >
        People. Planet. Purpose.
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 flex flex-col items-center text-center"
          >
            <div className={card.color}>{card.icon}</div>
            <h3 className="text-2xl font-bold mt-4 mb-2">{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
