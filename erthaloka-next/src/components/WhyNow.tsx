'use client';
import { motion } from 'framer-motion';

const reasons = [
  'Climate change accelerating',
  'Growing social inequity',
  'Need for sustainable technology',
  'Global collaboration required',
];

export default function WhyNow() {
  return (
    <section id="why" className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-accent-green text-center"
      >
        Why Now?
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <ul className="space-y-4 text-lg md:text-xl">
            {reasons.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="list-disc list-inside"
              >
                {r}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="h-40 w-40 bg-gray-700 rounded-lg" />
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 font-bold text-accent-yellow"
      >
        ErthaLoka responds with a working model that is scalable, self-sustaining, and inclusive.
      </motion.p>
    </section>
  );
}
