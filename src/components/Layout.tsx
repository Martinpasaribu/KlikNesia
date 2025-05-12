import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-black w-full ">
      <Navbar />
      <main className="flex-grow container mx-auto px-2 md:px-4 py-2 md:py-8">{children}</main>
      <Footer />
    </div>
  );
}
