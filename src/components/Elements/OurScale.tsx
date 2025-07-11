
import React from 'react'
import Image from 'next/image'


const OurScale = () => {
  return (

        <div className="flex flex-col gap-10 justify-center items-center overflow-hidden py-10">
            <h1 className="text-slate-800 text-xl md:text-4xl font-semibold text-center mt-10 "> Our Scale</h1>

            {/* bg-[#00880c] */}
            {/* <button className="bg-[rgb(16_24_32)] text-white rounded-3xl py-2 px-4 text-sm">

                <h1>Scale with us</h1>

            </button> */}


            <div className="grid grid-cols-1 md:grid-cols-2 md1:grid-cols-3 xl:grid-cols-4 p-5 gap-[4rem] mt-[2rem] md:mt-[4rem] ">

                <figure className="h-full flex flex-col gap-6 p-4 py-10 bg-white rounded-[3rem]">
                    
                    <div className="w-full h-full max-h-[2rem] relative pt-10">
                        <Image
                            src="/assets/Image/Scale/umkm.png"
                            alt="MyApp Logo"
                            className='absolute -top-[4rem] -right-[2rem] '
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className='px-5'>

                        <h1 className="text-xl font-bold">UMKM</h1>
                        <p className="text-[14px]">Usaha mikro di Indonesia</p>
                    </div>

                </figure>


                <figure className="h-full flex flex-col gap-6 p-4 py-10 bg-white rounded-[3rem]">
                    
                    <div className="w-full h-full max-h-[10rem] relative pt-8">
                    <Image
                        src="/assets/Image/Scale/goverment.png"
                        alt="MyApp Logo"
                        className='absolute -top-[5rem] -right-[2.5rem] '
                        width={190}
                        height={190}
                    />
                    </div>

                    <div className='px-5'>

                        <h1 className="text-xl font-bold">Government</h1>
                        <p className="text-[14px]">Badan Usaha Pemerintahan </p>

                    </div>
                    

                </figure>

                <figure className="h-full flex flex-col gap-6 p-4 py-10 bg-white rounded-[3rem]">
                    
                    <div className="w-full h-full max-h-[2rem] relative pt-6">
                    <Image
                        src="/assets/Image/Scale/personal.png"
                        alt="MyApp Logo"
                        className='absolute -top-[5rem] -right-[2rem] '
                        width={170}
                        height={170}
                    />
                    </div>

                    <div className='px-5'>

                        <h1 className="text-xl font-bold">Pribadi</h1>
                        <p className="text-[14px]">Pribadi, Perorangan & Komunitas</p>

                    </div>
                    

                </figure>

                <figure className="h-full flex flex-col gap-6 p-4 py-10 bg-white rounded-[3rem]">
                    
                    <div className="w-full h-full max-h-[10rem] relative pt-8">
                    <Image
                        src="/assets/Image/Scale/perusahaan.png"
                        alt="MyApp Logo"
                        className='absolute -top-[6rem] -right-[2rem] '
                        width={150}
                        height={150}
                    />
                    </div>

                    <div className='px-5'>

                        <h1 className="text-xl font-bold">Perusahaan</h1>
                        <p className="text-[14px]">Bisnis Perusahan Swasta </p>

                    </div>
                    

                </figure>


            </div>


            </div>
  )
}

export default OurScale