'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl space-y-6 bg-black bg-opacity-60 backdrop-blur-sm p-6 rounded-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-white"
        >
          ErthaLoka A Tech-Powered SustainABLE ECOverse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          A regenerative ecosystem for People, Planet & Purpose — driven by communities and enabled by technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#model"
            className="rounded-full bg-green-600 hover:scale-105 transition-transform px-6 py-3 text-white font-semibold"
          >
            Explore our Ecosystem
          </a>
          <a
            href="#involved"
            className="rounded-full bg-blue-600 hover:scale-105 transition-transform px-6 py-3 text-white font-semibold"
          >
            Join the Movement
          </a>
        </motion.div>
      </div>
    </section>
  );
}
