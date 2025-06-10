'use client';
import { motion } from 'framer-motion';

export default function GetInvolved() {
  return (
    <section id="involved" className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8 text-accent-green"
      >
        Get Involved
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl mb-8"
      >
        Become part of <strong className="text-accent-purple">ErthaLoka</strong> and help shape a better future.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="#" className="rounded-full bg-green-600 hover:scale-105 transition-transform px-6 py-3 text-white font-semibold">Request Deck</a>
        <a href="#" className="rounded-full bg-blue-600 hover:scale-105 transition-transform px-6 py-3 text-white font-semibold">Become a Partner</a>
        <a href="#" className="rounded-full bg-purple-600 hover:scale-105 transition-transform px-6 py-3 text-white font-semibold">Join Our DAO</a>
      </motion.div>
    </section>
  );
}
