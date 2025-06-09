'use client'

import { useState, useRef } from 'react'
import { ArrowRight, ChevronsRight } from 'lucide-react'

export default function AboutPage() {


  return (
    <div>

      <section className="relative min-h-screen bg-home2 bg-cover bg-center text-white">

        <div className=" min-h-screen flex flex-col items-center justify-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Us</h2>
          <p className="text-center text-gray-300 mb-10">Design is thinking made visual.</p>
        </div>

      </section>

      <section className="relative min-h-screen  text-white px-16 py-4">

        <div className=" min-h-screen flex flex-col px-6">

          <h3 className='text-gray-300 flex gap-2 p-5 mb-10'>Home <span>  <ChevronsRight className="w-6 h-6 text-slate-800" /> </span>About us</h3>

          <div className='flex flex-col gap-4 justify-start items-start'>

            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Us</h2>
            <p className="text-center text-gray-300 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates cupiditate labore quae ipsam illum eveniet dolorem veritatis, necessitatibus neque magnam a delectus accusantium beatae omnis! Omnis, ea. Recusandae, libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, eius repellat? Ad repellat, praesentium sapiente consequuntur perspiciatis voluptas totam, voluptatem ab explicabo facere obcaecati provident distinctio voluptatibus, saepe incidunt dicta.</p>
            
          </div>

          <div className='flex flex-col gap-4 justify-start items-start'>

            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Introduction</h2>
            <p className="text-center text-gray-300 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates cupiditate labore quae ipsam illum eveniet dolorem veritatis, necessitatibus neque magnam a delectus accusantium beatae omnis! Omnis, ea. Recusandae, libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, eius repellat? Ad repellat, praesentium sapiente consequuntur perspiciatis voluptas totam, voluptatem ab explicabo facere obcaecati provident distinctio voluptatibus, saepe incidunt dicta.</p>
            
          </div>


        </div>

      </section>



    </div>


  )
}
