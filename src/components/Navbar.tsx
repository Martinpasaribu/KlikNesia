"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
import { RootState } from "@/store";
import { useState } from "react";
import { X, Menu } from "lucide-react"; // ikon dari lucide (pastikan di-install)

export default function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-opacity-50 dark:bg-[rgb(16_24_32)] text-white p-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            <Image
              src="/assets/Icon/Main/CU_Icon.png"
              alt="MyApp Logo"
              width={112}
              height={132}
            />
            <h1 className="hidden">MyApp</h1>
          </Link>

          <div className="flex gap-4 items-center dark:text-white text-slate-800 text-lg font-semibold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/partner">Partner with us</Link>
            <Link href="/contact">Contact</Link>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="bg-white text-black dark:bg-gray-700 dark:text-white px-2 py-1 rounded"
            >
              {mode === "dark" ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-opacity-50 dark:bg-[rgb(16_24_32)] text-white p-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            <Image
              src="/assets/Icon/IconMain.png"
              alt="MyApp Logo"
              width={48}
              height={48}
            />
          </Link>

          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[rgb(16_24_32)] text-white z-50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-600">
            <span className="font-bold text-xl">Menu</span>
            <button onClick={toggleMenu}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4 font-semibold">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/blog" onClick={toggleMenu}>Blog</Link>
            <Link href="/partner" onClick={toggleMenu}>Partner with us</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            <button
              onClick={() => {
                dispatch(toggleTheme());
                toggleMenu();
              }}
              className="bg-white text-black dark:bg-gray-700 dark:text-white px-2 py-1 rounded"
            >
              {mode === "dark" ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
