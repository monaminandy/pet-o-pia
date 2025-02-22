
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Aboutus from "@/components/Aboutus";
import Aboutuscarousel from "@/components/Aboutuscarousel"
import Getstart from "@/components/Getstart";
import Review from "@/components/Review";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";



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
      <div className="bg-primary  p-10">
        <h1 className="text-7xl ml-[20px] mr-[20px] mb-[30px] font-bold text-center mt-[100px] text-white ">
              HOW TO GET to STARTED?
        </h1>
        <Getstart />
      </div>
      <div className="bg-white  p-10">
        <h1 className="text-7xl ml-[20px] mr-[20px] mb-[90px] font-bold text-center mt-[100px] text-primary ">
              OUR USER'S FEEDBACK
        </h1>
        <Review />
      </div>
      <div className="bg-primary  p-10">
        <h1 className="text-7xl ml-[20px] mr-[20px] mb-[60px] font-bold text-center mt-[100px] text-white ">
              DROP YOUR QUERY
        </h1>
        <Contactus />
      </div>
      <Footer />
    </div>
    </>
  );
}