
import React from 'react'
import Image from 'next/image'


const OurScale = () => {
  return (

        <div className="flex flex-col gap-5 justify-center items-center overflow-hidden pb-5">
            <h1 className="text-white text-xl md:text-4xl font-semibold text-center mt-10 "> Our Scale</h1>

            {/* bg-[#00880c] */}
            <button className="bg-[rgb(16_24_32)] text-white rounded-3xl py-2 px-4 text-sm">

                <h1>Scale with us</h1>

            </button>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[2rem] overflow-hidden">

                <figure className="h-full flex flex-col gap-5 p-10 bg-white rounded-[3rem]">
                    
                    <div className="w-full h-full max-h-[11rem]">
                    <Image
                        src="/assets/Image/image.png"
                        alt="MyApp Logo"
                        width={200}
                        height={200}
                    />
                    </div>
                    <h1 className="text-xl font-bold">UMKM</h1>
                    <p className="text-[14px]">Usaha Mikro in Indonesia</p>

                </figure>


                <figure className="h-full flex flex-col gap-5 p-10 bg-white rounded-[3rem]">
                    
                    <div className="w-full h-full max-h-[11rem]">
                    <Image
                        src="/assets/Image/image.png"
                        alt="MyApp Logo"
                        width={200}
                        height={200}
                    />
                    </div>
                    <h1 className="text-xl font-bold">PERUSAHAAN</h1>
                    <p className="text-[14px]">Usaha Mikro in Indonesia</p>

                </figure>

                <figure className="h-full flex flex-col gap-5 p-10 bg-white rounded-[3rem]">
                    
                    <div className="w-full h-full max-h-[11rem]">
                    <Image
                        src="/assets/Image/image.png"
                        alt="MyApp Logo"
                        width={200}
                        height={200}
                    />
                    </div>
                    <h1 className="text-xl font-bold">PERSONAL</h1>
                    <p className="text-[14px]">Usaha Mikro in Indonesia</p>

                </figure>



            </div>


            </div>
  )
}

export default OurScale