// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo dan Label */}
        <div className="flex flex-col items-start pt-5">
          <Image
            src="/assets/Icon/Main/CU_Icon.png"
            alt="MyApp Logo"
            width={182}
            height={202}
          />
        </div>

        {/* Sitemaps */}
        <div>
          <h3 className="font-semibold mb-4">Sitemaps</h3>
          <ul className="space-y-2 text-gray-400 text-light">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            {/* <li><a href="/unit" className="hover:underline">The Unit</a></li> */}
            {/* <li><a href="/promo" className="hover:underline">Promo</a></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="mb-2 text-gray-400">Jl. Pembangunan Bar. No.25, RT.4/RW.10, Bintaro, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12330</p>
          <p className="text-gray-400 mb-3">0857-8385-0510</p>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6285783850510"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md transition"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs mb-3 md:mb-0">&copy; 2025 Click Usaha Official Website.</p>
          <div className="flex space-x-4 text-lg">
            <a href="https://www.facebook.com/share/1Dr9YfR6oK" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/p/DKKCg-jBGKR" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/6285783850510" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@clickusaha"  target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
