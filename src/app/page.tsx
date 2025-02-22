
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Aboutus from "@/components/Aboutus";
import Aboutuscarousel from "@/components/Aboutuscarousel"



export default function Home() {

  return (
    <>
    <div className="">
      <Navbar />
      <Hero />
      <Aboutus />
      <div className="mt-[-10px] mb-[60px]">
        <Aboutuscarousel />
      </div>
    </div>
    </>
  );
}