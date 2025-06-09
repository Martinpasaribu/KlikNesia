// app/about/page.tsx
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Click Usaha",
  description: "Pelajari lebih dalam tentang Click Usaha, platform terpercaya untuk membantu pengembangan bisnis Anda dengan solusi digital inovatif dan layanan terbaik.",
  keywords: "Tentang Click Usaha, Sejarah Click Usaha, Platform bisnis digital, Solusi bisnis online, Pengembangan usaha, Layanan Click Usaha",
  openGraph: {
    title: "Click Usaha",
    description: "Click Usaha - Mitra digital terpercaya untuk kemajuan bisnis Anda.",
    url: "https://clickusaha.com/about",
    siteName: "Click Usaha",
    images: [
      {
        url: "https://clickusaha.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Click Usaha",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Click Usaha",
    description: "Click Usaha - Mitra digital terpercaya untuk kemajuan bisnis Anda.",
    images: ["https://clickusaha.com/og-image2.png"],
  },
};


const AboutPage = () => {
  return (
    <div className="max-w-8xl mx-4 px-0 py-8 space-y-[2rem] md:space-y-[3rem]">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-gray-600">
          We Provide the best designed plugin to our clients by maximising the innovation.
        </p>
        <div className="flex justify-center items-center space-x-3 mt-4">
          <span>Ratings</span>
          <span className="text-yellow-400 text-xl">⭐ 5.0</span>
          <div className="flex -space-x-2">
            <Image src="/assets/avatar/avatar.png" alt="User" width={28} height={28} className="rounded-full border-2 border-white" />
            <Image src="/assets/avatar/avatar.png" alt="User" width={28} height={28} className="rounded-full border-2 border-white" />
            <Image src="/assets/avatar/avatar.png" alt="User" width={28} height={28} className="rounded-full border-2 border-white" />
            <div className="w-8 h-8 bg-blue-600 text-white text-sm flex items-center justify-center rounded-full border-2 border-white">100+</div>
          </div>
        </div>
      </section>

      {/* Values Section */}

      <section className="flex  flex-col md2:flex-row items-center justify-around">
          {/* Gambar kiri */}
          <div className="relative w-full max-w-[50rem] h-[480px] md:h-[650px]">
              {/* Gambar belakang */}
              <Image
              src="/assets/Image/about/creative.png"
              alt="Server Room"
              width={450}
              height={800}
              className="rounded-xl object-cover absolute top-0 left-0 w-full max-w-[15rem] md:max-w-[19rem] md2:max-w-[26rem]"
              />

              {/* Gambar depan, lebih besar dan agak menutupi */}
              <figure className='relative w-full h-[480px] md:h-[650px]'>
                  <Image
                  src="/assets/Image/about/creative.jpg"
                  alt="Staff"
                  width={450}
                  height={550}
                  className="rounded-xl object-cover absolute bottom-0 right-0 shadow-lg w-full max-w-[15rem] md:max-w-[22rem] md2:max-w-[28rem]"
                  />
              </figure>
          </div>

          {/* Konten kanan */}
          <div className="px-1 md:px-5 md2:px-10 w-full md2:max-w-[25rem] flex justify-end items-end mt-5">
              <figure className='w-full max-w-2xl flex flex-col gap-8'>
                  <h2 className="text-sm md:text-lg font-semibold text-gray-500">OUR VALUES</h2>
                  <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                  Meet OK Media.<br />
                  digital.<br />
                  innovative.<br />
                  creative.
                  </h3>
                  <p className="text-gray-600">
                  Join a team who works as hard as you do,<br />
                  and allows your business and technology<br />
                  manipulate big data.
                  </p>
              </figure>
          </div>
      </section>


      {/* Mission Section */}
      {/* <section className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">OUR MISSION</h2>
            <h3 className="text-3xl font-bold leading-tight">
              We help people create<br /> and build wealth.
            </h3>
            <p className="text-gray-600 mt-2">
              We have marked our presence globally reaching over a million of website owners using our products.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-600">01</h4>
              <h5 className="font-semibold">OK Media Business Vision</h5>
              <p className="text-gray-600 text-sm">
                Great, consistent work means more than hours clocked. Dominating the industry is a top priority.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-600">02</h4>
              <h5 className="font-semibold">Our mission for sustainability</h5>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-600">03</h4>
              <h5 className="font-semibold">Our mission for sustainability</h5>
            </div>
          </div>
        </div>

        <Image src="/assets/Image/about/meet.jpg" alt="Man on phone" width={500} height={500} className="rounded-xl object-cover" />
      </section> */}

      {/* Vision & Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-start mt-5">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm md:text-xl font-semibold text-gray-500 mb-4">VISION</h2>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Digital Transformation for MSMEs & Mid-Sized Businesses
            </h3>
            <p className="text-gray-600 mt-2">
              Leading the acceleration of digital transformation for MSMEs and mid-sized companies through affordable technology solutions, practical education, and ongoing support.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm md:text-xl font-semibold text-gray-500">MISSION</h2>

            <div>
              <h4 className="font-semibold text-indigo-600">01</h4>
              <h5 className="font-semibold">All-in-One Solutions</h5>
              <p className="text-gray-600 text-sm">
                Ready-to-use applications tailored to MSME needs like digital cashier systems, inventory management, and marketing tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-600">02</h4>
              <h5 className="font-semibold">Supportive Consultation</h5>
              <p className="text-gray-600 text-sm">
                Affordable advisory services to help identify digital challenges and provide practical solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-600">03</h4>
              <h5 className="font-semibold">Adaptive Education</h5>
              <p className="text-gray-600 text-sm">
                Case-based training programs that are easy to apply and tailored to the realities of MSMEs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-600">04</h4>
              <h5 className="font-semibold">Broad Collaboration</h5>
              <p className="text-gray-600 text-sm">
                Partnering with government, communities, and industry to expand access to technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-600">05</h4>
              <h5 className="font-semibold">Data-Driven Impact</h5>
              <p className="text-gray-600 text-sm">
                Measuring the real impact of each solution through increased revenue, efficiency, and market reach.
              </p>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center items-center">
          <Image
            src="/assets/Image/about/meet.jpg"
            alt="Man on phone"
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
