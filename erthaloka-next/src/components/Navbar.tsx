'use client';
import { motion } from 'framer-motion';

const links = [
  { href: '#what', label: 'What is ErthaLoka?' },
  { href: '#model', label: 'EcoVerse Model' },
  { href: '#why', label: 'Why Now?' },
  { href: '#involved', label: 'Get Involved' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="text-3xl font-extrabold text-white">ErthaLoka</a>
        <div className="space-x-4 hidden sm:block">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-accent-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="sm:hidden">
          {/* mobile nav could be added later */}
        </div>
      </div>
    </motion.nav>
  );
}
