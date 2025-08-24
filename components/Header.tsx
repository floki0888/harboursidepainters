import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Harbourside Painters Logo" width={40} height={40} />
            <span className="text-primary font-semibold text-xl">Harbourside Painters</span>
          </a>
        </Link>
        <button
          className="md:hidden focus:outline-none text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {/* Simple hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav
          className={`$${'{'}open ? 'block' : 'hidden'${'}'} absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-6 mt-2 md:mt-0 border-t md:border-none`}
        >
          <Link href="/">
            <a className="block px-4 py-2 text-primary hover:text-secondary">Home</a>
          </Link>
          <Link href="/painting">
            <a className="block px-4 py-2 text-primary hover:text-secondary">Painting</a>
          </Link>
          <Link href="/remedial">
            <a className="block px-4 py-2 text-primary hover:text-secondary">Remedial</a>
          </Link>
          <Link href="/washing">
            <a className="block px-4 py-2 text-primary hover:text-secondary">Washing</a>
          </Link>
          <Link href="/rope-access">
            <a className="block px-4 py-2 text-primary hover:text-secondary">Rope Access</a>
          </Link>
          <Link href="/contact">
            <a className="block px-4 py-2 text-primary hover:text-secondary">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;