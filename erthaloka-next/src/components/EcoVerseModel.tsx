'use client';
import { motion } from 'framer-motion';
const HandsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-14 h-14"
  >
    <path d="M12 12c-2.21 0-4-1.79-4-4V4h2v4c0 1.1.9 2 2 2s2-.9 2-2V4h2v4c0 2.21-1.79 4-4 4z" />
    <path d="M6 12v4c0 3.31 2.69 6 6 6s6-2.69 6-6v-4h-2v4c0 2.21-1.79 4-4 4s-4-1.79-4-4v-4H6z" />
  </svg>
);

const RecycleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-14 h-14"
  >
    <path d="M12 4l1.41 1.41L10.83 8H13v2H8V5h2v2.17l2.59-2.58zM8 12l-1.41-1.41L11.17 6H9V4h5v5h-2V6.83l-4.59 4.58zm8 0l1.41 1.41L12.83 18H15v2h-5v-5h2v2.17l4.59-4.58z" />
  </svg>
);

const HeartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-14 h-14"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const cards = [
  {
    title: 'People',
    color: 'text-accent-green',
    icon: HandsIcon,
    text: 'Empowering communities with knowledge and resources.',
  },
  {
    title: 'Planet',
    color: 'text-accent-blue',
    icon: RecycleIcon,
    text: 'Sustainable practices to regenerate our environment.',
  },
  {
    title: 'Purpose',
    color: 'text-accent-purple',
    icon: HeartIcon,
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
