"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
import { RootState } from "@/store";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import ContactModal from "@/components/Global/contact"; // ✅ Import komponen global

export default function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // ✅ modal state

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="hidden md:block fixed top-0 left-0 w-full z-50 p-4">
        <div className="flex justify-center items-center max-w-8xl mx-auto relative">

          <Link href="/" className="font-bold text-lg absolute top-0 left-0">
            <Image
              src="/assets/Icon/Main/CU_Icon.png"
              alt="MyApp Logo"
              width={100}
              height={112}
            />
          </Link>

          <div className="flex gap-4 items-center dark:text-white text-slate-600 text-md font-semibold backdrop-blur bg-white/30 dark:bg-[rgb(16_24_32)/0.3] p-3 px-10 rounded-xl">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            {/* <Link href="/blog">Blog</Link> */}
            {/* <Link href="/partner">Partner with us</Link> */}
            <button onClick={() => setIsContactOpen(true)}>CONTACT</button> {/* ✅ */}


          </div>

          <div className="absolute right-0 top-0">
            <div
              onClick={() => dispatch(toggleTheme())}
              className="w-15 h-8 flex items-center bg-black/10 dark:bg-[rgb(16_24_32)/0.3]  dark:bg-gray-700 rounded-md p-1 cursor-pointer transition-colors"
            >
              <div className="text-sm px-1">{mode === "dark" ? "🌞" : "🌙"}</div>
              {/* <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ml-auto
                  ${mode === "dark" ? "translate-x-4" : "translate-x-0"}`}
              /> */}
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-[999]  bg-white/30 dark:bg-[rgb(16_24_32)/0.3] text-white p-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            <Image
              src="/assets/Icon/Main/CU_Icon.png"
              alt="MyApp Logo"
              width={48}
              height={48}
            />
          </Link>

          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>

        {/* Drawer Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[rgb(16_24_32)] text-white z-[999] transition-transform duration-300 ${
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
            <button
              onClick={() => {
                setIsContactOpen(true); // ✅ buka modal
                toggleMenu();
              }}
            >
              Contact
            </button>
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

      {/* Spacer */}
      <div className="h-[80px] md:h-[100px]" />

      {/* ✅ Reusable Contact Modal */}
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
