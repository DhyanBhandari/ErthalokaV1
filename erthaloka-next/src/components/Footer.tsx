'use client';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20 text-center">
      <p>&copy; {new Date().getFullYear()} ErthaLoka</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-accent-green hover:scale-110 transition-transform"><FaFacebook /></a>
        <a href="#" className="hover:text-accent-blue hover:scale-110 transition-transform"><FaTwitter /></a>
        <a href="#" className="hover:text-accent-purple hover:scale-110 transition-transform"><FaInstagram /></a>
      </div>
    </footer>
  );
}
