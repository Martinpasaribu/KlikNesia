"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Product } from "@/models/product";


const categories = ["All", "Portofolio", "Tools", "UI/UX", "Aplication","e-commerce","Education","Blog","Lain"];

export default function PortfolioGallery() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [data, setData] = useState<Product[]>([]); // ← benar
    const testProduct = async () => {
      
      try {
        const respone = await axios.get('https://portofolio-server-tau.vercel.app/product');
        console.log(respone);

        const sortedData = respone.data.sort((a: Product, b: Product) => {
          return new Date(b.waktu).getTime() - new Date(a.waktu).getTime();
        });

        setData(sortedData);

  
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error ) {
        
      }
    }
    useEffect (() => {
      testProduct();
    },[])
    
  const filtered = selectedCategory === "All"
    ? data
    : data.filter((item) => item.kategoriid === selectedCategory);

  return (
    <section className="w-full px-6 py-[5rem] bg-white">
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-8 ">

        <div className="flex-center hidden">
          <p className="text-sm font-medium text-blue-500 bg-blue-100 inline-block px-3 py-1 rounded-full mb-4 w-[5rem] ">
            Work
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-6">
          Our Work <span className="text-blue-600">Portfolio</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm px-4 py-2 rounded-full ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-5">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="min-w-[350px] flex-shrink-0  overflow-hidden  hover:shadow-lg transition-shadow duration-300 p-2 gap-2 rounded-lg"
            >
              <div className="relative w-full h-[250px] overflow-hidden rounded-2xl shadow">
                <Image
                  src={item.gambar}
                  alt={item.judul}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-4 text-left">
                <h3 className="font-bold text-md text-blue-600">{item.judul}</h3>
                <p className="text-sm text-gray-600">{item.kategoriid} – {item.framework}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
