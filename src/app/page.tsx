
import CarouselProduct from "@/components/Carousel/PageMain/Product";
import OurScale from "@/components/Elements/OurScale";
import PortfolioGallery from "@/components/Elements/Portfolio";
import Icon from "@/styles/Icon";
import IconListItem from "@/styles/IconText";
import Images from "@/styles/Images";
import Image from "next/image";

export default function Home() {

  return (


        <div className="w-full ">


          {/* Side 1 */}

          <div className="w-full flex flex-col gap-8 md:gap-4 sm:flex-row justify-center items-center rounded-3xl bg-gradient-to-t  dark:from-blue-500 via-blue-500/10 to-transparent mt-10">

            
            <h1 className="hidden text-3xl text-blue-600 dark:text-white">One Solution For Every Your Bisnis.</h1>


            <div className="w-full flex flex-col gap-4">


              <p className="text-3xl font-bold bg-gradient-to-r from-[#36d1f4] via-[#1537c0] to-[#027bbc] bg-clip-text text-transparent">
                Click Usaha
              </p>


              <h1 className="text-3xl md:text-[3rem] text-slate-800 w-full max-w-[35rem] leading-snug lg:eading-normal">One Solution For Every Your Bisnis.</h1>
              <p className=" text-md md:text-[18px] text-slate-500"> Upgrade to the PRO version of Untitled UI to unlock everything. Here’s a 10% discount to say thanks: </p>
              
              <button className="w-full text-[16px] font-semibold max-w-[12em] border-dashed border-[1px] border-blue-400 px-4 py-2 text-blue-600 rounded-xl">
                  <h1> Our Product  </h1>
              </button>

            </div>
            
            <div className="relative w-full flex justify-end p-2 md:p-8">

                <Image
                    src="/assets/Image/image.png"
                    alt="MyApp Logo"
                    width={500}
                    height={400}
                />

                <div className="absolute flex flex-col md:gap-4 top-0 left-0 w-full max-w-[10rem] sm:max-w-[13rem]  md:max-w-[15rem] lg:max-w-[21rem] border-[1px] lg:border-[0px] bg-white p-2 md:p-6 rounded-lg shadow-lg">
                    
                    <h1 className=" text-[12px] md:text-[15px]"> Total Visit </h1>
                    <h2 className=" text-[14px] md:text-[26px]"> 2,402</h2>

                    <div className="flex gap-2 text-[12px] md:text-[16px]">

                      <Image
                          src="/assets/Image/trend.png"
                          alt="MyApp Logo"
                          width={22}
                          height={20}
                      />
                      <p className="flex"> <span className="text-[#12B76A] mr-2">10%</span>  For las month</p>

                    </div>

                </div>

                <h1 className="absolute py-1 px-2 left-[11rem] lg:left-10 top-[10rem] md:top-[15rem] bg-[#267ff5] text-white">
                    E-commerce
                </h1>

                <h1 className="absolute py-1 px-2 left-[1rem] lg:-left-[2rem] top-[11rem] lg:top-[20rem] bg-[#907CFF] text-white">
                    Education
                </h1>

            </div>


          </div>


          {/* Side 2 */}
          <div className="w-full flex flex-col gap-8 lg:gap-4 p-2 lg:p-4 md:flex-row justify-center items-center rounded-3xl bg-gradient-to-t  dark:from-blue-500 via-blue-500/10 to-transparent mt-[6.5rem]">

          
            <div className="w-full flex flex-col gap-4 p-2">

              <div className="w-full max-w-[5rem] flex text-md text-[#267ff5] bg-[#d0def1] dark:text-white rounded-lg">
                <h1 className="m-auto text-white">Process</h1>
              </div>


              <h1 className="text-3xl md:text-[2rem] lg:text-[3rem] text-slate-800 w-full max-w-[35rem]">Process Our Work.</h1>
              <p className="text-[14px] text-slate-500"> Capitalize on low hanging fruit to loop identify a ballpark value added activity beta test the digital divided with additional clickthroughs from will close the loop on the bottom. </p> 
 
              <ul className="space-y-2 grid grid-cols-2">
                <IconListItem iconName="checklist" text="Chat" />
                <IconListItem iconName="checklist" text="Research" />
                <IconListItem iconName="checklist" text="Transaction" />
                <IconListItem iconName="checklist" text="Deal" />
              </ul>

              <button className="w-full text-[16px] font-semibold max-w-[12em] border-dashed border-[1px] border-blue-400 px-4 py-2 text-slate-800 rounded-xl bg-[#a4f06b]">
                  <h1> Get Started Free  </h1>
              </button>

            </div>
            
            <div className="relative w-full flex ">

              <div className="w-full flex flex-col gap-10 md:gap-15 p-2 md:p-8">

                <div className="bg-[#267ff5] w-full max-w-[18rem] md:max-w-[20rem] flex gap-4 p-2 md:p-5 rounded-3xl rounded-tl-none">

                  <figure className="bg-white flex w-[5rem] h-[2.8rem] rounded-full">

                    <Images iconName="trend" size="w-6 h-6 m-auto" />

                  </figure>

                  <div className="flex flex-col gap-1">
                    <p className="text-slate-50 font-semibold text-[15px]">Unigue Design</p>
                    <p className="text-slate-200 font-normal text-[11px]">Value added activity beta test the digital will close the loop on the bottom</p>
                  </div>

                </div>

                <div className="flex gap-10 justify-end ">

                  <div className="w-full max-w-[18rem] md:max-w-[20rem] flex gap-4 p-2 md:p-5 rounded-3xl rounded-tl-none shadow-xl">

                    <figure className="bg-[#b3d4fe] flex w-[5rem] h-[2.8rem] rounded-full">

                    <Icon iconName="pencil" size="w-6 h-6 m-auto" />

                    </figure>

                    <div className="flex flex-col gap-1">
                      <p className="text-[#267ff5] font-semibold text-[15px]">Easy To Customize</p>
                      <p className="text-slate-500 font-normal text-[11px]">Value added activity beta test the digital will close the loop on the bottom</p>
                    </div>

                  </div>

                </div>

                <div className="w-full max-w-[18rem] md:max-w-[20rem] flex gap-4 p-2 md:p-5 rounded-3xl rounded-tl-none shadow-xl">

                  <figure className="bg-[#b3d4fe] flex w-[5rem] h-[2.8rem] rounded-full">

                    <Icon iconName="masonry" size="w-8 h-8 m-auto" />

                  </figure>

                  <div className="flex flex-col gap-1">
                    <p className="text-[#267ff5] font-semibold text-[15px]">Multipurpose Layout</p>
                    <p className="text-slate-500 font-normal text-[11px]">Value added activity beta test the digital will close the loop on the bottom</p>
                  </div>

                </div>

              </div>


            </div>


          </div>



          {/* Side 3 */}
          <div className="pt-[8rem]">

            <div className="bg-[#267ff5] h-full rounded-t-[8rem] relative w-full ">

                  <div className="h-[15rem] overflow-hidden">
                    <CarouselProduct/>
                  </div>

                  <div className="mb-2">

                  <OurScale/>

                  </div>

            </div>

          </div>



          <div className="mt-[5rem]">

          <PortfolioGallery/>


          </div>


          {/* Side 4  */}
          <div className="w-full flex flex-col 3xl:flex-row gap-8 lg:gap-4 p-2 lg:p-4 md:flex-row justify-center items-center rounded-3xl bg-gradient-to-t  dark:from-blue-500 via-blue-500/10 to-transparent mt-[6.5rem]">

          
            <div className="w-full max-w-[40rem] flex flex-col gap-4 lg:gap-8 p-2">

              <div className="w-full max-w-[5rem] flex text-md text-[#267ff5] bg-[#267ff5] dark:text-white rounded-3xl rounded-tl-none">
                <h1 className="m-auto text-white">Service</h1>
              </div>


              <h1 className="text-3xl md:text-[2rem] lg:text-[2.7rem] text-slate-800 w-full max-w-[35rem]">Our The Best Services</h1>
              <p className="text-[14px] text-slate-400"> Capitalize on low hanging to loop identify a ballpark value added activity beta the digital divided with additional click throughs from will close the bottom </p> 

              <button className="w-full text-[16px] font-semibold max-w-[8em] border-dashed border-[1px] border-blue-400 px-4 py-2 text-slate-800 rounded-xl bg-[#a4f06b]">
                  <h1> Explore  </h1>
              </button>

            </div>
            
            <div className="relative w-full max-w-[36rem] flex ">

              <div className="w-full flex flex-col gap-4 md:gap-4 p-2 md:px-4 pt-[5rem]">

                <div className="w-full max-w-[12rem] md:max-w-[16rem] shadow-main-glow flex flex-col gap-4 p-2 py-5 md:p-5 md:py-11 rounded-3xl rounded-tl-none">

                  <figure className="bg-[#e0ecfb] flex w-[5rem] h-[5rem] rounded-full">

                    <Images iconName="Services/computer" size="w-[3rem] h-[3rem] m-auto" />

                  </figure>

                  <div className="flex flex-col gap-1 md:gap-3">
                    <p className="text-[16px] md:text-[21px] text-slate-800 font-bold" >Web Development</p>
                    <p className="text-slate-400 font-semibold text-[9px] md:text-[13px]">Modern, fast, and responsive websites tailored to your business needs.</p>
                  </div>

                </div>

                <div className="w-full max-w-[12rem] md:max-w-[16rem] shadow-sub-glow flex flex-col gap-4 p-2 md:p-5 py-5 md:py-11 rounded-3xl rounded-tl-none">

                  <figure className="bg-[#e0ecfb] flex w-[5rem] h-[5rem] rounded-full">

                    <Images iconName="Services/apps" size="w-[2.5rem] h-[2.5rem] m-auto" />

                  </figure>

                  <div className="flex flex-col gap-1 md:gap-3">
                    <p className="text-[16px] md:text-[21px] text-slate-800 font-bold" >Mobile Apps</p>
                    <p className="text-slate-400 font-semibold text-[9px] md:text-[13px]">Smooth and intuitive mobile apps for iOS and Android platforms.</p>
                  </div>

                </div>

      

              </div>

              <div className="w-full flex flex-col gap-4 md:gap-5 p-2 md:px-4 pb-8">

                <div className="w-full max-w-[12rem] md:max-w-[16rem] shadow-sub-glow flex flex-col gap-4 p-2 md:p-5 py-5 md:py-11 rounded-3xl rounded-tl-none">

                  <figure className="bg-[#e0ecfb] flex w-[5rem] h-[5rem] rounded-full">

                    <Images iconName="Services/brand" size="w-[2.5rem] h-[2.5rem] m-auto" />

                  </figure>

                  <div className="flex flex-col gap-1 md:gap-3">
                    <p className="text-[16px] md:text-[21px] text-slate-800 font-bold" >Branding</p>
                    <p className="text-slate-400 font-semibold text-[9px] md:text-[13px]">Visual identities that make your brand stand out and stay memorable.</p>
                  </div>

                </div>

                <div className="w-full max-w-[12rem] md:max-w-[16rem] shadow-sub-glow flex flex-col gap-4 p-2 md:p-5 py-5 md:py-11 rounded-3xl rounded-tl-none">

                  <figure className="bg-[#e0ecfb] flex w-[5rem] h-[5rem] rounded-full">

                    <Images iconName="Services/puzzle" size="w-[2.5rem] h-[2.5rem] m-auto" />

                  </figure>

                  <div className="flex flex-col gap-1 md:gap-3">
                    <p className="text-[16px] md:text-[21px] text-slate-800 font-bold" >Design</p>
                    <p className="text-slate-400 font-semibold text-[9px] md:text-[13px]">Creative and functional designs for digital and print media.</p>
                  </div>

                </div>
      

              </div>


            </div>


          </div>

        </div>
  );
}
