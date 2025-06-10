'use client';
const FacebookIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
  </svg>
);

const TwitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.25 4.25 0 001.88-2.34 8.41 8.41 0 01-2.69 1.03A4.21 4.21 0 0015.5 4a4.21 4.21 0 00-4.2 4.2c0 .33.04.65.11.96A11.94 11.94 0 013 5.11a4.21 4.21 0 001.3 5.61 4.2 4.2 0 01-1.9-.52v.05a4.21 4.21 0 003.37 4.12 4.26 4.26 0 01-1.89.07 4.22 4.22 0 003.94 2.93A8.47 8.47 0 012 19.54 11.94 11.94 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.34 8.34 0 0022.46 6z" />
  </svg>
);

const InstagramIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20 text-center">
      <p>&copy; {new Date().getFullYear()} ErthaLoka</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-accent-green hover:scale-110 transition-transform">{FacebookIcon}</a>
        <a href="#" className="hover:text-accent-blue hover:scale-110 transition-transform">{TwitterIcon}</a>
        <a href="#" className="hover:text-accent-purple hover:scale-110 transition-transform">{InstagramIcon}</a>
      </div>
    </footer>
  );
}
